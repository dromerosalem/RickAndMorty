import React from 'react'
import axios from 'axios'

class Location extends React.Component{

  constructor(){
    super()
    this.state = {
      locationInUniverse: null
    }
  }
  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/location')
      .then(res => this.setState( {locationInUniverse: res.data} ))
  }

  render() {
    return <h1>Hello Universe</h1>
  }

}

export default Location