import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
    text-align: start;
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
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => setSubmitted(true))
            .catch((error) => alert(error));
    };

    if (submitted) {
        return (
            <FormContainer>
                <FormSection id="appointmentForm">
                    <h2 className="mt-2 mb-5">{t('form.successTitle')}</h2>
                    <p>{t('form.successMessage')}</p>
                </FormSection>
            </FormContainer>
        );
    }

    return (
        <FormContainer>
            <FormSection id="appointmentForm">
                <h2 className="mt-2 mb-5">{t('form.title')}</h2>
                <form
                    className="appointment-form"
                    method="POST"
                    name="contact"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <FormGroup>
                        <Label htmlFor="name" className="form-label">{t('form.name')}</Label>
                        <Input type="text" id="name" name="Name" className="form-input" required />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="companyName" className="form-label">{t('form.company')}</Label>
                        <Input type="text" id="companyName" name="CompanyName" className="form-input" required />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="profession" className="form-label">{t('form.profession')}</Label>
                        <Input type="text" id="profession" name="Proffesion" className="form-input" required />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="contactWay" className="form-label">{t('form.contactVia')}</Label>
                        <Input type="text" id="contactWay" name="contactWay" className="form-input" required placeholder={t('form.placeholder')} />
                    </FormGroup>

                    <FormGroup>
                        <SubmitBtn type="submit" className="btn btn--submit">{t('form.submit')}</SubmitBtn>
                    </FormGroup>
                </form>
            </FormSection>
        </FormContainer>
    );
}
export default ContactForm