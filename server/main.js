import { Meteor } from 'meteor/meteor';
import '../api/participants.js';

/*
 * This method will be executed at the startup of application
 *
 * */
Meteor.startup(() => {
  console.log("=== Starting Kicker Tournament Organiser ===");
});
