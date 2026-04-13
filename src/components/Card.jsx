import { Bookmark } from 'lucide-react'
import React from 'react'

const Card = () => {
    return (
        <div className='card'>
            <div>
                <div className="top">
                    <img src="https://images.unsplash.com/photo-1774804819708-61c4481d193d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <button>Save<Bookmark size={10} /></button>
                </div>
                <div className="center">
                    <h3>Amazon <span>5 days ago</span></h3>
                    <h2>Senior UI/UX Designer</h2>
                    <div className='tag'>
                        <h4>Part time </h4>
                        <h4>Senior level</h4>

                    </div>
                </div></div>
            <div className="bottom">
                <div>
                    <h3>$124/hr</h3>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>

        </div>
    )
}

export default Card
