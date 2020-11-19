function appendEmail(employee) {
    return {...employee, email: `${employee.firstName.toLowerCase()}@acme.com`};
}

try {
    module.exports = {appendEmail};
} catch(e) {
    throw new Error(e)
}