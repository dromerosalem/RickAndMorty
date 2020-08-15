
import React, { Component } from "react";
import './main-page.css';

class MainPage extends Component {
    render() {
        return (
            <div className='main-page-body'>
              <div className='intro'>
                <h1>Welcome to the Rick and Morty Universe (all the universese with the inifinites Ricks and Morties included)</h1>
              </div>
                <div className='main-page-main'></div>
            </div>

        );
    }
}

export default MainPage;