import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
// styles
import "bootstrap/dist/css/bootstrap.min.css";
// components
import Menu from '../components/Menu';
import Header from '../components/Header';
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import config from "../config";
import ContactMe from "../components/ContactMe";
import Resume from "../components/Resume";
// styled components
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
`;

const getInitialTheme = () => {
	const storedTheme = localStorage.getItem("theme");
	if (storedTheme) {
		return storedTheme;
	}
	return "dark";
  };


export default function Home() {
	const { t } = useTranslation();
	const [ theme, setTheme ] = useState(getInitialTheme());
		useEffect(() => {
			document.body.classList.remove("theme-light", "theme-dark");
			document.body.classList.add(`theme-${theme}`);
			localStorage.setItem("theme", theme);
		}, [theme]);
	
		const toggleTheme = () => {
			const newTheme = theme === "dark" ? "light" : "dark";
			setTheme(newTheme);
			localStorage.setItem("theme", newTheme);
		}
	return (
		<Container>
			<Menu  theme={theme} onThemeToggle={toggleTheme} />
			<Header />
			<Section title={t('sections.skills')} config={config.skills} mainTitle="Skills" />
			<Section title={t('sections.languages')} config={config.Languages} mainTitle="Languages" />
			<Section title={t('sections.experiences')} config={config.experiences} mainTitle="Experience" />
			<ContactForm />
			<ContactMe />
			<Resume />
		</Container>
	)
}
