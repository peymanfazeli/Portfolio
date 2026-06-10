import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Aboutme() {
  const { t } = useTranslation();
  return (
    <div>{t('aboutPage.title')}</div>
  )
}
