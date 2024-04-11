// eslint-disable-next-line react/prop-types
export default function OrderCart({img}){
    return(
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure >
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
</div>
    )
}