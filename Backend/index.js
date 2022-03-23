const express = require("express");
const DB = require("./models/index");
var cors = require("cors");
var app = express();

app.use(cors());

//search route end point
app.get("/search", (req, res) => {
  const { query } = req;
  const { search } = query;

  DB.Covid.findAll({
    attributes: [
      [DB.Sequelize.fn("DISTINCT", DB.Sequelize.col("state")), "state"],
    ],
    where: {
      state: {
        [DB.Sequelize.Op.iLike]: `%${search}%`,
      }, // case insensitive
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

 //api to get the data of the state
app.get("/states/:stateName", async (req, res) => {
    const cachedStateData = await DB.redis.get(req.params.stateName);
    if(cachedStateData) {
        console.log("found cache");
        return res.send(JSON.parse(cachedStateData));
    }
    console.log("did not find cache");
    
  DB.Covid.findAll({
    where: {
      state: req.params.stateName,
    },
  })

    .then(async (data) => {
        await DB.redis.set(req.params.stateName, JSON.stringify(data));
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});
//just a normal get route
app.get("/", (req, res) => {
  res.send("Invalid Route");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
