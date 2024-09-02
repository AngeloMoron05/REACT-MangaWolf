import React from 'react'
import './barraRedes.css'

export default function BarraRedes() {
  return (
    <div className='container-bar'>
        <div className='icon-social'>
            <a href='' className='me-4 text-reset icon-facebook'><span id='title'>Facebook</span><i className='bi bi-facebook'></i></a>
            <a href='' className='me-4 text-reset icon-twitter'><span id='title'>Twitter X</span><i className='bi bi-twitter-x'></i></a>
            <a href='' className='me-4 text-reset icon-google'><span id='title'>Google</span><i className='bi bi-envelope-at-fill'></i></a>
            <a href='' className='me-4 text-reset icon-linkedin'><span id='title'>LinkedIn</span><i className='bi bi-linkedin'></i></a>
            <a href='' className='me-4 text-reset icon-github'><span id='title'>Github</span><i className='bi bi-github'></i></a>
            <a href='' className='me-4 text-reset icon-pinterest'><span id='title'>Pinterest</span><i className='bi bi-pinterest'></i></a>
            <a href='' className='me-4 text-reset icon-whatsapp'><span id='title'>whatsapp</span><i className='bi bi-whatsapp'></i></a>
        </div>
    </div>
  )
}