export function parseValue(value: string): string{
    return parseFloat(value)
            .toFixed(2)
            .toString()
            .split('.')[0];
}
