import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { validateForm } from '../../functions/validateForm';
import { BodyContainer, Form, FormInputsContainer } from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';

const HomePage = () => {
    const history = useHistory();

    const [form, onChangeInput] = useForm({
        originCity: '',
        destinationCity: '',
        time: '',
        plan: ''
    });

    const onSubmit = (event) => {
        event.preventDefault();

        const alertMessage = validateForm(form);

        if (alertMessage) {
            alert(alertMessage);
        } else {
            history.push('/result', { data: form });
        };
    };

    return (
        <div>
            <Header />

            <BodyContainer>
                <h1>FaleMais</h1>

                <p>Você pode calcular o valor da sua ligação aqui. Escolha os códigos das cidades de origem e destino, o tempo da ligação em minutos e o seu plano FaleMais.</p>

                <Form onSubmit={onSubmit}>
                    <FormInputsContainer>
                        <div>
                            <select
                                onChange={onChangeInput}
                                value={form.originCity}
                                name='originCity'
                            >
                                <option value='' disabled>Cidade de origem</option>
                                <option value='011'>São Paulo</option>
                                <option value='016'>Ribeirão Preto</option>
                                <option value='017'>São José do Rio Preto</option>
                                <option value='018'>Presidente Prudente</option>
                            </select>
                        </div>

                        <div>
                            <select
                                onChange={onChangeInput}
                                value={form.destinationCity}
                                name='destinationCity'
                            >
                                <option value='' disabled>Cidade destino</option>
                                <option value='011'>São Paulo</option>
                                <option value='016'>Ribeirão Preto</option>
                                <option value='017'>São José do Rio Preto</option>
                                <option value='018'>Presidente Prudente</option>
                            </select>
                        </div>

                        <div>
                            <input
                                placeholder="Tempo em minutos"
                                type='number'
                                onChange={onChangeInput}
                                value={form.time}
                                name='time'
                            />
                        </div>

                        <div>
                            <select
                                onChange={onChangeInput}
                                value={form.plan}
                                name='plan'
                            >
                                <option value='' disabled>Plano</option>
                                <option value='30'>FaleMais 30</option>
                                <option value='60'>FaleMais 60</option>
                                <option value='120'>FaleMais 120</option>
                            </select>
                        </div>
                    </FormInputsContainer>

                    <Button text={'Calcular'}></Button>
                </Form>
            </BodyContainer>
        </div>
    );
}

export default HomePage;