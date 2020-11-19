function addCard(employee) {
    return {...employee, card: 'AMEX BLACK'};
}

try {
    module.exports = {addCard};
} catch(e) {
    throw new Error(e)
}