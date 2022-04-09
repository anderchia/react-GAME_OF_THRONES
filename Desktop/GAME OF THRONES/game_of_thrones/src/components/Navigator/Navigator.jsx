import React from 'react'
import { Link } from 'react-router-dom';
import './Navigator.scss';
import { useTranslation } from 'react-i18next';

const lngs = {
  es: { nativeName: 'Spanish' },
  en: { nativeName: 'English' }
};

export default function Navigator() {
  const { t, i18n } = useTranslation();
  return (
    <>  
        <div className='b-buttons'>

        <Link to="/" className="b-imagenHome"  >
        <img  src="../../../public/images/imageHome.png" alt=""></img>
        </Link>

          {Object.keys(lngs).map((lng) => (
            <button key={lng} className="b-buttonNav" style={{ backgroundImage:  i18n.resolvedLanguage === lng ? {url:'../../../public/images/spanish.jpg'} : {url:'../../../public/images/Bandera-de-Reino-Unido.png'} }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
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

