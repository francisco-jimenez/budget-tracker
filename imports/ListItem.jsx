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
            var { fieldsToDisplay } = this.props;
            var { labelsToDisplay } = this.props;
            var { item } = this.props;
            var contentToDisplay = '';
            for (var i = 0; i<fieldsToDisplay.length; i++) {
              if(fieldsToDisplay[i] in item){
                  contentToDisplay = contentToDisplay + ' ' + labelsToDisplay[i];
                  contentToDisplay = contentToDisplay + ' ' + item[fieldsToDisplay[i]];
              }
            }

            console.log = this.props;
            return(
              <List.Item>
                <List.Content floated='right'>
                  <Button onClick={()=>{this.props.removeItem(item._id)}}>Delete</Button>
                </List.Content>
                <List.Content floated='right'>
                  <Button onClick={()=>{this.props.updateItem(item._id)}}>Edit</Button>
                </List.Content>
                <List.Content>
                  <div>
                    {contentToDisplay}
                  </div>
                </List.Content>
              </List.Item>
            )
            debugger;
    }
}
