// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // add event handler for button
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    roomname = _.escape(roomname);
    var $room = $(`<option>${roomname}</option>`);
    RoomsView.$select.append($room);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    let selectedRoom = RoomsView.$select.find(':selected').text();
    // Messages._data find all messages with selected room and put it array
    let roomMsg = Messages._data.filter( msg => msg.roomname === selectedRoom);
    // Clear #chat box
    MessagesView.$chats.html('');
    // Iterate through array and call render all messages
    roomMsg.forEach( selectedMsg => MessagesView.renderMessage(selectedMsg));
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // log out what currently selected room when add room button is clicked
    // let roomName = RoomsView.$select.find(':selected').text();
    let roomName = window.prompt('Enter room name');
    if (roomName !== '') {
      Rooms.add(roomName);
      RoomsView.renderRoom(roomName);
    } else {
      roomName = RoomsView.$select.find(':selected').text();
      Rooms.add(roomName);
      RoomsView.renderRoom(roomName);
    }

    // then we can call Rooms.add()

  }

};
