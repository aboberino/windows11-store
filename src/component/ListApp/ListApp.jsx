import React from 'react'
import './ListApp.css'
import AppCard from '../AppCard/AppCard'

function ListApp({ title, apps }) {
    return (
        <div className="list-app-main">
            <div className="list-app-title">
                <h4>{title}</h4>
                <div className="list-app-more">See all</div>
            </div>

            <div className="list-app-content">
                {apps.map(app => <AppCard app={app}/>)}
            </div>

        </div>
    )
}

export default ListApp
