import db, { auth } from "../../../firebaseinit.js";
import { setDoc, doc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default class UserRepository {
  constructor() {
    this.collection = "Users";
  }

  async signup(name, email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, userCredential.user.uid, "Orders"), {
        name: name,
        myorders: [],
      });
      await setDoc(doc(db, userCredential.user.uid, "Cart"), {
        mycart: [],
      });
      return { status: true, data: userCredential };
    } catch (err) {
      return { status: false, err: err.message };
    }
  }

  async signin(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { status: true, msg: "logged in" };
    } catch (err) {
      return { status: false, err: err.message };
    }
  }

  async signout() {
    try {
      await auth.signOut();
      return { status: true, msg: "Signed out" };
    } catch (err) {
      return { status: false, err: err.message };
    }
  }
}
