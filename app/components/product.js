import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ProductComponent extends Component {
  @tracked number = 0;

  @action
  addNumber() {
    this.number = this.number + 1;
  }
}
