var dispatcher = _.extend({}, Backbone.Events);


var OneView = Backbone.View.extend({

  events: {
    "click .lista-add-button": "todo_ui_add"
  },

  pending_template: _.template($('#item-pending').html()),

  todo_ui_add: function(){
		$('#lista-pending-container').append( this.pending_template({'description':'This is a todo item'}) );
  }
});

var Lista = new OneView({el: "#wrapper",dispatcher:dispatcher});
_.bindAll(Lista);
