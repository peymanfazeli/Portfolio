import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  margin: 0 12px;
`;

const LangBtn = styled.button`
  background: ${({ $active }) => ($active ? 'rgba(255,255,255,0.25)' : 'transparent')};
  color: inherit;
  border: 1px solid ${({ $active }) => ($active ? 'currentColor' : 'transparent')};
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? '700' : '400')};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fa', label: 'FA' },
  { code: 'zh', label: 'ZH' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.split('-')[0] || 'en';

  return (
    <Wrapper>
      {languages.map(({ code, label }) => (
        <LangBtn
          key={code}
          $active={currentLang === code}
          onClick={() => i18n.changeLanguage(code)}
        >
          {label}
        </LangBtn>
      ))}
    </Wrapper>
  );
}
