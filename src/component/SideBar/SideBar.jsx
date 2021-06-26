import React, { useState } from 'react'
import './SideBar.css'
import SideBarButton from '../SideBarButton/SideBarButton'
import { AiFillHome, AiOutlineHome, AiFillAppstore, AiOutlineAppstore } from 'react-icons/ai'
import { RiGamepadFill, RiGamepadLine } from 'react-icons/ri'
import { BiMovie } from 'react-icons/bi'
import { MdMovie } from 'react-icons/md'
import { IoLibrary, IoLibraryOutline, } from 'react-icons/io5'
import { IoMdHelpCircle, IoMdHelpCircleOutline } from 'react-icons/io'


const menu = [
    { title: 'Home', iconActive: <AiFillHome color="#166CB3" size={20} />, icon: <AiOutlineHome color="gray" size={20} /> },
    { title: 'Apps', iconActive: <AiFillAppstore color="#166CB3" size={20} />, icon: <AiOutlineAppstore color="gray" size={20} /> },
    { title: 'Gaming', iconActive: <RiGamepadFill color="#166CB3" size={20} />, icon: <RiGamepadLine color="gray" size={20} /> },
    { title: 'Movies', iconActive: <MdMovie color="#166CB3" size={20} />, icon: <BiMovie color="gray" size={20} /> },
]
const menuEnd = [
    { title: 'Library', iconActive: <IoLibrary color="#166CB3" size={20} />, icon: <IoLibraryOutline color="gray" size={20} /> },
    { title: 'Help', iconActive: <IoMdHelpCircle color="#166CB3" size={20} />, icon: <IoMdHelpCircleOutline color="gray" size={20} /> },
]

function SideBar() {
    const [currentItem, setcurrentItem] = useState(menu[0])

    return (
        <div className="side-bar">
            <div className="side-bar-start">
                {menu.map((i, j) =>
                    (<SideBarButton
                        key={j}
                        title={i.title}
                        icon={i === currentItem ? i.iconActive : i.icon}
                        active={i === currentItem}
                        item={i}
                        setcurrentItem={setcurrentItem}
                    />)
                )}
            </div>

            <div className="side-bar-end">
                {menuEnd.map((i, j) =>
                    (<SideBarButton
                        key={j}
                        title={i.title}
                        icon={i === currentItem ? i.iconActive : i.icon}
                        active={i === currentItem}
                        item={i}
                        setcurrentItem={setcurrentItem}
                    />)
                )}
            </div>

        </div>
    )
}

export default SideBar
