const helper = {
    parseSalary: value => value.toFixed(2).toString().split('.')[0] 
};

function curryingEmployee(employee) {
    return function(performanceRating) {
        if(performanceRating.toLowerCase() === 'average') {
            const _salary = (employee.salary * 1.10);

            return helper.parseSalary(_salary);
        } else if(performanceRating.toLowerCase() === 'above') {
            const _salary = (employee.salary * 1.5);

            return helper.parseSalary(_salary);
        }
        return employee.salary;
    }
}

try {
    module.exports = {curryingEmployee, helper};
} catch(e) {throw new Error(e)}