Meetups = new Mongo.Collection('meetups');

Meetups.helpers({
  attendees: function() {
    if (this.attendeeIds) {
      return Meteor.users.find({_id: {$in: this.attendeeIds}});
    }
  },

  truncatedAttendees: function() {
    if (this.attendeeIds) {
      return Meteor.users.find({_id: {$in: this.attendeeIds}}, {limit: 5});
    }
  },

  numberOfOverflowAttendees: function() {
    if (this.attendeeIds) {
      return this.attendeeIds.length - 5;
    }
  },

  isPast: function() {
    return moment(this.dateTime).isBefore(moment());
  }
});
