import { Meteor } from 'meteor/meteor'
import { Projects } from '../../imports/api/Projects.js'

Meteor.methods({
  addProject:function(name) {
    console.log('entra en el metodo')
    Projects.insert({name})
  },
  removeProject:function(id) {
    Projects.remove({_id:id})
  },
  updateProject:function(id, name) {
    Projects.update({_id:id},
                {
                  $set:{name:name}
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
