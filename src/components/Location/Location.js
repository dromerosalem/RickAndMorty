import React from 'react'
import axios from 'axios'

import './location.css'

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
      return <div className="planet-container" key={index}>
        <div className="flex-container">
          
          <img className="planet-image" src={
          singlePlanet.name === 'Earth (C-137)' ? "https://i.ibb.co/Y2ZzrRt/Earth-C-137.png" 
          : singlePlanet.name === 'Abadango' ? "https://i.ibb.co/CWdKqfd/abadango-Cluster.jpg" 
          : singlePlanet.name === 'Citadel of Ricks' ?  "https://i.ibb.co/vJFhXsb/citadel-Of-Ricks.png" 
          : singlePlanet.name === "Worldender's lair" ? "https://i.ibb.co/p4xZdGb/Worldenders-Lair.png" 
          : singlePlanet.name === 'Anatomy Park' ? "https://i.ibb.co/tCggS4c/Anatomy-Park.png" 
          : singlePlanet.name === 'Interdimensional Cable' ? "https://i.ibb.co/9g9XD3Z/Interdimensional-Cable.jpg" 
          : singlePlanet.name === 'Immortality Field Resort' ? "https://i.ibb.co/CtRB3Jm/Immortality-Field-Resort.png" 
          : singlePlanet.name === 'Post-Apocalyptic Earth' ? "https://i.ibb.co/68RzCWb/Post-Apocalyptic-World.png" 
          : singlePlanet.name === 'Purge Planet' ? "https://i.ibb.co/ZLhq2V7/purge-planet.png" 
          : singlePlanet.name === 'Venzenulon 7' ? "https://i.ibb.co/DKSNZnQ/Venzenulon-7.png" 
          : singlePlanet.name === 'Bepis 9' ? "https://i.ibb.co/cJVFggg/Bepis-9.jpg" 
          : singlePlanet.name === 'Cronenberg Earth' ? "https://i.ibb.co/L84w5KD/Cronenberg-Earth.png" 
          : singlePlanet.name === 'Nuptia 4' ? "https://i.ibb.co/58DZ50X/Nuptia4.png" 
          : singlePlanet.name === "Giant's Town" ? "https://i.ibb.co/9TKd6d6/Giant-s-Town.png" 
          : singlePlanet.name === "Bird World" ? "https://i.ibb.co/GTzFPYc/Bird-World.png" 
          : singlePlanet.name === "St. Gloopy Noops Hospital" ? "https://i.ibb.co/3RdvMB4/St-Gloopy-Noops-Hospital.png" 
          : singlePlanet.name === "Earth (5-126)" ? "https://i.ibb.co/JcWGZvm/Earth-5-126.gif" 
          : singlePlanet.name === "Mr. Goldenfold's dream" ? "https://i.ibb.co/chgY7nj/Mr-Goldenfold-s-dream.jpg" 
          : singlePlanet.name === "Gromflom Prime" ? "https://i.ibb.co/nn4DdD8/Gromflom-Prime.png" 
          : singlePlanet.name === "Earth (Replacement Dimension)" ? "https://i.ibb.co/XFTyxPs/Earth-Replacement-Dimension.png"
          : singlePlanet.name === !singlePlanet.name ? "https://i.ibb.co/N9DbGZY/No-Image.png" : "https://i.ibb.co/N9DbGZY/No-Image.png"
        } alt={singlePlanet.name}/> 
        <h1 className="planet-name" >Name: {singlePlanet.name}</h1>
        <h2 className="planet-type">Type: {singlePlanet.type}</h2>
        <h2>Dimension: {singlePlanet.dimension}</h2>
        <h2 className="planet-name">Population: {singlePlanet.residents.length}</h2>
          
        
        </div>

      </div>
    })

  return <div>{planets}</div>
    
  }

}

export default Location


