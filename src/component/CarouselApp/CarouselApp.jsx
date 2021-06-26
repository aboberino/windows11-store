import React from 'react'
import './CarouselApp.css'
import CarouselAppCard from '../CarouselAppCard/CarouselAppCard'

function CarouselApp({ apps, currentApp, setcurrentApp }) {
    return (
        <div className="carousel">
            {apps.map((app, i) => (
                <CarouselAppCard
                    key={i}
                    app={app}
                    selected={app === currentApp}
                    setcurrentApp={setcurrentApp}
                />)
            )}
        </div>
    )
}

export default CarouselApp
