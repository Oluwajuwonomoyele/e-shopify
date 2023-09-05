import { styled } from "styled-components";
import { mobile } from "../responsive";
import bg from '../assets/loginbg.jpg';

const LoginSection = styled.section`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${bg});
    background-position-y: 20%;
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${mobile({
        backgroundSize: 'cover',
        backgroundPosition: '60% 0'
    })}
`
const Container = styled.div`
    width: 35%;
    padding: 2rem;
    background-color: white;

    ${mobile({
        width: '85%'
    })}
`
const Title = styled.h1`
    font-size: 32px;
    font-weight: 300;
    text-transform: uppercase;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 20px;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    width: 100%;
    padding: 10px;

    ${mobile({
        flex: 'none'
    })}
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 1rem 2rem;
    background-color: teal;
    color: white;
    cursor: pointer;
    outline: none;
`
const Link = styled.div`
    margin-top: 10px;
    text-align: right;

    span {
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }

    ${mobile({
        textAlign: 'left',
        marginTop: '1rem'
    })}
`

const Login = () => {
    return ( 
        <LoginSection>
            <Container>
                <Title>Sign In</Title>

                <Form action='#'>
                    <Input placeholder="Username or Email Address" aria-label="username" />
                    <Input placeholder="Password" aria-label="password" />
                    <Button>Log In</Button>
                </Form>

                <Link>Forgot Password? <span>Create new account</span></Link>
            </Container>
        </LoginSection>
     );
}
 
export default Login;