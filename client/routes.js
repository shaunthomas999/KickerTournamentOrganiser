import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home',
  action() {
    FlowRouter.go('ParticipantsList');
  }
});

FlowRouter.route('/participantsList', {
  name: 'ParticipantsList',
  action() {
    BlazeLayout.render('mainLayout', { main: 'participantsList' });
  }
});

FlowRouter.route('/addParticipant', {
  name: 'AddParticipant',
  action() {
    BlazeLayout.render('mainLayout', { main: 'addParticipant' });
  }
});

FlowRouter.route('/fixtureAndScores', {
  name: 'FixtureNScores',
  action() {
    BlazeLayout.render('mainLayout', { main: 'fixtureNScores' });
  }
});