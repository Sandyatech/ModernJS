

export function add(...numbers) {
    return numbers.reduce((total, number) => total += number, 0);
}
