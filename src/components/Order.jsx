import OrderCart from "./Ordercart";

export default function Order(){
    return(
       <div className="h-[80vh] bg-white ">
          <div className="text-5xl p-8  flex items-center justify-center font-bold">
           Order Now
           </div>  
           
           <div className="mt-12 mb-1 ml-36 mr-12 w-[80%] h-[60vh] gap-6 flex flex-wrap justify-around ">
             
           
                <OrderCart img={"https://assets.box8.co.in/square/web/category/353"} />
                <OrderCart img={"https://assets.box8.co.in/square/web/category/72"}/>
                <OrderCart img={"https://assets.box8.co.in/square/web/category/118"}/>
                <OrderCart img={"https://assets.box8.co.in/square/web/category/198"}/>
                <OrderCart img={"https://assets.box8.co.in/square/web/category/200"}/>
                <OrderCart img={"https://assets.box8.co.in/square/web/category/12"}/>
                <OrderCart img={"https://assets.box8.co.in/square/web/category/82"}/>
                <OrderCart img={"https://assets.box8.co.in/square/web/category/165"}/>
                <OrderCart img={"https://assets.box8.co.in/square/web/category/117"}/>
           </div>
           </div>
       
    )  
}