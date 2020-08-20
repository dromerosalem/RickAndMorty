
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
                {/* <h1>Jerry is mad at Rick because Rick took Morty without permission to another adventure. Now we have to find Morty!</h1> */}
                <div className='main-page-main'></div>
            </div>

        );
    }
}

export default MainPage;