
    import React from 'react'
    import Home from './Home'
    import About from './About'
    import ContactUs from './ContactUs'
    import Menu from './Menu'
    import StandardList from './StandardList'
    import ModalConfirmDelete from './ModalConfirmDelete'
    import { Categories } from './api/Categories.js'

    export default class App extends React.Component {
            constructor(){
                    super()
                    this.state = {
                                    page: 'Projects' ,
                                    categories : ['default a', 'default b'],
                                    showComfirmDelete: false
                                  }
                    this.changePage = this.changePage.bind(this)
                    this.updateCategory = this.updateCategory.bind(this)
                    //this.CategoriesList = ['Cat 1', 'Cat 2','Cat 3','Cat 4']

            }

            componentWillMount() {
                var that = this;
                Tracker.autorun(()=>{
                  var list = Categories.find({}).fetch()
                  if(list.length > 0)  {
                    that.setState({categories:list}, () => {
                        //console.log(this.state);
                    })
                  } else{
                    var list = [];
                    list.push('Default');
                    that.setState({categories: list})
                  }
                })
              }
            removeCategory(id) {
              alert('llega remove')
              //Meteor.call('removeTodo' , id)
            }

            updateCategory(id, newCategory) {
              Meteor.call('getCategoryById', id, function(error, result) {
                  debugger;
                  var newCategoryName = prompt('type new category Name',result.category)
                  Meteor.call('updateCategory', id, newCategoryName)
              })
            }

            addCategory(e) {
              var category = prompt("Category name:");
              e.preventDefault();
              if(category && category != ''){
                Meteor.call('addCategory' , category)
              }
            }
            changePage(page){
                    this.setState({page})
            }
            render(){
                    let { name } = this.state
                    let { age  } = this.state
                    let { phone} = this.state
                    let { page } = this.state
                    let   shown
                    if(page == 'Projects') {
                            shown = <h3>Projects</h3>
                    }else if(page == 'Categories'){
                            shown = <StandardList updateItem={this.updateCategory} removeItem={this.removeItem} itemList= {this.state.categories} fieldToDisplay = 'category'/>
                    }
                    return  (
                                <div>
                                      <Menu  changePage ={this.changePage} activeItem={this.state.page} />
                                      {shown}
                                      <ModalConfirmDelete visible={this.state.showComfirmDelete}></ModalConfirmDelete>
                                      <div id='footer' onClick = {this.addCategory.bind(this)}>

                                      </div>
                                </div>
                    )
            }
    }
