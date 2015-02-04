var ListItemView = Backbone.View.extend({

	initialize: function () {

		_.bindAll(
			this,
			'onCheckBoxClicked'
		);

		var listItemTemplate = _.template($('#template').html());
		this.$el = $(listItemTemplate(this.model.attributes));

		this.$textBox = $('#text-input-box');
		this.$displayList = $('#display-list');
		this.$checkBox = $(this.$el.find('.item-check-box'));

		this.$checkBox.on('click', this.onCheckBoxClicked);

	},

	onCheckBoxClicked: function() {
		// this.newItem.set({
		// 	completed: true
		// });

		this.$el.toggleClass('item-check-box-striked');
	}

});