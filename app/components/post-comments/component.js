import Ember from 'ember';

const {on, $} = Ember;

export default Ember.Component.extend({

	detail: on('didInsertElement', function() {

		var postId = document.querySelector('.js-post-id').innerHTML;

		$.ajax({
			url: 'http://vunchies.com/wp-json/wp/v2/comments?post=' + postId,
			data: {
				filter: {
				'posts_per_page': 5
				}
			},
			dataType: 'json',
			type: 'GET',

			success: function(data) {
				console.log('success');

				$.each(data, function(id, obj) {
					console.log(id, obj);
					var content = obj.content.rendered.replace(/(<([^>]+)>)/ig,"");
					console.log(content);

					 $('.comment-list').append('<li class="comment"><article class="comment-body"><div class="comment-author">'+obj.author_name+'</div><div class="comment-content">'+content+'</div><div class="reply"></div><footer class="comment-meta"></footer></article></li>')
				});

			},
			error: function() {
				console.log('error');
				// error code
			}
		});
	})

});
