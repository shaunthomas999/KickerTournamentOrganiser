/**
 * Created by shaunthomas on 26/07/16.
 */
Template.addParticipant.events({
  'click .goToParticipantsListPageLink'(event, instance) {
    FlowRouter.go('ParticipantsList');
  },
  'submit form'(event, instance) {
    event.preventDefault();
    Meteor.call('addParticipant', event.target.name.value, event.target.nickname.value, event.target.emailAddress.value);
  }
});