
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"


function SingleBeer() {

    const params = useParams()
    console.log("params", params)

const [singleBeer, setSingleBeer] = useState(null)

const getData = async () =>{
    try{
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
    console.log("response", response)
    setSingleBeer(response.data)
    } catch(e){
        console.log(e)
    }
}


useEffect(() => {
    getData()
  }, [])

  if(singleBeer === null){
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
            <img src={singleBeer.image_url} width={"100"} height={"270"} />
            <h1>{singleBeer.name}</h1>
            <p>{singleBeer.tagline}</p>
            <p>First Brewed: {singleBeer.first_brewed}</p>
            <p>Attenuation Level: {singleBeer.attenuation_level}</p>
            <h5>{singleBeer.description}</h5>
            <p>{singleBeer.contributed_by}</p>
        </div>

    </div>
  )
}

export default SingleBeer