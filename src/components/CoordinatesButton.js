import React from 'react';

class CoordinatesButton extends Component {
  handleClick=(event)=>{
    this.props.onRecieveCoofrinates([evnent.clientX,event.clientY])
  }
  render() {
    return ( 
      <button onClick={this.handleClick}></button>
      );
  }
}

export default CoordinatesButton;
