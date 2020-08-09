import React from 'react'

export default class DelayedButton extends React.Component {

  timer = event => {
    //this.prop.onDelayedClick( setTimeout()= this.props.delay)
  }

  render () {
    return (
         <div>
         <button onClick= {this.timer}
         </div>
    )
  }
}

export default DelayedButton
