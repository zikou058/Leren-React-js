import Products from "./Products"
export default function Card ({ca}) { 
    
    return <tr> 
        <th>{ca.id}</th>
        <th>{ca.userId}</th>
        <th>{ca.date}</th>
        <th> <Products productId= {ca.products.productId} quantity= {ca.products.quantity} /></th>
    </tr> 
}