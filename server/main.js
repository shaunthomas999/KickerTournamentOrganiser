import { Meteor } from 'meteor/meteor';
import '../api/participants.js';
import '../api/fixturesNScores.js';

import { ParticipantsCollection } from '../api/participants.js';
import { FixturesAndScoresCollection } from '../api/fixturesNScores.js';

/*
 * This method will be executed at the startup of application
 *
 * */
Meteor.startup(() => {
  console.log("=== Starting Kicker Tournament Organiser ===");

  // Clear ParticipantsCollection
  ParticipantsCollection.remove({});

  // Clear FixturesAndScoresCollection
  FixturesAndScoresCollection.remove({});

  let fakeParticipants = [{"name" : "Adam Berry",
      "nickname" : "Adam",
      "emailAddress" : "adamberry@gmail.com",
      "score": 0
    },
    {
      "name" : "Benjamin Black",
      "nickname" : "Ben",
      "emailAddress" : "bblack@gmail.com",
      "score": 0
    },
    {
      "name" : "Frank Davidson",
      "nickname" : "Frank",
      "emailAddress" : "davidson@hotmail.com",
      "score": 0
    },
    {
      "name" : "Steven Fisher",
      "nickname" : "Steve",
      "emailAddress" : "s_fisher@yahoo.com",
      "score": 0
    },
    {
      "name" : "Amelia Butler",
      "nickname" : "Amy",
      "emailAddress" : "amybutler@gmail.com",
      "score": 0
    },
    {
      "name" : "Elizabeth Glover",
      "nickname" : "Liz",
      "emailAddress" : "glover_liz@yahoo.com",
      "score": 0
    },
    {
      "name" : "Jane Hudson",
      "nickname" : "Jan",
      "emailAddress" : "hubson@web.de",
      "score": 0
    },
    {
      "name" : "Katherine McDonald",
      "nickname" : "Kathy",
      "emailAddress" : "k4kathy@gmail.com",
      "score": 0
    },
    {
      "name" : "Natalie Ross",
      "nickname" : "Rossy",
      "emailAddress" : "natalier@gmail.com",
      "score": 0
    },
    {
      "name" : "Sebastian Thomson",
      "nickname" : "Sebu",
      "emailAddress" : "sebu@web.de",
      "score": 0
    }
  ];

  for(let index in fakeParticipants) {
    console.log("Inserting: " + fakeParticipants[index].nickname);
    ParticipantsCollection.insert(fakeParticipants[index]);
  }

});
