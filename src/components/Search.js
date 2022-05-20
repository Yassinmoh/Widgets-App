import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Search = () => {
    const [term, setTerm] = useState('messi')
    const [results, setResults] = useState([])

    console.log('result', results);
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        }

        if (term && !results.length) {
            search()
        } else {
            const timeoutid = setTimeout(() => {
                if (term) {
                    search()
                }
            }, 1000)
            return () => {
                clearTimeout(timeoutid)
            }
        }

    }, [term])

    const renderResults = results.map(result => {
        return (
            <div className="item" key={Math.random()}>
                <div className="right floated content">
                    <a className="ui button" target="_blank" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="ui form container">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="search"
                    />
                </div>
            </div>
            <div className="ui celled list ">
                {renderResults}
            </div>
        </>
    )
}

export default Search