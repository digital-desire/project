import React from 'react'

export default function Card({item: {id, title, body, image}}:{item:{id:number,title:string, body:string, image:string} }) {
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>

            </div>
            <div>
                <img src={'./images/${image}'} />

            </div>
        </div>
    )
}
