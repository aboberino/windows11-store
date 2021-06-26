import React from 'react'
import './Header.css'
import SearchBar from "../SearchBar/SearchBar";
import { AiOutlineClose, AiOutlineMinus, AiFillAppstore } from 'react-icons/ai';
import { BsSquare } from 'react-icons/bs';
import picture from '../../assets/avataaars.svg'

function Header() {
    return (
        <div className="header">

            <div className="header-left">
                <AiFillAppstore />
                <span style={{ fontSize: 12 }} >Microsoft Store</span>
            </div>

            <SearchBar />
            
            <div className="header-right">
                <img src={picture} className="profile-pic" />

                <div className="close">
                    <AiOutlineMinus size={12} style={{ transform: 'translate(0, -1px)' }}/>
                    <BsSquare size={10}/>
                    <AiOutlineClose size={16}/>
                </div>
            </div>
        </div>
    )
}

export default Header
