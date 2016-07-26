import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ParticipantsCollection = new Mongo.Collection('Participants');

if (Meteor.isServer) {
  /*
  * Publishes participants list to the client
  *
  * */
  Meteor.publish('participantsData', function findParticipants() {
    console.log("Finding participants");
    return ParticipantsCollection.find({}, {sort: {"score":-1}});
  });
}
