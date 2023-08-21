import { styled } from "styled-components";
import bg from '../assets/registerbg.jpg';

const RegisterSection = styled.section`
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
    width: 40%;
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
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
    margin-top: 20px;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;

`
const Agreement = styled.span`
    font-size: 18px;
    margin: 10px 0;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
    return ( 
        <RegisterSection>
            <Container>
                <Title>Create an account</Title>

                <Form action='#'>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Container>
        </RegisterSection>
     );
}
 
export default Register;