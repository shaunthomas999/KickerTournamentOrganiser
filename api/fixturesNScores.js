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
  /*
   * Algorithm to create fixtures
   *
   * */
  'makeFixturesAndScores'() {
    console.log("Going to make fixtures");
    let participantsList = ParticipantsCollection.find({}).fetch();

    // Remove all existing entries in FixturesAndScoresCollection
    FixturesAndScoresCollection.remove({});

    let selectedParticipantsSet = new Set();

    let participantsLeftAfterEqualDevision = participantsList.length % 4;
    let numSelectedParticipants = participantsList.length - participantsLeftAfterEqualDevision;


    // Add participants randomly to a set
    while(selectedParticipantsSet.size < numSelectedParticipants) {
      let randomParticipantIndex = Math.floor(Math.random() * participantsList.length);
      selectedParticipantsSet.add(participantsList[randomParticipantIndex].nickname);
    }

    // Convert Set to Array for conveniently taking entries out
    let selectedParticipantsArray = Array.from(selectedParticipantsSet);

    let numOfmatches = numSelectedParticipants / 4;
    for(let matchIdx = 0; matchIdx < numOfmatches ; matchIdx++) {
      // Entry for FixturesAndScores MongoDB collection
      let fixtureItem = {
        "team" : [
          {
            "id": 0,
            "members" : [],
            "score" : 0
          },
          {
            "id": 1,
            "members" : [],
            "score" : 0
          }
        ]
      };

      for(let i=0 ; i<2 ; i++) {
        for(let j=0 ; j<2 ; j++) {
          let participantNickname = selectedParticipantsArray.pop();
          fixtureItem.team[i].members[j] = participantNickname;
        }
      }
      FixturesAndScoresCollection.insert(fixtureItem);
    }
  },
  /*
   * Update score in FixturesAndScoresCollection as well as ParticipantsCollection
   *
   * */
  'updateScore'(elementId, teamId, score) {
    console.log("Going to update score in the database");
    // Update FixturesAndScoresCollection with match scores
    FixturesAndScoresCollection.update({_id: elementId, "team.id": teamId},
      {$set: {"team.$.score": score}}, false, true);

    // Update score of individual participants
    let fixtureItem = FixturesAndScoresCollection.findOne({_id: elementId, "team.id": teamId});
    let membersArray = fixtureItem.team[teamId].members;
    for(let member in membersArray) {
      ParticipantsCollection.update({"nickname": membersArray[member]}, {$set: {"score": score}}, false, true);
    }
  }

});
