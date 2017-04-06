import Ember from 'ember';

const {
  Route,
} = Ember;

export default Route.extend({
  type: 'plain',

  model(params, transition, page) {
    return page;
  },
});