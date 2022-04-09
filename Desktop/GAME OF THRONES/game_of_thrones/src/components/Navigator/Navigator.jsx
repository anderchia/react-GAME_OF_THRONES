import React from 'react'
import { Link } from 'react-router-dom';
import './Navigator.scss';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  es: { nativeName: 'Spanish' },
  en: { nativeName: 'English' }
};

export default function Navigator() {
  const { t, i18n } = useTranslation();
  return (
    <>
        <div className='b-buttons'>
         
          {Object.keys(lngs).map((lng) => (
            <button key={lng} className="b-buttonNav" style={{ backgroundImage:  i18n.resolvedLanguage === lng ? URL('../../../public/images/spanish.jpg') : URL('../../../public/images/Bandera-de-Reino-Unido.png')}} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
            
          ))}
          </div>
       
        
     <ul className='c-nav'>
        <Link to ="/characters">{t('description.part1')}
        </Link> 
        <Link to ="/houses">
        {t('description.part2')}</Link> 
        <Link to ="/cronology">{t('description.part3')}</Link> 
     </ul>
   </> 
  )
}

