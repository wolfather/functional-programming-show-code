function accumulateValue(previousValue: any, currentValue: any): any {
    return currentValue(previousValue);
}

export default function makeComposition(...functions: Array<Function>): Function {
    return function(value: any): Array<Function> {
        return functions.reduce(accumulateValue, value);
    };
}