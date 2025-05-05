import React, { useState } from 'react'
import { navLinks } from '../utils/appData.jsx'

const ToggleMenu = () => {

    const [indexActive,setIndexActive] = useState(null);
    const [showMenu,setShowMenu] = useState(false);

    const handleClick = (index) => {
        setIndexActive((prev) => prev === index ? null : index);
    }

    const handleMenuClick = () => {
        setShowMenu((prev) => !prev);
        setIndexActive(null);
     }
    
    return (
        <div>
            <button className='menu-toggle-btn' onClick={() => handleMenuClick()}>
                {
                    showMenu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
                }
            </button>

            <ul className={`menu-toggle-container ${showMenu ? ' menu-active' : ''}`}>
                {
                    navLinks.map((item,index) => {
                        return (
                            <li key={item.id}>

                                <a href={item.link} onClick={() => handleClick(index)}>{item.title}</a>

                                {
                                    
                                    item.isDropdown && 
                                    <ul className={`menu-toggle-container__dropdown-container ${(index === indexActive) ? ' dropdown-active' : ''}`}>
                                        {
                                            item.dropdownItems.map((dropdownItem) => {
                                                return (
                                                    <li key={dropdownItem.id} className='dropdown-item'>
                                                        <a href={dropdownItem.link} target='_blank' onClick={()=>setShowMenu(false)}>{dropdownItem.title}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                }

                            </li>
                        )
                    })
                }
            </ul>

        </div>
  )
}

export default ToggleMenu
