var GameView = Backbone.View.extend({
	el: '#game-screen',

	initialize: function(options) {

		_.bindAll(
			this,
			'onKeyUp'
		);

		this.$(window).on('keypress', this.onKeyUp);

	},

	onKeyUp: function(key) {
		conole.log('Key hit');
		if(key.which === 27) {
			this.options.router.navigate('menu', {trigger: true});
		}
	}
});