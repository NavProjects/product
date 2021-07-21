import React, {useState} from 'react';
import axios from 'axios'


const CreateComponent = props => {


    const { created, setCreated , formState, setFormState } = props

    const [ validState, setValidState ] = useState({})


    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/products", formState)
            .then (res => {
                setCreated(!created)
                setFormState({
                    title: "",
                    price: 0,
                    description: ""
                })
            })
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
            <h1>Create</h1>
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
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default CreateComponent