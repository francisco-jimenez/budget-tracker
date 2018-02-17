import React from 'react'
import { Button, List } from 'semantic-ui-react'


export default class ListItem extends React.Component{
    /**handleDelete() {
      this.props.removeItem(this.props.id);
    }
    handleUpdate(){
      debugger;
      console.log('holahola')
      var newItem = this.refs.input.value.trim();
      this.props.updateItem(this.props.id,'');
    }**/

    render(){
            var {item} = this.props;
            console.log = this.props;
            return(
              <List.Item>
                <List.Content floated='right'>
                  <Button>Delete</Button>
                </List.Content>
                <List.Content floated='right'>
                  <Button onClick={()=>{this.props.updateItem(item._id)}}>Edit</Button>
                </List.Content>
                <List.Content>
                  <div>
                    {item[this.props.fieldToDisplay]}
                  </div>
                </List.Content>
              </List.Item>
            )
            debugger;
    }
}
