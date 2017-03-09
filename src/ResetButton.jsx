import React from 'react';

export default class ResetButton extendes React.Component {

  render(){
    return (
      <button onClick={this.props.reset}>Reset</button>
    )
  }
}
