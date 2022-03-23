import {React,useState} from 'react';
import {requestData} from '../apis/covidData';

const Sta = ({statesC,setSearch}) => {
 
  const setSearchName = async () => {
  console.log(statesC.state);
  setSearch(statesC.state);

  const data = await requestData(statesC.state);

}
    return (
        <div className='states-container'>
       <p className="states" onClick={setSearchName}>
            {statesC.state}
          </p>
        </div>
      );
};

export default Sta;

