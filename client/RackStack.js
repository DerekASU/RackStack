Workouts = new Mongo.Collection('workouts');
if (Meteor.isClient){

 //code to run on client at startup
    Meteor.subscribe("workouts");
}



if (Meteor.isServer) {
  Meteor.startup(function () {
  });


}
