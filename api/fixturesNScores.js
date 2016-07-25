/**
 * Created by shaunthomas on 25/07/16.
 */
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const FixturesAndScoresCollection = new Mongo.Collection('FixturesAndScores');

if (Meteor.isServer) {
  /*
   * Fixtures and scores data
   *
   * */
  Meteor.publish('fixturesAndScoresData', function findFixturesAndScores() {
    console.log("Finding fixtures and scores");
    return FixturesAndScoresCollection.find({});
  });
}
