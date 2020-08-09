// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

  coordinates = (event) => {
    //console.log(this.props, "Props")
    console.log( event)
    this.props.onReceiveCoordinates([event.clientX, event.clientY])

  }
  render () {
    return (
         <div>
         <button onClick= {this.coordinates} />
         </div>
    )
  }
}
