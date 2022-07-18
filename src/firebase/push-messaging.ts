import { messaging } from './index'

class PushMessaging {

  sendMessage = async ( message: any ) => {
    await messaging.send(message)
  }

  sendToMultipleDevices = async ( message: any ) => {
    await messaging.sendMulticast(message)
  }

  sendBatchOfMessages = async ( messages: any ) => {
    await messaging.sendAll(messages)
  }

}

export default new PushMessaging()
