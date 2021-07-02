import { useHistory } from 'react-router-dom';
import { getResultWithPlan } from '../../functions/getResultWithPlan';
import { getResultWithoutPlan } from '../../functions/getResultWithoutPlan';
import { setFeeRate } from '../../functions/setFeeRate';
import { formatToMoney } from '../../functions/formatToMoney';
import Header from '../../components/Header';
import { BodyContainer, CardsContainer, WithoutPlanCard, WithPlanCard } from './styles';
import Button from '../../components/Button';

const ResultPage = () => {
    const history = useHistory();

    let data = useHistory().location.state.data;

    const feeRate = setFeeRate(data);

    let resultWithPlan;

    let resultWithoutPlan;

    if (feeRate === 0) {
        resultWithPlan = '-';

        resultWithoutPlan = '-';
    } else {
        resultWithPlan = getResultWithPlan(data, feeRate);

        resultWithoutPlan = getResultWithoutPlan(data, feeRate);
    };

    return (
        <div>
            <Header />

            <BodyContainer>
                <CardsContainer>
                    <WithoutPlanCard>
                        <div>Sem FaleMais</div>

                        {formatToMoney(resultWithoutPlan)}
                    </WithoutPlanCard>

                    <WithPlanCard>
                        <div>Com FaleMais</div>

                        {formatToMoney(resultWithPlan)}
                    </WithPlanCard>
                </ CardsContainer>

                <Button onClick={() => history.push('/')} text={'Calcular Novamente'} />
            </BodyContainer>
        </div >
    );
}

export default ResultPage;