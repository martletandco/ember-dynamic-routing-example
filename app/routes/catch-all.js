import Ember from 'ember';

const {
  get,
  getOwner,
  inject,
  Route,
  set,
} = Ember;

export default Route.extend({
  page: inject.service(),

  currentRoute: null,

  model(params, transition) {
    const page = get(this, 'page');
    return page.getByUrl(transition.intent.url)
      .then(page => {
        const { type } = page;
        this.loadRouteForType(type);

        return page;
      })
      .then(page => {
        const route = get(this, 'currentRoute');
        return route.model(params, transition, page);
      });
  },

  afterModel: proxyMethod('afterModel'),
  setupController: proxyMethod('setupController'),
  activate: proxyMethod('activate'),
  deactivate: proxyMethod('deactivate'),

  loadRouteForType(type) {
    const owner = getOwner(this);
    let route = owner.factoryFor(`route:d/${ type }`);

    if(!route) {
      route = owner.factoryFor('route:basic');
    }

    let controller = owner.factoryFor(`controller:d/${ type }`);

    if(!controller) {
      controller = owner.factoryFor('controller:basic');
    }

    set(this, 'currentRoute', route.create({ controller }));
  },
});

function proxyMethod(name) {
  return function(...args) {
    const r = get(this, 'currentRoute');
    if(!r) {
      return;
    }

    return r[name](...args);
  }
}
