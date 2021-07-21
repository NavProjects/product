import React, { useState } from "react"
import ListComponent from "./listComponent/ListComponent"
import CreateComponent from "./CreateComponent/CreateComponent"

const Home = props => {

    const { formState, setFormState } = props

    const [created, setCreated ] = useState(true)

return(
    <div>
        <CreateComponent created={created} setCreated={setCreated} formState={formState} setFormState={setFormState}/>
        <ListComponent created={created} setCreated={setCreated}/>
    </div>

)
}
export default Home