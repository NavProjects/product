import React, {useState, useEffect} from "react"
import {Link} from '@reach/router'
import axios from "axios"

const ListComponent = props => {

    const { created, setCreated } = props

    const [listState, setListState] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setListState(res.data.allProducts)
                console.log(res.data.allProducts)})
            .catch(err => console.log(err))
    }, [created])

    const deleteHandler = (product_id) => {
        console.log(product_id)
        axios.delete(`http://localhost:8000/api/product/delete/${product_id}`)
            .then(res => setCreated(!created))
            .catch(err => console.lot(err))
    }


    return(
        <div>
            <h1>ListComponent</h1>
            {
                listState.map((product, i) => {
                    return (
                        <div key={i}>
                            <p>
                            <Link to={"/"+product._id}>{product.title}</Link>
                            </p>
                            <p>
                            <Link to={`/${product._id}/edit`}>Edit</Link>
                            </p>
                            <button onClick={() => deleteHandler(product._id)}>Delete</button>
                            {/* <p>Id: {product._id}</p>
                            <p>Title: {product.title}</p>
                            <p>Price: {product.price}</p>
                            <p>Description: {product.description}</p> */}
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )


}
export default ListComponent