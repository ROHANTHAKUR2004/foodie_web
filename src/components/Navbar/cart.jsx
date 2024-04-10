export default function Carts({img}){
    return(
<div className="card card-compact w-full  bg-base-100 shadow-xl">
  <figure>
    <img src={img} alt="Shoes" />
    </figure>
</div>
    );
}