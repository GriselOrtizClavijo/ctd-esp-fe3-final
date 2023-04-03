import React from 'react'


const Footer = () => {
  return (
    <footer>
        <div className='pBack'>
        <p>DH ODONTO</p>
        </div>
        <p>Powered by</p>
        <img src={window.location.origin + '/images/DH.png'} alt='DH-logo' />
        <img className='icons' src={window.location.origin + '/images/ico-facebook.png'} alt='DH-logo' />
        <img className='icons' src={window.location.origin + '/images/ico-instagram.png'} alt='DH-logo' />
        <img className='icons' src={window.location.origin + '/images/ico-tiktok.png'} alt='DH-logo' />
        <img className='icons' src={window.location.origin + '/images/ico-whatsapp.png'} alt='DH-logo' />
    </footer>
  )
}

export default Footer
