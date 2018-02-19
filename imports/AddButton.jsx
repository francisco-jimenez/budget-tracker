import React from 'react';

const AddButton = ({}) => (
  <div>
    <button>Add visible={this.props.itemName!= ''} {this.props.itemName} onClick = {this.props.addItem(this.props.itemName)}</button>
  </div>
);

export default AddButton;
