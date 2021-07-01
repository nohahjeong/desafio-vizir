import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom'
import { validateForm } from '../../functions/validateForm';

const HomePage = () => {
    const history = useHistory();

    const [form, onChangeInput] = useForm({
        originCity: '',
        destinationCity: '',
        time: '',
        plan: ''
    })

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
            HomePage

            <form onSubmit={onSubmit}>
                <label>Cidade de Origem</label>
                <select
                    onChange={onChangeInput}
                    value={form.originCity}
                    name='originCity'
                >
                    <option value='' disabled>Selecione uma cidade</option>
                    <option value='011'>São Paulo</option>
                    <option value='016'>Ribeirão Preto</option>
                    <option value='017'>São José do Rio Preto</option>
                    <option value='018'>Presidente Prudente</option>
                </select>

                <select
                    onChange={onChangeInput}
                    value={form.destinationCity}
                    name='destinationCity'
                >
                    <option value='' disabled>Selecione uma cidade</option>
                    <option value='011'>São Paulo</option>
                    <option value='016'>Ribeirão Preto</option>
                    <option value='017'>São José do Rio Preto</option>
                    <option value='018'>Presidente Prudente</option>
                </select>

                <input
                    placeholder="Minutos"
                    type='number'
                    onChange={onChangeInput}
                    value={form.time}
                    name='time'
                />

                <select
                    onChange={onChangeInput}
                    value={form.plan}
                    name='plan'
                >
                    <option value='' disabled>Selecione um plano</option>
                    <option value='30'>FaleMais 30</option>
                    <option value='60'>FaleMais 60</option>
                    <option value='120'>FaleMais 120</option>
                </select>

                <button>Calcular</button>
            </form>
        </div>
    );
}

export default HomePage;