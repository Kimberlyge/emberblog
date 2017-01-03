import Ember from 'ember';

const {on, $} = Ember;

export default Ember.Component.extend({

	detail: on('didInsertElement', function() {

		this.actions();

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

					var date = obj.date.replace('T', ' at ');
					var dateTrimmed = date.substring(0, 19);

					$('.comment-list').append('<li class="comment"><article class="comment-body"><div class="comment-author">'+obj.author_name+'</div><footer class="comment-meta"><div class="comment-date">'+dateTrimmed+'</div><time datetime="'+obj.date+'"></time></footer><div class="comment-content">'+content+'</div><div class="reply"></article></li>')
				});

			},
			error: function() {
				console.log('error');
			}
		});
	}),

	_submitForm(event) {

		event.preventDefault();
		console.log('submit clicked');

		const form = $('.comment-form');

		$('.comment-form').prepend('<div id="comment-status" ></div>'); // add info panel before the form to provide feedback or errors
		var status = $('#comment-status');

		var data = $(form).serialize();

		$(status).html('<p>Processing...</p>');

		var endpoint = $(form).attr('action');

		document.getElementById('_wp_unfiltered_html_comment_disabled').name='_wp_unfiltered_html_comment';

		$.ajax({
			type: 'POST',
			url: endpoint,
			data: data,

			error: function(XMLHttpRequest, textStatus, errorThrown) {
				status.html('<p class="ajax-error" >You might have left one of the fields blank, or be posting too quickly</p>');
			},

			success: function(data, textStatus) {
				if (data == 'success' || textStatus == 'success') {
					status.html('<p class="ajax-success" >Thanks for your comment. We appreciate your response.</p>')
				} else{
					status.html('<p class="ajax-error" >Please wait a while before posting your next comment</p>');
					form.find('textarea[name=comment]').val('');
				}
			}
		});

		return false;

	},

	actions() {

		// $('.comment-form').on('submit', event => this._submitForm(event));

	}

});
