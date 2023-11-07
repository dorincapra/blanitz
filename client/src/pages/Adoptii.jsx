import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';


const Adoptii = () => {

    const [adoptii, setAdoptii] = useState([]);

    const navigate = useNavigate()

    const handleNavigate = (id) => () => {
        navigate("/blanitz/"+ id);
    }

    useEffect(() => {
        const fetchAllAdoptii = async () => {
            try {
                const res = await axios.get("http://localhost:8800/adoptii")
                setAdoptii(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllAdoptii();
    }, [])

    return (
        <div>
            <h1>Pagina adoptii</h1>
            <button><Link to="/addAdoptie">Pune spre adoptie</Link></button>
            <button><Link to="/blog">Blog</Link></button>
            <div className="adoptii">
                {adoptii.map(adoptie=>(
                    <div className="adoptie" 
                    onClick={handleNavigate(adoptie.id)} 
                    key={adoptie.id}>
                        {adoptie.poza && <img className='pozaAdoptie' src={adoptie.poza} alt=""/> }
                        <h2 className='numeBlanitz'>{adoptie.nume}</h2>
                        <hr/>
                        <h3 className='tipBlanitz'>{adoptie.tip} - {adoptie.culoare}</h3>
                        <h3 className='datanBlanitz'>{adoptie.datan}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Adoptii