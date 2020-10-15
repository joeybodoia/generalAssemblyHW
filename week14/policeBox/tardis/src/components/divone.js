import React from "react"

const DivOne = (props) => {
    const {h3} = props
    return(
        <div>
            <h3>{h3.tardis.name}</h3>
        </div>
    )
}

export default DivOne