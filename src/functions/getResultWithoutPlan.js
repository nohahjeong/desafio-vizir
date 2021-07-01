export const getResultWithoutPlan = (data, feeRate) => {
    return (Number(data.time) * feeRate);
}