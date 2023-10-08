import React from 'react'
import useImgs from '../img/useImgs'


export default function Artist() {
  const imgs = useImgs()
 
  return (
    <main className='d-flex flex-column align-items-center' >
    <h2 className='title'>Our Halloween's Artist</h2>
    <div className='d-flex'>
      {[0,0].map(()=>{
      return (
        < div className='d-flex w-50'>

< img src={imgs.artist_image} className=' w-50'/>
<div>
<h4> DJ Remerson Huke</h4>
<p>
Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore
</p>

</div>
<div/>
      </div>
      )
    })
   
    }
    </div>
    
   
    </main>
  )
}
