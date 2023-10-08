import React from 'react'

const allImg = require.context('../img', true);
const imageList = allImg.keys().map((image: any) =>{
  console.log(image)
   return allImg(image)
  })
export default function Artist() {
  console.log()
  return (
    <>
   { imageList.map((img: string ,i:number)=>{
      return < img src={img} key={i}/>
    })}
    </>
  )
}
