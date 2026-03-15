export default function LanguageSwitcher ({onLanguageChange}) {

    const hanleLangChange = (e) => {
        e.preventDefault()
        onLanguageChange(e.currentTarget.dataset.lang) 
    }

    return <>
        <ul className  ="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" data-lang='DE' href="#" onClick={hanleLangChange } >Deutsch</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-lang='EN' href="#" onClick={hanleLangChange }>Englich</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-lang='FR' href="#" onClick={hanleLangChange }>Francais</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-lang='ES' href="#" onClick={hanleLangChange }>Espanol</a>
            </li> 
        </ul>
    </>

}