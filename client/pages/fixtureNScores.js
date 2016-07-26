/**
 * Created by shaunthomas on 25/07/16.
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { FixturesAndScoresCollection } from '../../api/fixturesNScores.js';

import './fixtureNScores.html';

/*
 * Subscribe to fixtures and scores list after the page is created
 *
 */
Template.fixtureNScores.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('fixturesAndScoresData');
});

Template.fixtureNScores.helpers({
  /*
   * Get list of fixtures and scores
   *
   * */
  getFixtureNScoresList() {
    console.log("Getting fixtures and scores");
    console.log("Count: " + FixturesAndScoresCollection.find({}).count());
    return FixturesAndScoresCollection.find({});
  }
});

Template.fixtureNScores.events({
  'click #startSemisAndFinals'(event, instance) {
    FlowRouter.go('SemisAndFinals');
  },
  'click .goToParticipantsListPageLink'(event, instance) {
    FlowRouter.go('ParticipantsList');
  },
  'click #makeNewFixture'(event, instance) {
    console.log("Going to call makeFixturesAndScores Meteor method");
    Meteor.call('makeFixturesAndScores');
  },
  'click .btn-score'(event, instance) {
    let teamId;
    if(event.currentTarget.className.search('btn-team0') != -1) {
      teamId = 0;
    }
    else {
      teamId = 1;
    }
    let score = event.currentTarget.innerText;
    Meteor.call('updateScore', this._id, teamId, score);
  }
});