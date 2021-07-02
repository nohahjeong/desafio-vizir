import styled from 'styled-components';
import { Blue, White } from '../../constants/colors';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 15vh;
    padding: 0 4em 1em 3em;
    background-color: ${White};
    color: ${Blue};

    @media(max-width: 420px) {
        padding: 1em;
        font-size: .6em;

        img {
            width: 30%;
        };
    };
`;