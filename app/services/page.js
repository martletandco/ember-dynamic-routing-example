import Ember from 'ember';

const {
  RSVP: {
    resolve,
  },
  Service,
} = Ember;

const pages = [
  {
    path: '/dynamic-1',
    name: 'Dyanmic 1 (plain)',
    type: 'plain',
  },
  {
    path: '/dynamic-2',
    name: 'Dyanmic 2 (list)',
    type: 'list',
  },
];

export default Service.extend({
  getByUrl(url) {
    const page = pages.find(p => url.indexOf(p.path) === 0);
    return resolve(page);
  },
});
