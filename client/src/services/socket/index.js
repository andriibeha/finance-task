import io from 'socket.io-client'

class WebSocketService {
  constructor() {
    this.connection = null;
  }

  establishConnection(connection) {
    this.connection = io(connection);
  }

  on(type, cb) {
    this.connection.on(type, (data) => {
      cb(data);
    });
  }

  emit(type, data) {
    this.connection.emit(type, data);
  }
}

export default new WebSocketService();
