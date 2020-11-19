/**istanbul ignore next */
//const addTemporaryEmployee = (data, employee) => data.concat(employee);

const addTemporaryEmployee = (data, employee) => [...data, employee];

try {
    module.exports = {addTemporaryEmployee};
} catch(e) {
    throw new Error(e)
}