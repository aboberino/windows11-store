import React from 'react'
import './CarouselAppCard.css'

function CarouselAppCard({ app, selected, setcurrentApp }) {
    console.log(app);
    console.log(app.image);
    return (
        <div
            className={(selected ? 'card selected-card' : 'card')}
            onClick={() => setcurrentApp(app)}
            style={{
                backgroundImage: `linear-gradient(to top, #171719 0%, transparent 40%), 
                url('${app.image}')`
            }}>
            <div>{app.title}</div>
        </div>
    )
}

export default CarouselAppCard
