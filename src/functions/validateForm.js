export const validateForm = (form) => {
    let alertMessage;

    if (!form.plan) {
        alertMessage = 'Selecione um plano.';
    };

    if (!form.time || form.time < 0) {
        alertMessage = 'Informe um tempo válido.';
    };

    if (form.originCity === form.destinationCity) {
        alertMessage = 'A cidade de origem e destino são iguais.';
    };

    if (!form.destinationCity) {
        alertMessage = 'Selecione uma cidade de destino.';
    };

    if (!form.originCity) {
        alertMessage = 'Selecione uma cidade de origem.';
    };

    return (alertMessage);
}