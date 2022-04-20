import * as firebase from "firebase-functions";
import * as admin from "firebase-admin";
import { UserRecord } from "firebase-functions/v1/auth";

const firestore = admin.firestore();

export const onUserCreate = firebase.auth.user().onCreate(async (user) => {
  await saveUserToFirestore(user);
});

async function saveUserToFirestore(user: UserRecord): Promise<void> {
  const { uid, displayName, email, photoURL } = user;
  const res = await firestore.doc(uid).create({
    id: uid,
    name: displayName,
    email,
    imageUrl: photoURL,
  });
  if (!res.isEqual) {
    throw new Error(`There was a problem saving user ${uid}`);
  }
}
