/**
 * Created by Derek on 2/19/2016.
 */
Template.workout.helpers({
    workouts: function()
    {
        console.log('Trying to display lifts');
        console.log(Workouts);
        return Workouts.find();
    }
});

Template.workout.events({
    'submit .new-lift': function(event)
    {
        var lift = event.target.lift.value;
        Workouts.insert({
            lift: lift
        });
        event.target.lift.value = "";
        return false;
    }

});

Template.WorkOutList.events({
    'click .delete': function(event)
    {
        Workouts.remove(this._id);
    }
});


