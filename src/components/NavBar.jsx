import React from 'react'
import { navLinks } from '../utils/appData.jsx'
import ToggleMenu from './ToggleMenu'
import { TRAVCLAN_HOME, TRAVCLAN_LOGO_URL } from '../utils/constants.jsx'

const NavBar = () => {

  return (
    
    <div className='navBar-container'>
        
        <div className='logo-container'>
            <a href={TRAVCLAN_HOME} target='_self'><img src={TRAVCLAN_LOGO_URL} alt='#logo' width={120}/></a>
        </div>

        <div className='navLinks-container'>
            
            <div>
                {
                    //  Navigation links of the navbar
                    navLinks.map((item) => {

                        return (

                            <div key={item.id} className='navLink-item'>

                                <a className='navLink-item__anchor' href={item.link} target='_self'>{item.title}</a>

                                {/* Dropdown menu's for each navlink*/}
                                {
                                    item.isDropdown && 

                                        <ul className='dropdown-container'>
                                            {
                                                item.dropdownItems?.map((dropdownItem) => {
                                                    return (
                                                        <li key={dropdownItem.id} className='dropdown-item'>
                                                            <a href={dropdownItem.link} target='_blank'>{dropdownItem.title}</a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                }
                                
                            </div>
                        );

                    })
                }
            </div>


            <button className='login-btn'>Login</button>
            
            <ToggleMenu/>

        </div>
    
    </div>
  )
}

export default NavBar
