import { HeaderContainer } from './styles';
import logo from '../../assets/telzir-logo.png';

const Header = () => {
    return (
        <HeaderContainer>
            <img src={logo} alt='Telzir Logo'/>

            <p>Especializada em chamadas de longa distância nacional</p>
        </HeaderContainer>
    );
}

export default Header;