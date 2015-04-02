import Ember from 'ember';
import Item from 'ec-new/models/item';

export default Ember.Route.extend({
  model: function() {
    return Item.create();
  }
});
