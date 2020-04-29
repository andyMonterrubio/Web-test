import React, {useState} from 'react';
import Navbar from './components/layout/Navbar'
import Elements from './components/items/Elements'
import Search from './components/items/Search'
import request from 'superagent';

import './App.css'

const App = () => {
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])

    const searchItems = (text) => {
        console.log(text)
        setLoading(true)
        request
            .get(`http://localhost:3000/api/search/${text}`)
            .end((err, res) => {
                const items = res.body;
                console.log(items)
                setItems(items)
                setLoading(false)
            });
    }

    return (
        <div className="App">
            <Navbar title="My Search App"/>
            <div className="container">
                <Search searchItems={searchItems}/>
                <Elements loading={loading} elements={items}/>
            </div>
        </div>
    )
}

export default App;
