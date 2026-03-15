import LanguageSwitcher from "./LanguageSwitcher"
import { useState } from 'react'

export default function Page(){

    const [currentLang, setCurrentLang] = useState('DE');
    const displayMessage = () => {
        switch (currentLang){
            case  'DE' : return 'Hallo'
            case  'EN' : return 'Hello'
            case  'FR' : return 'bonjour'
            case  'ES' : return 'Hola'
        }

    }

    return <>
    <LanguageSwitcher onLanguageChange={value=> setCurrentLang(value)} /> 
        <hr/>
        Current Language : {currentLang}
        <hr/>
        <div className ="alert alert-primary" role="alert">
            <strong>{displayMessage()}</strong>
        </div>
        {currentLang == 'DE'? 
        <h5 className="alert alert-danger"> wilkommen in dieses Page wie kann man Deuchtch sprechen </h5>
        :<h1> keine Anhung </h1> }
    </>
} 