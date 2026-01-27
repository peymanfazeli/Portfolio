import styled, { keyframes } from 'styled-components'
// Styled-components
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`;

const FormSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 15px;
    padding: 2% 10%;

`;

const Label = styled.label`
    width: 100%;
    text-align: left;
`;

const Input = styled.input`
    width: 100%;
    padding: 3px;
    border-radius: 5px;
`;

const FormGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 1.2rem;
`;

const Pulse = keyframes`
	0%{
	transform: scale(1);
	}
	50% {
		transform: scale(1.05);
	}
	100% {
		transform: scale(1);
	}
`;

const SubmitBtn = styled.button`
    color: white;
    background-color: cornflowerblue;
    padding: 10px 20px;
    border-radius: 5px;
    animation: ${Pulse} 1s ease-in-out infinite;
`;

const ContactForm = () => {
    return (
        <FormContainer>
            <FormSection id="appointmentForm">
                <h2 class="mt-2 mb-5">LETS TALK ABOUT YOU</h2>
                <form class="appointment-form" netlify method="POST" name="contact" data-netlify-redirect="./success.html">
                    <input type="hidden" name="form-name" value="contact" />

                    <FormGroup>
                        <Label for="name" class="form-label">Your Name</Label>
                        <Input type="text" id="name" name="Name" class="form-input" required />
                    </FormGroup>

                    <FormGroup>
                        <Label for="companyName" class="form-label">Company name</Label>
                        <Input type="text" id="companyName" name="Proffesion" class="form-input" required />
                    </FormGroup>

                    <FormGroup>
                        <Label for="profession" class="form-label">Profession</Label>
                        <Input type="text" id="profession" name="Proffesion" class="form-input" required />
                    </FormGroup>

                    <FormGroup>
                        <Label for="contactWay" class="form-label">Contact Via</Label>
                        <Input type="text" id="contactWay" name="contactWay" class="form-input" required placeholder='Phone or Email' />
                    </FormGroup>

                    <FormGroup>
                        <SubmitBtn type="submit" class="btn btn--submit">Register</SubmitBtn>
                    </FormGroup>
                </form>
            </FormSection>
        </FormContainer>
    )
}
export default ContactForm