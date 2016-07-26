/**
 * Created by shaunthomas on 26/07/16.
 */
Template.addParticipant.events({
  'click .goToParticipantsListPageLink'(event, instance) {
    FlowRouter.go('ParticipantsList');
  }
});