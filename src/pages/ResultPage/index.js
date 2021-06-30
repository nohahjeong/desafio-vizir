import { useHistory } from 'react-router-dom';

const ResultPage = () => {
    const history = useHistory();

    let data = useHistory().location.state.data;

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

    let resultWithPlan = '-';

    if (Number(data.time) <= Number(data.plan)) {
        resultWithPlan = 0;
    } else {
        const overtime = Number(data.time) - Number(data.plan);

        resultWithPlan = (overtime * feeRate) * 1.1;
    };

    let resultWithoutPlan;

    resultWithoutPlan = Number(data.time) * feeRate;

    console.log(data, feeRate)

    return (
        <div>
            <button onClick={() => history.push('/')}>
                Voltar
            </button>

            <div>
                Com FaleMais: $ {resultWithPlan}
            </div >

            <div>
                Sem FaleMais: $ {resultWithoutPlan}
            </div >
        </div >
    );
}

export default ResultPage;