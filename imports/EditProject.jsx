import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]


class EditProject extends Component {
    state = {currentProject: {}}

    handleChange = (e, { value }) => this.setState({ value })

    componentWillReceiveProps(){
        this.state.currentProject = this.props.currentProject;
    }
    componentWillMount(){
        this.state.currentProject = this.props.currentProject;
    }
    onChangeName(e){
        let name = e.target.value;
        let currentProject = {}
        currentProject._id = this.state.currentProject._id
        currentProject.budget = this.state.currentProject.budget
        currentProject.entries = this.state.currentProject.entries;
        currentProject.name = name;
        this.setState({currentProject : currentProject})
    }

    onChangeBudget(e){
        let budget = e.target.value;
        let currentProject = {}
        currentProject._id = this.state.currentProject._id
        currentProject.budget = budget
        currentProject.entries = this.state.currentProject.entries;
        currentProject.name = this.state.currentProject.name;
        this.setState({currentProject : currentProject})
    }

    render()
    {
      var { currentProject } = this.state
      const { value } = this.state
          return (
                <Form>
                      <Form.Group widths='equal'>
                            <Form.Field control={Input} value = {currentProject.name} label='Project name' placeholder={currentProject.name} onChange={this.onChangeName.bind(this)} />
                            <Form.Field control={Input} value = {currentProject.budget} type='number' label='Budget' placeholder='Budget' onChange={this.onChangeBudget.bind(this)} />
                      </Form.Group>
                      <Form.Group inline>
                            <label>Quantity</label>
                            <Form.Field control={Radio} label='One' value='1' checked={value === '1'} onChange={this.handleChange} />
                            <Form.Field control={Radio} label='Two' value='2' checked={value === '2'} onChange={this.handleChange} />
                            <Form.Field control={Radio} label='Three' value='3' checked={value === '3'} onChange={this.handleChange} />
                      </Form.Group>
                            <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
                            <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
                      <Form.Field control={Button} onClick={() => {this.props.EditProjectHandler(currentProject)}} >Submit</Form.Field>
                </Form>
          )
    }
}

export default EditProject
