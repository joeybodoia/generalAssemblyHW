import React from "react"
import Divthree from "./divthree"

const DivTwo = (props) => {
    return(
        <div>
            {/* <h3>{h3.tardis.name}</h3> */}
            <Divthree h3={props.h3}/>
            <Divthree h3={props.h3}/>
        </div>
    )
}

export default DivTwo