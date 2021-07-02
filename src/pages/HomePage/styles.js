import styled from 'styled-components';
import { Blue, White } from '../../constants/colors';

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85vh;
    padding-top: 6.5em;
    background-color: ${Blue};
    color: ${White};

    h1 {
        font-size: 9em;
    };

    p {
        width: 28em;
        text-align: center;
        line-height: 1.4;
        margin-top: 1em;
    };

    @media(max-width: 420px) {
        padding-top: 58px;

        h1 {
            font-size: 3.5em;
        };

        p {
            width: 240px;
            font-size: .8em;
        };
    };
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormInputsContainer = styled.div`
    display: flex;
    align-items: center;
    height: 20vh;

    div {
        display: flex;
        flex-direction: column;
        font-size: 1.4em;
        margin: 0 .5em;
    };

    select {
        font-size: 1em;
        background-color: ${Blue};
        color: ${White};
        border: none;
        cursor: pointer;
    };

    input {
        font-size: 1em;
        background-color: ${Blue};
        width: 85%;
        border: none;
        border-bottom: 1px solid ${White};
        color: ${White};

        ::placeholder {
            color: ${White};
        };
    };

    @media(max-width: 420px) {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        height: 30vh;
        margin: 16px 0;

        div {
            width: 70vw;
        }
    };
`;