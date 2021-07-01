export const formatToMoney = (value) => {
    if (isNaN(value)) {
        return value;
    } else {
        return `$ ${value.toFixed(2)}`
    }
}