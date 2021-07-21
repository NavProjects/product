import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DetailComponent = props => {

    const {_id} = props

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
            <h4>{product.description}</h4>
        </div>
    )

}
export default DetailComponent