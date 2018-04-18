export const createDocumentSubscription = (document, dispatch) => {
  App['document' + document.id]= App.cable.subscriptions.create({channel:'DocumentChannel', room: document.id}, {
    connected: () => {

    },
    disconnected: () => {

    },
    received: (data) => {

    }
  });
}
