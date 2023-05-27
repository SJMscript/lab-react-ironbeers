
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

function RandomBeer() {
    const params = useParams()
    console.log(params)

const [randomBeer, setRandomBeer] = useState(null)

const getData = async () =>{
    try{
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    console.log(response)
    setRandomBeer(response.data)
    } catch(e){
        console.log(e)
    }
}


useEffect(() => {
    getData()
  }, [])

  if(randomBeer === null){
    return(
        <div style={{minWidth:"200px"}}>
        <h3>Recibiendo info</h3>
        </div>
    ) 
  }



  return (
    <div>
    
        <h2>Specific</h2>

        <div>
        <img src={randomBeer.image_url} width={"100"} height={"270"} />
            <h1>{randomBeer.name}</h1>
            <p>{randomBeer.tagline}</p>
            <p>First Brewed: {randomBeer.first_brewed}</p>
            <p>Attenuation Level: {randomBeer.attenuation_level}</p>
            <h5>{randomBeer.description}</h5>
            <p>{randomBeer.contributed_by}</p>
        </div>

    </div>
  )
}

export default RandomBeer