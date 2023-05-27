
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
//import { GridLoader } from "react-spinners"

function Beer() {

    const params = useParams()
    console.log(params)

const [beersList, setBeersList] = useState(null)


const getData = async () =>{
    try{
    const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
    console.log(response)
    setBeersList(response.data)
    } catch(e){
        console.log(e)
    }
}

useEffect(() => {
    getData()
  }, [])

  if(beersList === null){
    return(
        <div style={{minWidth:"200px"}}>
        <h3>Recibiendo info</h3>
        </div>
    ) 
  }



  return (
    <div>
    
        <h2>Beer List</h2>

    {beersList.map((eachBeer)=>{
        return(
            <div key={eachBeer._id}>
            <Link to={`/beers/${eachBeer._id}`} style={{textDecoration: "none", color: "black"}} patata={eachBeer}>
            <img src={eachBeer.image_url} width={"100"} height={"270"} />
            <h1>{eachBeer.name}</h1>
            <p>{eachBeer.tagline}</p>
            <p>{eachBeer.contributed_by}</p>
            <hr/>
            </Link>
            </div>
        )
    })}

    </div>
  )
}

export default Beer