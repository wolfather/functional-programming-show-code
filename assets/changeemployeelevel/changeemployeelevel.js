function changeEmployeeLevel(employee) {
    const level = (parseInt(employee.level) + 1).toString();
    return {...employee, level};
}


try {
    module.exports = {changeEmployeeLevel};
} catch(e) {
    throw new Error(e)
}