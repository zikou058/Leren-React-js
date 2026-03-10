export default function Products ({productId, quantity}) {
    console.log(quantity)
    return <>
    <span className ="badge badge-pill bg-primary">{quantity} /5 </span>
    </>
}