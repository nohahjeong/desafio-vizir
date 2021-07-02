import { StyledButton } from './styles';

const Button = (props) => {
    return (
        <StyledButton onClick={props.onClick}>
            {props.text}
        </StyledButton>
    );
}

export default Button;