import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 20 }, { price: 25 }];
    return items;
  }
}
