import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const BlogS = () => {


    const location = useLocation()
    const postID = location.pathname.split("/")[2];

   const [postare, setPostare] = useState([])
   const [comentarii, setComentarii] = useState([])

    useEffect(() => {
        const fetchAllComms = async (id) => {
            try {
                const res = await axios.get("http://localhost:8800/comms/" + id)
                setComentarii(res.data);
            } catch (err) {
                console.log(err)
            }
        }


        const fetchPostDeets = async (id) => {
            try{
                const res = await axios.get( "http://localhost:8800/blogS/" + id)
                setPostare(res.data[0])
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllComms(postID);
        fetchPostDeets(postID);
    }, [])


    return (
        <div>
                      <p>{postare.titlu}</p>

          {            
            comentarii.map(comentariu=>(
                <div>
                    <p>{comentariu.text}</p>
                </div>
            ))
          }  
        </div>
    )
}

export default BlogS