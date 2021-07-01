export const getResultWithPlan = (data, feeRate) => {
    if (Number(data.time) <= Number(data.plan)) {
        return 0;
    } else {
        const overtime = Number(data.time) - Number(data.plan);

        return ((overtime * feeRate) * 1.1);
    };
}