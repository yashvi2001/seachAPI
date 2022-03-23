import _ from 'lodash';

export const requestData = _.memoize(async data => {
    const res = await fetch(`http://localhost:3000/states/${data}`);
    
    if(res.status !== 200) return [];
const DataArray = await res.json();
return DataArray;
});