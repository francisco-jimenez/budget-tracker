import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class MenuExamplePointing extends Component {
  state = { activeItem: null }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.changePage(name);
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu tabular>
          <Menu.Item name='Projects' active={activeItem === 'Projects'} onClick={this.handleItemClick} />
          <Menu.Item name='Categories' position='right' active={activeItem === 'Categories'} onClick={this.handleItemClick} />
        </Menu>
      </div>
    )
  }
}
