import React from 'react'
import './AppCard.css'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';


function AppCard({ app }) {

    const number = num => {
        return num >= 1000 ? Number.parseInt(num / 1000) + 'k' : num
    }

    const stars = rate => {
        const half = rate != Math.floor(rate)
        const res = Array(5).fill(<BsStar color="gray" />)
        const stars = Number.parseInt(rate)

        for (let i = 0; i < stars; i++) {
            res[i] = (i === stars - 1) && half ? <BsStarHalf color="gray" /> : <BsStarFill color="gray" />
        }
        return res
    }

    return (
        <div className="app-card-main">
            <img src={app.icon} />
            <div className="app-card-name">{app.name}</div>
            <div className="app-card-type">{app.type}</div>
            <div className="app-card-rating">
                <div>{stars(app.rating)}</div>
                <div className="app-card-ratingNumber">{number(app.rateNumber)}</div>
            </div>
        </div>
    )
}

export default AppCard
