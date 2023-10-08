function useImgs(){

  const allImg = require.context('../img', true);
  const imageList = allImg.keys().map((image: any) =>{
   
     return allImg(image)
    })
   const imgs:any ={}
    imageList.forEach((img:string) => {
     const key = img.toString().split(".")[0].split("/")[3]
      imgs[key]=img
      console.log(img.toString().split(".")[0].split("/")[3])
    });
    return imgs
}
  export default useImgs