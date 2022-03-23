import _ from 'lodash';

export const requestStates = _.memoize(async data => {
    const res = await fetch(`http://localhost:3000/search?search=${data}`);
    if(res.status !== 200) return [];

    const StatesArray = await res.json();
    return StatesArray;
});
