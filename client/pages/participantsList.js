import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { ParticipantsCollection } from '../../api/participants.js';

import './participantsList.html';

/*
 * Subscribe to published participants list after the page is created
 *
 */
Template.participantsList.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('participantsData');
});

Template.participantsList.helpers({
  /*
  * Get list of participants
  *
  * */
  getParticipants() {
    console.log("Getting participants");
    console.log("Participants count: " + ParticipantsCollection.find({}).count());
    return ParticipantsCollection.find({});
  }
});

Template.participantsList.events({
  'click #addParticipant'(event, instance) {
    FlowRouter.go('AddParticipant');
  }
});
