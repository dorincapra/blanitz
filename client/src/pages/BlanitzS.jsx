import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const BlanitzS = () => {

    const location = useLocation()
    const blanitzID = location.pathname.split("/")[2];

    const [blanitz, setBlanitze] = useState([])

    useEffect(() => {
        const getBlanitzDeets = async (id) => {
            try {
                const res = await axios.get("http://localhost:8800/blanitz/" + id)
                setBlanitze(res.data[0])           
            } catch (err) {
                console.log(err)
            }
        }
        getBlanitzDeets(blanitzID)
    })

    return (
        <div className="containerBlanitzS">
            <h1>{blanitz.nume}</h1>
            <h2>{blanitz.tip} {blanitz.culoare}</h2>
            <p>{blanitz.datan}</p>
            <p>{blanitz.descriere}</p>
        </div>
     
    )
}

export default BlanitzS