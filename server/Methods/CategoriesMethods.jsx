import { Meteor } from 'meteor/meteor'
import { Categories } from '../../imports/api/Categories.js'

Meteor.methods({
  addCategory:function(category) {
    Categories.insert({category})
  },
  removeCategory:function(id) {
    Categories.remove({_id:id})
  },
  updateCategory:function(id, category) {
    Categories.update({_id:id},
                {
                  $set:{category:category}
                }
    )
  },
  getCategoryById:function(id) {
    var category = Categories.find({_id : id}).fetch()
    if(category) {
      category = category[0];
    }
    return category;
  }
})
