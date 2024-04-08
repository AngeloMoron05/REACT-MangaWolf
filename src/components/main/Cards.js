import React from 'react'
import './card.css'

export default function Cards(props) {
    return (
        <div className='card2'>
            <img src={props.items.image} alt='logo' className='covers'/>
            <div>
                <h5>{props.items.title}</h5>
                <p>{props.items.description}</p>
                <h4>{props.items.precio}</h4>
                <button type="button" class="btn btn-outline-primary">Comprar</button>
            </div>
        </div>
    )
}
