/**
 * @version 1.0.1
 * @param {*} employee
 * @author `<so.israelweb@gmail.com>
 * @description "retorna uma lista de usuários de acordo com o parâmetro de propriedade e valor - FIX-CFA-121" 
 * @example ```
 * const getEmployee = findEmployeeBy(employeeList)('firstName', 'Ford')
 * ```
 */
const findEmployeeBy = employee => (key, value) => employee.filter(e => (
    e[key].toLowerCase() === value.toLowerCase()
));

try {
    module.exports = {findEmployeeBy};
} catch(e) {
    throw new Error(e)
}