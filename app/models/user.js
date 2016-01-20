import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  steamURL: DS.attr('string'),
  isLooking: DS.attr('boolean'),
  standardRank: DS.attr('string'),
  doublesRank: DS.attr('string'),
  lastActive: DS.attr('date')
});
