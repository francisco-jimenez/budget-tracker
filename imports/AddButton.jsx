import React from 'react';

const AddButton = ({}) => (
  <div>
    <button>Add {this.props.itemName} onClick = {this.props.addItem(this.props.itemName)}</button>
  </div>
);

export default AddButton;
