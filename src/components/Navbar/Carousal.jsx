import Carts from "./cart";

export default function Carousal(){
    return(
        <div>
      <div className="w-full h-[80vh] bg-gray-900">
        <div className="mt-20 carousel w-full h-[70%]">
    <div id="slide1" className="carousel-item relative w-full">
    <Carts className="w-full" img={"https://assets.box8.co.in/horizontal-rectangle/web/banner/1820"}/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
 

  <div id="slide2" className="carousel-item relative w-full">
       <Carts img={"https://assets.box8.co.in/horizontal-rectangle/web/banner/2170"}/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 


  <div id="slide3" className="carousel-item relative w-full">
       <Carts img={"https://assets.box8.co.in/horizontal-rectangle/web/banner/1435"}/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 



  <div id="slide4" className="carousel-item relative w-full">
       <Carts  img={"https://assets.box8.co.in/horizontal-rectangle/web/banner/1394"}/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 



  <div id="slide5" className="carousel-item relative w-full">
       <Carts  img={"https://assets.box8.co.in/horizontal-rectangle/web/banner/1315"}/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
     
    
        </div>
    
        </div>
    

      </div>



    );
}