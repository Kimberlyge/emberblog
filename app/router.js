import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function () {
  this.route('detail');
  this.route('about', {path: 'om-alive'}, function () {
    this.route('contact', {path: 'kontakt'});
    this.route('history', {path: 'historie'});
  });
  this.route('404', {path: '/*wildcard'});
});

export default Router;
