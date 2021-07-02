import { getResultWithPlan } from '../src/functions/getResultWithPlan';

describe('Testing getResultWithPlan function', () => {
    test('Testing if the plan cover the bill when time is lesser than the plan', () => {
        const data = {
            time: 20,
            plan: 30
        };

        const feeRate = 1;

        const result = getResultWithPlan(data, feeRate);

        expect(result).toEqual(0);
    });

    test('Testing if the plan do not cover the bill when time is greater than the plan', () => {
        const data = {
            time: 50,
            plan: 30
        };

        const feeRate = 1;
    
        const result = getResultWithPlan(data, feeRate);
    
        expect(result).toBeGreaterThan(0);
    });
});