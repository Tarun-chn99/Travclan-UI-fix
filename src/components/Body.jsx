import React from 'react'
import { satteCatalogueSrcSet, untitledDesignSrcSet, weewSrcSetString } from '../utils/imageData';
import { CREATE_ACCOUNT_URL } from '../utils/constants';

const Body = () => {
  
  return (
    <div className='body-container'>

        <div className='homepage-container'>

            <div className='homepage-container__left'>

              <img 
                decoding="async"
                src="https://home.travclan.com/wp-content/uploads/2023/06/Logo-weew.png"
                height={155}
                width={400}
                alt='Apka Global DMC!!'
                srcSet={weewSrcSetString}
                sizes="(max-width: 647px) 100vw, 647px"
                className='homepage-container__left--image'
              />

              <ul>
                <li><span className='point'></span><span><b style={{color:'#FBAC23'}}>Customize Package Instantly</b> & Pay Easily in INR</span></li>
                <li><span className='point'></span><span>Best <b style={{color:'#FBAC23'}}> OnTrip Experience Guarantee</b> with 24x7 Support</span></li>
              </ul>

              <p><a className='create-account-btn' href={CREATE_ACCOUNT_URL}>Create an account</a></p>
              <p className='download-button-wrapper'><button className='download-btn'>Download App</button></p>

            </div>

            <div className='homepage-container__right'>
              <img
                decoding="async"
                src='https://home.travclan.com/wp-content/uploads/2024/04/Satte-Catalogue-Draft-14th-Feb.png'
                alt='travel-agent_img'
                srcset={satteCatalogueSrcSet}
                height={500}
                width={351}
                sizes="(max-width: 381px) 100vw, 381px"
                style={{marginTop: '4.5rem'}}
              />
            </div>
          
            <p className='homepage-container--background-image'>
              <img
                fetchPriority='high'
                decoding="async"
                src='https://home.travclan.com/wp-content/uploads/2023/06/Untitled-design-8-2-1021x1024.png'
                height="702"
                width="600"
                alt='globe' 
                srcSet={untitledDesignSrcSet}
                sizes="(max-width: 800px) 100vw, 800px"
                className='earth-background-image'
              />
            </p>

        </div>
        
    </div>
  )
}

export default Body
