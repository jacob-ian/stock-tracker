import * as firebase from 'firebase-functions';

interface AddTrackingItemPayload {
  name: string;
  url: string;
}

export const addTrackingItem = firebase.https.onCall((data: AddTrackingItemPayload, context) => {
  context.
})