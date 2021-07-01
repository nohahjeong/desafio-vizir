export const setFeeRate = (data) => {
    let feeRate = '-';

    if (data.originCity === '011') {
        if (data.destinationCity === '016') {
            feeRate = 1.90
        } if (data.destinationCity === '017') {
            feeRate = 1.70
        } if (data.destinationCity === '018') {
            feeRate = 0.90
        };
    };

    if (data.originCity === '016') {
        if (data.destinationCity === '011') {
            feeRate = 2.90
        } else {
            feeRate = 0
        };
    };

    if (data.originCity === '017') {
        if (data.destinationCity === '011') {
            feeRate = 2.70
        } else {
            feeRate = 0
        };
    };

    if (data.originCity === '018') {
        if (data.destinationCity === '011') {
            feeRate = 1.90
        } else {
            feeRate = 0
        };
    };

    return (feeRate);
}