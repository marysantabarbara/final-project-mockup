import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/about', {
  name: 'About_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'About_Page' });
  },
});

FlowRouter.route('/events', {
  name: 'Events_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Events_Page' });
  },
});


FlowRouter.route('/connect', {
  name: 'Connect_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Connect_Page' });
  },
});

FlowRouter.route('/profile-page', {
  name: 'Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_Page' });
  },
});

FlowRouter.route('/review', {
  name: 'Review_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Review_Page' });
  },
});

FlowRouter.route('/make-review', {
  name: 'Make_Review_Page',
    action() {
  BlazeLayout.render('App_Body', { main: 'Make_Review_Page' });
},
});

FlowRouter.route('/message', {
  name: 'Message_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Message_Page' });
  },
});

FlowRouter.route('/groups', {
  name: 'Groups_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Groups_Page' });
  },
});
FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
