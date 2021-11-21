// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  reRender: () => {
    MessagesView.$chats.html(''); // problem
    Messages._data = [];
    App.fetch(App.stopSpinner);
    console.log('succeeded');
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    // access the text box and use .value , .val()
    var message = {
      username: App.username,
      text: $('form #message').val(),
      roomname: RoomsView.$select.find(':selected').text()
    };

    Parse.create(message, () => {
      FormView.reRender();
      FormView.$form.add('#message').val('');
    });


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

// var testMsg = {
//   username: 'test',
//   text: 'test',
//   roomname: 'test'
// };
// Parse.create(testMsg, () => { console.log('succeeded'); });