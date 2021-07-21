import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { navigate } from '@reach/router';

const EditProduct = props => {

    const { formState, setFormState, _id } = props

    const [ validState, setValidState ] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => setFormState(res.data.product))
            .catch(err => console.log(err))
    }, [])

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${_id}`, formState)
            .then (res => navigate(`/${_id}`))
            .catch (err => {
                const{errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }



    return(
        <div>
            <h1>Edit</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    Title:
                    <input type="text" name="title" onChange={changeHandler} value={formState.title} />
                    {(validState.title) ? <p>{validState.title}</p> : null}
                </p>
                <p>
                    Price:
                    <input type="number" name="price" onChange={changeHandler} value={formState.price}/>
                    {(validState.price) ? <p>{validState.price}</p> : null}
                </p>
                <p>
                    Description:
                    <input type="text" name="description" onChange={changeHandler} value={formState.description}/>
                    {(validState.description) ? <p>{validState.description}</p> : null}
                </p>
                <button type="submit">Change</button>
            </form>
        </div>
    )
}
export default EditProduct