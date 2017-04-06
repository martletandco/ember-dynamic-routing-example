import Ember from 'ember';

const {
  Logger,
  Route,
} = Ember;

export default Route.extend({
  type: 'list',

  segments(url) {

  },

  model(params, transition, page) {
    Logger.info('list@model');
    return page;
  },

  afterModel() {
    Logger.info('list@afterModel');
  },
});