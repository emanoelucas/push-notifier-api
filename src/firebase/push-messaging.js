const messaging = require('./index')

class PushMessaging {

  sendMessage = async ( message ) => {
    await messaging.send(message)
  }

  sendToMultipleDevices = ( message ) => {
    await messaging.sendMulticast(message)
  }

  sendBatchOfMessages = ( messages ) => {
    await messaging.sendAll(messages)
  }

}

module.exports = new PushMessaging()