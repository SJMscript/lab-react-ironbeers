import {  useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewBeer() {

    const [formData, setFormData] = useState({
        name: "",
        tagline: "",
        first_brewed:"",
        brewers_tips:"",
        attenuation_level: 0,
        contributed_by: ""
    });
    const handleFormData = ({target:{name,value}}) => {setFormData({...formData, [name] : value})};
    const navigate = useNavigate()
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
           await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", formData);
           navigate("/beers")
           
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
  
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={handleFormData} value={formData.name}/>

            <br />

                <label htmlFor="tagline ">Tagline </label>
                <input type="text" name="tagline" onChange={handleFormData} value={formData.tagline}/>

            <br />
            <div>
                <label htmlFor="description ">Description</label>
                <input type="text" name="description " onChange={handleFormData} value={formData.description}/>
            </div>
            <br />
            <div>
                <label htmlFor="first_brewed">First brewed</label>
                <input type="text" name="first_brewed" onChange={handleFormData} value={formData.first_brewed}/>
            </div>
            <br />
            <div>
                <label htmlFor="brewers_tips">Brewers tips</label>
                <input type="text" name="brewers_tips" onChange={handleFormData} value={formData.brewers_tips}/>
            </div>
            <br />
            <div>
                <label htmlFor="attenuation_level">Attenuation level</label>
                <input type="number" name="attenuation_level" onChange={handleFormData} value={formData.attenuation_level}/>
            </div>
            <br />
            <div>
                <label htmlFor="contributed_by">Contributed by</label>
                <input type="text" name="contributed_by" onChange={handleFormData} value={formData.contributed_by}/>
            </div>
            <br />
            <button style={{borderColor: "lightblue",fontSize: "20px", backgroundColor: "lightblue", color: "white", height: "40px", width: "90px"}}>Enviar</button>
        </form>
    </div>
  )
}