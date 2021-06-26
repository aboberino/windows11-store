import React, { useState, useEffect } from 'react'
import './Home.css'
import CarouselApp from '../CarouselApp/CarouselApp'
import Button from '../Button/Button'
import ListApp from '../ListApp/ListApp'

const apps = [
    { title: 'Luca', description: 'Now streaming on Disney+', backgroundImage: 'https://thumb.canalplus.pro/http/unsafe/1280x720/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/100834446', image: 'https://www.presse-citron.net/app/uploads/2021/06/Luca-Disney-Plus.jpg' },
    { title: 'Microsoft 365', image: 'https://www.prodwaregroup.com/fr-fr/wp-content/uploads/sites/2/2019/10/Microsoft365-featured.jpg' },
    { title: 'Netlfix', image: 'https://cdn.tempslibre.ch/pictures/5b60/5709f/5b605709f347f/20180416-215413-g.jpg?c=1533040393' },
    { title: 'Spotify', image: 'https://www.scdn.co/i/_global/open-graph-default.png' },
]

const trending = [
    { name: 'Twitter', type: 'Social', rating: 4.5, rateNumber: 1200, icon: 'https://img.captain-droid.com/wp-content/uploads/2018/01/com-twitter-android-icon.png.webp' },
    { name: 'Disney+', type: 'Entertainment', rating: 5, rateNumber: 3000, icon: 'https://img.captain-droid.com/wp-content/uploads/2019/12/com-disney-disneyplus-icon.png.webp' },
    { name: 'Canva', type: 'Photo & Video', rating: 4, rateNumber: 1000, icon: 'https://img.captain-droid.com/wp-content/uploads/2018/08/com-canva-editor-icon.png.webp' },
    { name: 'Facebook', type: 'Social', rating: 4.5, rateNumber: 1200, icon: 'https://img.captain-droid.com/wp-content/uploads/com-facebook-katana-icon.png.webp' },
    { name: 'WhatsApp', type: 'Social', rating: 3.9, rateNumber: 12000, icon: 'https://img.captain-droid.com/wp-content/uploads/com-whatsapp-icon.png.webp' },
    { name: 'Netlfix', type: 'Entertainment', rating: 5, rateNumber: 62123, icon: 'https://img.captain-droid.com/wp-content/uploads/2018/01/com-netflix-mediaclient-icon.png.webp' },
]

function Home() {
    const [currentApp, setcurrentApp] = useState(apps[0])

    return (
        <div className="content">

            <div
                className="bgCurrentApp"
                style={{
                    backgroundImage: `linear-gradient(to top, #FAFAFA 10%, transparent 30%), 
                    url('${ currentApp.backgroundImage ? currentApp.backgroundImage : currentApp.image}')`
                }}
            >
                <h4 className="titlePage">Home</h4>
                <div className="content-bg">
                    <h1 className="titleApp">{currentApp.title}</h1>
                    <div className="descriptionApp">{currentApp.description}</div>
                    <Button title={'See details'} />
                </div>
                <CarouselApp apps={apps} currentApp={currentApp} setcurrentApp={setcurrentApp} />

            </div>

            {/* trending apps */}
            <ListApp title={'Trending apps'} apps={trending} />


        </div>
    )
}

export default Home
