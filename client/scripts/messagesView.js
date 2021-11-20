// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.
    Messages._data.forEach( message => {
      MessagesView.renderMessage(message);
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // console.log(message.username);
    var newMsg = MessageView.render({
      username: _.escape(message.username),
      text: _.escape(message.text)
    });
    MessagesView.$chats.append(newMsg);
    MessagesView.$chats.find('.username').on('click', Friends.toggleStatus);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};

// GET https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/:campus
// POST https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/:campus
