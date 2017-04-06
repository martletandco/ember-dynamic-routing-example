import Ember from 'ember';

const {
  Controller,
} = Ember;

export default Controller.extend({
  links: [
    { label: 'index', url: '/' },
    { label: 'static', url: '/static' },
    { label: 'dynamic 1', url: '/dynamic-1' },
    { label: 'dynamic 2', url: '/dynamic-2' },
    { label: 'dynamic 2-a', url: '/dynamic-2/a' },
    { label: 'dynamic 2-b', url: '/dynamic-2/b' },
  ],
});
