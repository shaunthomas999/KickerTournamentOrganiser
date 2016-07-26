/**
 * Created by shaunthomas on 26/07/16.
 */
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ParticipantsCollection } from './participants.js';

export const SemiFinalsFixturesNScoresCollection = new Mongo.Collection('SemiFinalsFixturesNScoresCollection');

if (Meteor.isServer) {
  /*
   * Publish semi-finals fixtures and scores data
   *
   * */
  Meteor.publish('semiFinalsFixturesNScoresData', function semiFinalsFixturesNScoresCollection() {
    console.log("Finding semi-finals fixtures and scores");
    return SemiFinalsFixturesNScoresCollection.find({});
  });
}

Meteor.methods({
  /*
   * Algorithm to create fixtures
   *
   * */
  'makeSemisFixtures'() {
    //articles.find({}, {sort: {published:-1}, limit: 1})
    ParticipantsCollection.find({}, {sort: {"score":-1}, limit:8});
  }
});