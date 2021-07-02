export const formatToMoney = (value) => {
    if (isNaN(value)) {
        return value;
    } else {
        return (
            <p>R$ {value.toFixed(2)}</p>
        );
    };
}