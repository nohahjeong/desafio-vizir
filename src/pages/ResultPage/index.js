import { useHistory } from 'react-router-dom';
import { getResultWithPlan } from '../../functions/getResultWithPlan';
import { getResultWithoutPlan } from '../../functions/getResultWithoutPlan';
import { setFeeRate } from '../../functions/setFeeRate'
import { formatToMoney } from '../../functions/formatToMoney';

const ResultPage = () => {
    const history = useHistory();

    let data = useHistory().location.state.data;

    const feeRate = setFeeRate(data);

    let resultWithPlan;

    let resultWithoutPlan;

    if (feeRate == 0) {
        resultWithPlan = '-';

        resultWithoutPlan = '-';
    } else {
        resultWithPlan = getResultWithPlan(data, feeRate);

        resultWithoutPlan = getResultWithoutPlan(data, feeRate);
    }

    return (
        <div>
            <button onClick={() => history.push('/')}>
                Voltar
            </button>

            <div>
                Com FaleMais: {formatToMoney(resultWithPlan)}
            </div >

            <div>
                Sem FaleMais: {formatToMoney(resultWithoutPlan)}
            </div >
        </div >
    );
}

export default ResultPage;