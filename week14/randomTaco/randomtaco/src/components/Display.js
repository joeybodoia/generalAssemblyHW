import React from "react"

const Display = (props) => {
    const {taco} = props

    const h3 = {
        color:"red"
    }
    const span = {
        color: "black"
    }
    return(
        <>
            <h1>Random Taco!</h1>
            <h3 style={h3}>{taco.shell ? <h3>Shell: <span style={span}>{taco.shell.name}</span></h3>:"loading"}</h3>
            <h3 style={h3}>{taco.mixin ? <h3>Mixin: <span style={span}>{taco.mixin.name}</span></h3>:"loading"}</h3>
            <h3 style={h3}> {taco.condiment ? <h3>Condiment: <span style={span}>{taco.condiment.name}</span></h3>:"loading"}</h3>
            <h3 style={h3}>{taco.base_layer ? <h3>Base Layer: <span style={span}>{taco.base_layer.name}</span></h3>:"loading"}</h3>
            <h3 style={h3}>{taco.seasoning ? <h3>Seasoning: <span style={span}>{taco.seasoning.name}</span></h3>:"loading"}</h3>
        </>
    )
}

export default Display