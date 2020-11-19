//Closure
//var lastName = 'Soares';
/* istanbul ignore next */
function getFullName() {
    return `Israel ${lastName}`;
}
// console.log(getFullName());

// lastName = 'Oliveira';
// console.log(getFullName());

try {
    module.exports = {getFullName};
} catch(e) {throw new Error(e)}