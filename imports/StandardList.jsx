import React from 'react'
import { Button, List } from 'semantic-ui-react'
import FontAwesome from 'react-fontawesome'
import ListItem from './ListItem'

export default class StandardList extends React.Component{



render(){
      var { itemList } = this.props
      var { fieldToDisplay } = this.props
      return (
          <div>
              <List divided verticalAlign='middle'>
                {
                    itemList.map((item, index) => {
                            return (
                                      <ListItem updateItem={this.props.updateItem} removeItem={this.props.removeItem} key={item._id} item={item} fieldsToDisplay = {this.props.fieldsToDisplay} labelsToDisplay = {this.props.labelsToDisplay}/>
                                    )
                    })
                }
              </List>
          </div>
      )
  }
}
