
    import React from 'react'
    import Home from './Home'
    import About from './About'
    import ContactUs from './ContactUs'
    import Menu from './Menu'
    import StandardList from './StandardList'
    import ModalConfirmDelete from './ModalConfirmDelete'
    import { Categories } from './api/Categories.js'
    import { Projects } from './api/Projects.js'

    export default class App extends React.Component {
            constructor(){
                    super()
                    this.state = {
                                    page: 'Projects' ,
                                    categories : [],
                                    projects: [] ,
                                    addButtonText : 'Add Project'
                                  }
                    this.addFunction = this.addProject.bind(this);
                    this.changePage = this.changePage.bind(this);
                    this.updateProject = this.updateProject.bind(this);
                    this.removeProject = this.removeProject.bind(this);
                    this.updateCategory = this.updateCategory.bind(this);
                    this.removeCategory = this.removeCategory.bind(this);
                    //this.CategoriesList = ['Cat 1', 'Cat 2','Cat 3','Cat 4']

            }


///////////////////////LIFE CYCLE METHODS/////////////////


            componentWillMount() {
                var that = this;
                Tracker.autorun(()=>{
                  var categoriesList = Categories.find({}).fetch()
                  if(categoriesList.length > 0)  {
                        that.setState({categories:categoriesList}, () =>
                        {
                            //console.log(this.state);
                        })
                  } else{
                        var categoriesList = [];
                        //categoriesList.push('Default');
                        that.setState({categories: categoriesList})
                  }

                  var projectsList = Projects.find({}).fetch()

                  if(projectsList.length > 0)  {
                        that.setState({projects:projectsList}, () =>
                              {
                                //console.log(this.state);
                              })
                  } else{
                      var projectsList = [];
                      //projectsList.push('Default');
                      that.setState({projects: projectsList})
                  }
                })
              }


///////////// CATEGORIES METHODS/////////////////////


            removeCategory(id) {
                  alert('llega remove')
                  Meteor.call('removeCategory' , id)
            }

            updateCategory(id, newCategory) {
                Meteor.call('getCategoryById', id, function(error, result) {
                      var newCategoryName = prompt('type new category Name',result.category)
                      Meteor.call('updateCategory', id, newCategoryName);
                })
            }

            addCategory(e) {
              e.preventDefault();

              var category = prompt("Category name:");
              if(category && category != ''){
                    Meteor.call('addCategory' , category)
              }
            }


///////////// PROJECTS METHODS/////////////////////


            removeProject(id) {
                alert('llega remove')
                Meteor.call('removeProject' , id)
            }

            updateProject(id, newProject) {
                var that = this;
                Meteor.call('getProjectById', id, function(error, result) {
                    //var newProjectName = prompt('type new project Name',result.name)
                    //Meteor.call('updateProject', id, newProjectName)
                    that.changePage('Project_Detail');
                })
            }

            addProject(e) {
              var name = prompt("Project name:");
              e.preventDefault();
              if(name && name != ''){
                Meteor.call('addProject' , name, function(error, result) {
                    console.log('error'  , error);
                    console.log('result' ,result);
                })
              }
            }


///////////////////PAGE HANDLER/////////////////////////////////////


            changePage(page){
                let addFunction;
                let addButtonText
                if (page === 'Projects'){
                      this.addFunction = this.addProject;
                      addButtonText = 'Add Project'

                } else if (page ==='Categories'){
                      this.addFunction = this.addCategory;
                      addButtonText = 'Add Category'

                } else if (page === 'Project_Detail') {
                      addButtonText = 'Add Entry'

                }
                this.setState({
                      page          : page ,
                      addButtonText : addButtonText
                })
            }

///////////////RENDER////////////////////////////////


            render(){
                    let { name } = this.state
                    let { age  } = this.state
                    let { phone} = this.state
                    let { page } = this.state
                    let   shown
                    let addFunction;

                    if(page == 'Projects') {
                            shown = <StandardList
                                          updateItem={this.updateProject}
                                          removeItem={this.removeProject}
                                          itemList= {this.state.projects}
                                          fieldToDisplay = 'name'
                                    />

                    }else if(page == 'Categories'){
                            shown = <StandardList
                                          updateItem={this.updateCategory}
                                          removeItem={this.removeCategory}
                                          itemList= {this.state.categories}
                                          fieldToDisplay = 'category'
                                    />
                                    
                    }else if (page == 'Project_Detail') {
                            shown = <h3>Project Detail</h3>
                    }
                    return  (
                                <div>
                                      <Menu  changePage ={this.changePage} activeItem={this.state.page} />
                                      {shown}
                                      <div id='footer' onClick = {this.addFunction.bind(this)}>
                                              {this.state.addButtonText}
                                      </div>
                                </div>
                    )
            }
    }




    //<ModalConfirmDelete visible={this.state.showComfirmDelete}></ModalConfirmDelete>
