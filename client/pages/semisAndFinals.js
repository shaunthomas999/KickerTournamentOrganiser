/**
 * Created by shaunthomas on 26/07/16.
 */
Template.semisAndFinals.helpers({
  /*
   * Get list of participants
   *
   * */
  getSemiFinalsTeams() {
    console.log("Getting semi-finals teams");
    console.log("Participants count: " + ParticipantsCollection.find({}).count());
    return ParticipantsCollection.find({});
  }
});

Template.semisAndFinals.events({
  'click .goToFixturesNScoresPageLink'(event, instance) {
    FlowRouter.go('FixtureNScores');
  },
  'click #makeSemisFixture'(event, instance) {
    Meteor.call('makeSemisFixture');
  }
});