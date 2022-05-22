
import React,{ useState} from 'react'
import Dropdown from './Dropdown'
import options from '../options.json'
import Convert from '../components/Convert'



const Translate = () => {
    const [language,setlanguage]=useState(options[0])
    const [text,setText]=useState('')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown 
                label="Select a Language"
                options={options} 
                selected={language}
                onSelectedChange={setlanguage}
                />
                <hr/>
                <h3 className="ui header">Output</h3>
                <Convert text={text} language={language}/>
        </div>
    )
}

export default Translate