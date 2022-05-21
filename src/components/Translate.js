import React,{ useState} from 'react'
import Dropdown from './Dropdown'
import languageOptions from '../languageOptions.json'
const Translate = () => {
    const [language,setlanguage]=useState(languageOptions[0])
    return (
        <div>
            <Dropdown languageOptions={languageOptions} />
        </div>
    )
}

export default Translate