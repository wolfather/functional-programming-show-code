/**istanbul ignore next */
// function _groupEmployeesBy(data, group) {
//     return data.reduce((item, index) => {
//         (item[index[group]] = item[index[group]] || []).push(index);
//         //item[index[group]].push(index);
        
//         return item;
//     }, {});
// }

const groupEmployeesBy = (data, group) => data.reduce((item, index) => {
    (item[index[group]] = item[index[group]] || []).push(index);
    return item;
}, {});


try {
    module.exports = {groupEmployeesBy,};
} catch(e) {throw new Error(e)}