import React from 'react'
import useImgs from '../img/useImgs'

import "./home.scss"
export default function Home() {
  const imgs = useImgs()
  return (
    <>
    

    <div className='d-flex'>
    <div className='position-relative' style={{height:"100vh"}}>

    <img  src={imgs.Banner} className='h-75 bottom-0 position-absolute start-0'  />
    </div>
    <section className='d-flex flex-column align-items-center'>
      <div>31th octobar 2018</div>
      <h1 className='title' >Halloween Party</h1>
      <p className='w-50'>Halloween or Hallowe'en (a contraction of All Hallows' Evening) also known as Allhalloween, All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 October.

</p>
    </section>
    </div>

    
    </>
  )
}
