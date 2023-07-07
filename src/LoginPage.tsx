import Logo from './assets/Logo.svg'
import './Login.scss'
import styled from 'styled-components';
import { Container } from './styles/Container.style';

const LoginSection = styled(Container)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    height: 100vh;
    padding-bottom: 2rem;
    box-sizing: border-box;
`

const LogoImg = styled.img`
    width: 12rem;
`

const LoginForm = styled.form`
    display: flex;
    flex-flow: column nowrap;
    row-gap: 8rem;
    width: 16rem;
`

const LoginInputs = styled.fieldset`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    row-gap: 0.5rem;
    padding: 0;
    border: none;
`

const LoginButtons = styled(LoginInputs)`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    row-gap: 0.5rem;
`

const InputStyle = styled.input`
    background: none;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: white;
    font-size: 1.2rem;
    &::placeholder {
        color: white;
        opacity: 0.5;
        
    }
`

const LoginInput = styled(InputStyle)`
    opacity: 0.7;
`
const LoginSubmit = styled(InputStyle)`
    width: 100%;
    background-color: white;
    color: black;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
`

const Button = styled(InputStyle)`
    width: 50%;
    opacity: 0.5;
    border: none;
`

function LoginPage(){
    return(
        <LoginSection>
            <LogoImg src={Logo} alt="Logo" />
            <LoginForm>
                <LoginInputs>
                    <LoginInput type="text" placeholder='username' required></LoginInput>
                    <LoginInput type="password" placeholder='password' required></LoginInput>
                </LoginInputs>
                
                <LoginButtons>
                    <LoginSubmit type="submit" value="LogIn"></LoginSubmit>
                    <Button as="button">Help</Button>
                    <Button as="button">Register</Button>
                </LoginButtons>

            </LoginForm>
        </LoginSection>
    )
}

export default LoginPage