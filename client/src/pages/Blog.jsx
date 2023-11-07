import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Blog = () => {


    const navigate = useNavigate()

    const [postari, setPostari] = useState([])
    useEffect(() => {
        const fetchAllPostari = async () => {
            try {
                const res = await axios.get("http://localhost:8800/blog")
                setPostari(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllPostari();
    }, [])

    const handleNavigate = (id) => () => {
        navigate("/blogS/"+ id);
    } 

    return (
        <div>
            <div>Blog page</div>
            <div className="postari">
                {
                    postari.map(postare=>(
                        <div className="postare" key = {postare.id}
                        onClick={handleNavigate(postare.id)}
                        >
                            <p>{postare.id}</p>
                            <p>{postare.userID}</p>
                            <p>{postare.titlu}</p>
                            <p>{postare.descriere}</p>
                            <p>{postare.tip}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blog