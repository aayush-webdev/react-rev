import React from 'react'

const Card = (props) => {
    console.log(props);
    
    return (
        <div className='card'>
                <img src={props.userImg} alt={props.user} />
                <h1>{props.user}</h1>
                <p>{props.userBio}</p>
                <button>View Profile</button>
            </div>
    )
}

export default Card
