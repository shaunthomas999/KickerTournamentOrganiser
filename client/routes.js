import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'ParticipantsList',
  action() {
    BlazeLayout.render('mainLayout', { main: 'participantsList' });
  },
});

FlowRouter.route('/addParticipant', {
  name: 'AddParticipant',
  action() {
    BlazeLayout.render('mainLayout', { main: 'addParticipant' });
  },
});