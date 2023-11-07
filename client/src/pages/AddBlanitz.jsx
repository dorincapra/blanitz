import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'



const AddBlanitz = () => {

    const [adoptie, setAdoptie] = useState({
        nume: "",
        tip: "",
        datan: "",
        poze: ""
    })


    const handleChange = (e) =>{
        setAdoptie(prev=>({...prev, [e.target.name]:e.target.value}));
    }

    const navigate = useNavigate()

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/adoptii", adoptie)
            navigate("/")
        } catch(err){
            console.log(err)
        }
    }
    console.log(adoptie)
    return (
        <div className="form addBlanitz">
            <h1>Pagina adaugare blanitz spre adoptie</h1>
            <input type="text" placeholder="nume"  onChange={handleChange} name="nume"/>
            <input type="text" placeholder="catel, pisica? altceva?" onChange={handleChange} name="tip"/>
            <input type="text" placeholder="culoare" onChange={handleChange} name="culoare"/>
            <input type="text" placeholder="data nasterii" onChange={handleChange} name="datan"/>
            <input type="text" placeholder="poza" onChange={handleChange} name="poza"/>
            <button className='butonSave' onClick={handleClick}>Salveaza</button>
            <button className='butonCancel'><Link className='butonCancel' to="/">Anuleaza</Link></button>
        </div>
    )
}

export default AddBlanitz