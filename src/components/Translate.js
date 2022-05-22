import React,{ useState} from 'react'
import Dropdown from './Dropdown'
import options from '../options.json'
const Translate = () => {
    const [language,setlanguage]=useState(options[0])
    return (
        <div>
            <Dropdown 
                options={options} 
                selected={language}
                onSelectedChange={setlanguage}
                />
        </div>
    )
}

export default Translate