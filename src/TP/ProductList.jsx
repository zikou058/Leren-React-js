import { useEffect } from "react"; 
import { useState} from "react" ; 
import { Product } from "./Product.jsx";

export default function ProductList () {

    const [productList, setProductList] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [findInput, setFindInput] = useState('');
    const [category, setCategoriesList] = useState([]);

    const displayCategory = () => {
        return category.map((category, key) => {
            return <button id={category} value={category} className="btn btn-secondary" onClick={handleCategory}>
                {category}
            </button>
        }) 
    };
    const displayProducts = () => {
        let productsTemp  = productList.filter(product =>{
                        return product.description.includes(searchInput) || product.id.toString().startsWith(searchInput)
                    })
        if(findInput){
            productsTemp = productsTemp.filter(
                product => product.category === findInput
            );
        }
        if(productList.length > 0 ){ 
            return productsTemp.map((product,key) => {
                return <Product product={product} key={key}  />
            })
        }
        return <tr>
            <td colSpan={7}> No Items</td>
        </tr>
    }
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then( respense => respense.json())
            .then( respense => setProductList(respense))

    }
    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then( respense => respense.json())
            .then( respense => setCategoriesList(respense))

    }
    useEffect(() =>{
        getProducts();
        getCategories()
    }, []);
    const handleCategory = (e) => {
        e.preventDefault();
        const findValue  = e.target.value;
        setFindInput(findValue)
    };
    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = document.querySelector('#search').value
        setSearchInput (searchValue)
    }  

    return (
    <div className="container-fluid mx-auto w-90 my-4  ">
    <div class="bg-primary text-white text-center p-3 rounded border">
        <h1>Store</h1>
    </div>
        <h2>Search: </h2>
        <form>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <input type="text"  id="search" className="form-control"/>
                </div>
                <div className="col-auto">
                    <input className='btn btn-primary' type="submit" value="search" onClick={handleSearch}/>
                </div>
            </div>
            <h5>Categories :</h5>
            <div className="row g-3 align-items-center">
                <div className="btn-group">
                    <button className={`btn ${findInput === '' ? 'btn-primary' : 'btn-secondary'}`}  onClick={(e) => { e.preventDefault(); setFindInput(''); }}> All</button>
                    {displayCategory()}
                     
                </div>    
            </div>
        </form>
        <h1> Product:  </h1>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Prise</th>
                    <th>description</th>
                    <th>Category</th>
                    <th>image</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {displayProducts()}
            </tbody>
        </table>
    </div>
    )
} 