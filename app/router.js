import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function () {
  this.route('index', {path: '/'});
  this.route('detail', {path: '/detail/:slug'});
  this.route('travel', {path: 'travel'}, function () {
  	// this.route('single', {path: '/:slug'}, function () {
  	// });
  });
  this.route('city', {path: '/travel/:slug'})

  this.route('404', {path: '/*wildcard'});
});

export default Router;
