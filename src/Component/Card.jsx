import React from 'react'
import "./card.css"

const Card = ({ data }) => {
    return <div className='wrapper'>
            {
                data.length > 0 ?
                    data.map((value, index) => {
                        return <div key={index} className='salomat'>
                            <h2 className='oloman'>{value.name}</h2>
                            <h3 className='maloma'>{value.category}</h3>
                            <div className='flexberamiza'>
                                <button className='buttonbir'>{value.price}   {value.currency}</button>
                                <p>{value.rating}</p>
                            </div>
                            <div className='sola'>
                                <button className='whats'>Edit</button>
                                <button className='chats'>Delete</button>
                            </div>
                        </div>
                    })
                    : <p>Ma'lumot kelmadi</p>
                    
                

            }
        </div>
}

export default Card
