import React from 'react'
import axios from 'axios'

class Location extends React.Component{

  constructor(){
    super()
    this.state = {
      locationInUniverse: []
    }
  }
  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/location')
    .then(res=>{
      this.setState({locationInUniverse: res.data}) 
      console.log(this.state.locationInUniverse) })
      
  }

  render() {
    const universesArray = this.state.locationInUniverse?.results
    console.log(universesArray)

    const planets = universesArray?.map((singlePlanet, index) =>{
      return <div key={index}>
        <img src={
          singlePlanet.name === 'Earth (C-137)' ? "https://i.ibb.co/hc4VJ11/Planet-Earth.png" 
          : singlePlanet.name === 'Abadango' ? "https://i.ibb.co/CWdKqfd/abadango-Cluster.jpg" 
          : singlePlanet.name === 'Citadel of Ricks' ?  "https://i.ibb.co/vJFhXsb/citadel-Of-Ricks.png" 
          : singlePlanet.name === "Worldender's lair" ? "https://i.ibb.co/p4xZdGb/Worldenders-Lair.png" 
          : singlePlanet.name === 'Anatomy Park' ? "https://i.ibb.co/tCggS4c/Anatomy-Park.png" 
          : singlePlanet.name === 'Interdimensional Cable' ? "https://i.ibb.co/9g9XD3Z/Interdimensional-Cable.jpg" : "https://i.ibb.co/9g9XD3Z/Interdimensional-Cable.jpg"
        } alt="planets"/>
        <h1>Name: {singlePlanet.name}</h1>
        <h2>Type: {singlePlanet.type}</h2>
        <h2>Dimension: {singlePlanet.dimension}</h2>
      </div>
    })

  return <div>{planets}</div>
    
  }

}

export default Location

