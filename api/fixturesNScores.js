/**
 * Created by shaunthomas on 25/07/16.
 */
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ParticipantsCollection } from './participants.js';

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

Meteor.methods({
  'makeFixturesAndScores'() {
    console.log("Going to make fixtures")
    let participantsList = ParticipantsCollection.find({}).fetch();
    let selectedParticipants = new Set();

    while(selectedParticipants.size < participantsList.length) {
      let fixtureItem = {
        "team" : [
          {
            "members" : [],
            "score" : 0
          },
          {
            "members" : [],
            "score" : 0
          }
        ]
      };
      for(let i=0 ; i<2 ; i++) {
        for(let j=0 ; j<2 ; j++) {
          let participantNickname;
          do {
            let randomParticipantIndex = Math.floor(Math.random() * participantsList.length);
            participantNickname = participantsList[randomParticipantIndex].nickname;
          }
          while(selectedParticipants.has(participantNickname));
          fixtureItem.team[i].members[j] = participantNickname;
          selectedParticipants.add(participantNickname);
          console.log("Nickname considered now: " + participantNickname);
        }
      }
      FixturesAndScoresCollection.insert(fixtureItem);
    }
  }
});
