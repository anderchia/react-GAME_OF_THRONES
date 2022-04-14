import React from 'react'
import { useTranslation} from 'react-i18next';
import "./Traductor.scss"

const lngs = {
  es: { nativeName: 'spanish' },
  en: { nativeName: 'english' }
};


export default function Traductor() {
    const { t, i18n } = useTranslation();
  return (
    <div>
  {Object.keys(lngs).map((lng) => (
             <button key={lng} className="b-buttonNav" style={{ backgroundImage: "url(/images/"+lng+".jpg)" }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              
            </button>
            
          ))}

    </div>
  )
}

