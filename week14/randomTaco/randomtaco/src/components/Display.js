import React from "react"

const Display = (props) => {
    const {taco} = props
    return(
        <>
            <h1>Random Taco</h1>
            <h3>{taco.shell ? <h3>Shell:{taco.shell.name}</h3>:"loading"}</h3>
            <h3>{taco.mixin ? <h3>Mixin:{taco.mixin.name}</h3>:"loading"}</h3>
            <h3>{taco.condiment ? <h3>Condiment:{taco.condiment.name}</h3>:"loading"}</h3>
            <h3>{taco.base_layer ? <h3>Base Layer:{taco.base_layer.name}</h3>:"loading"}</h3>
            <h3>{taco.seasoning ? <h3>Seasoning:{taco.seasoning.name}</h3>:"loading"}</h3>
        </>
    )
}

export default Display