import React, { useEffect, useState } from "react"
import data  from "../data"
import { Link } from "react-router-dom"
import { getPosts } from "../service"
import { useAppContext } from "../context"

export default function List() {
    const {posts} = useAppContext()
    return(
        <div className="mt-5">
            {
                posts.map(item => {
                    const title = item.title.split(" ").join("_"); // pour que le lien soit plus dynamique
                    const content = `${item.content.substring(0, 100)} ...`; // afficher uniquement les cents premiers carc
                    return (
                        <div key={item._id}>
                            <h3><Link to={`/post/${title}`} state={{ id : item._id}}> {item.title} </Link></h3>
                            {/*state={{ id : item._id}} transmettre l'id de chaque article de bloc*/}
                            <p>{content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}