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