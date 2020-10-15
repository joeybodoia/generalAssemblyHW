import React from "react"


const DivThree = (props) => {
    // const {h3} = props
    const [state,setState] = React.useState(props.h3)

    const changeIt = () => {
        if (state.tardis.caps) {
          setState({
            tardis: {
              name: state.tardis.name.toLowerCase(),
              caps: false
            }
          })
        } else {
          setState({
            tardis: {
              name: state.tardis.name.toUpperCase(),
              caps: true
            }
          })
        }
    
      }

    return(
        <div>
            <h3 onClick={changeIt}>{state.tardis.name}</h3>
        </div>
    )
}

export default DivThree