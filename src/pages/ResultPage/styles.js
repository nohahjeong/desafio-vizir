import styled from 'styled-components';
import { Black, Blue, Gray, Pink, White } from '../../constants/colors';

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85vh;
    padding-top: 6.5em;
    background-color: ${Blue};
    color: ${White};

    @media(max-width: 420px) {
        justify-content: space-evenly;
        padding-top: 0;
    };
`;

export const CardsContainer = styled.div`
    display: flex;
    height: 50vh;
    align-items: center;

    @media(max-width: 420px) {
        flex-direction: column;
        height: 60vh;
    };
`;

export const WithoutPlanCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 348px;
    padding-bottom: 48px;
    background-color: ${White};
    color: ${Black};
    border-radius: .5em;
    font-size: 3em;
    margin-right: 8px;

    div {
        background-color: ${Gray};
        border-radius: .5em .5em 0 0;
        height: 180px;
        padding: 54px 39px 0px 39px;
    };

    @media(max-width: 420px) {
        width: 240px;
        padding-bottom: 8px;
        font-size: 2em;
        margin-right: 0;

        div {
            height: 120px;
            padding: 30px 37px 0px 37px;
        };
    };
`;

export const WithPlanCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 365px;
    height: 416px;
    padding-bottom: 50px;
    background-color: ${White};
    color: ${Pink};
    border-radius: .5em;
    font-size: 3.2em;
    margin-left: 8px;

    div {
        background-color: ${Pink};
        color: ${White};
        border-radius: .5em .5em 0 0;
        height: 213px;
        padding: 60px 46px 0px 46px;
    };

    @media(max-width: 420px) {
        width: 300px;
        padding-bottom: 16px;
        font-size: 2.5em;
        margin-left: 0;

        div {
            height: 140px;
            padding: 30px 52px 0px 52px;
        };
    };
`;