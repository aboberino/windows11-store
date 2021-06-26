import React from 'react'
import './SideBarButton.css'

function SideBarButton({ title, icon, active, item, setcurrentItem }) {
    return (
        <>
            <button className={'button ' + (active ? 'button-selected' : null)} onClick={() => setcurrentItem(item)}>
                <div className={(active ? 'selected' : null)}></div>
                <div className="icon">
                    {icon}
                </div>
                {console.log(`${!active} => ${title}`)}
                {!active ? <div className="buttonzdz">{title}</div> : null}
            </button>
        </>
    )
}

export default SideBarButton
