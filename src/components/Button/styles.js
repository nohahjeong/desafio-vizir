import styled from 'styled-components';
import { Blue, White } from '../../constants/colors';

export const StyledButton = styled.button`
    background-color: ${White};
    color: ${Blue};
    font-size: 1.8em;
    padding: .4em 1em;
    border: none;
    border-radius: 2em;

    :hover {
        cursor: pointer;
        font-size: 1.9em;
    };
    :active {
        transform: translate(0, .1em)
    };
`;