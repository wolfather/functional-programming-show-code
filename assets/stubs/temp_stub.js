const tempEmployee = {
    firstName: 'Bob', 
    lastName: 'Marley', 
    role: 'art director', 
    level: '0', 
    salary: '3700'
};

try {
    module.exports = {tempEmployee};
} catch(e) {throw new Error(e)}