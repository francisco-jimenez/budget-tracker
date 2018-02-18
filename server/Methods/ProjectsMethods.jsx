import { Meteor } from 'meteor/meteor'
import { Projects } from '../../imports/api/Projects.js'

Meteor.methods({
  addProject:function(name) {
    console.log('entra en el metodo')
    Projects.insert({name:name})
  },
  removeProject:function(id) {
    Projects.remove({_id:id})
  },
  updateProject:function(id, project) {
    Projects.update({_id:id},
                {
                  $set:{
                          name:project.name ,
                          budget:project.budget ,
                          entries: project.budget
                        }
                }
    )
  },
  getProjectById:function(id) {
    var project = Projects.find({_id : id}).fetch()
    if(project) {
      project = project[0];
    }
    return project;
  }
})
