
import React, { Component } from "react";
import './main-page.css';
import { Link } from 'react-router-dom'

class MainPage extends Component {
    render() {
        return (
            <div className='main-page-body'>
              <div className='intro'>
                <h1>Welcome to the Rick and Morty Universe</h1>
                <h2>Click the portal for a interdimentional trip!</h2>
                <Link to={'/location'}><img src="https://media.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.gif" alt="portal"/></Link>
              </div>
                <div className='main-page-main'></div>
            </div>

        );
    }
}

export default MainPage;