// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

// 1. GET: https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/:campus
// 2. POST: https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/:campus

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.

  render: _.template(`
    <div class="chat">
      <div class="username"><%=username%></div>
      <div class="text"><%=text%></div>
    </div>
  `)
};

// var newMsg = MessageView.render({
//   username: _.escape(message.username),
//   text: _.escape(message.text)
// });
// var message = {
//   username: 'Mel Brooks',
//   text: 'Never underestimate the power of the Schwartz!',
//   roomname: 'lobby'
// };