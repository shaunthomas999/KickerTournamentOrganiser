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

Meteor.methods({
  /*
   * Add new participant to monogdb collection
   *
   * */
  'addParticipant'(name, nickname, emailAddress) {
    console.log("Going to add new participant to database");
    let participant = {
      "name" : name,
      "nickname" : nickname,
      "emailAddress" : emailAddress,
      "score": 0
    };
    ParticipantsCollection.insert(participant);
  }
});