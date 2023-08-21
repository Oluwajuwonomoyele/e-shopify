import { styled } from "styled-components";
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
`
const Container = styled.div`
    width: 35%;
    padding: 2rem;
    background-color: white;
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
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Link = styled.div`
    margin-top: 10px;
    text-align: right;

    span {
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
`

const Login = () => {
    return ( 
        <LoginSection>
            <Container>
                <Title>Sign In</Title>

                <Form action='#'>
                    <Input placeholder="Username or Email Address" />
                    <Input placeholder="Password" />
                    <Button>Log In</Button>
                </Form>

                <Link>Forgot Password? <span>Create new account</span></Link>
            </Container>
        </LoginSection>
     );
}
 
export default Login;