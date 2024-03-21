import db, { auth } from "../../../firebaseinit.js";
import { setDoc, doc, getDoc, collection } from "firebase/firestore";
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
      await setDoc(doc(db, this.collection, userCredential.user.uid), {
        cart: [],
        orders: [],
      });

      return { status: true, data: { userid: userCredential.user.uid } };
    } catch (err) {
      return { status: false, err: err.message };
    }
  }

  async signin(email, password) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return {
        status: true,
        data: { msg: "logged in", userid: response.user.uid },
      };
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

  async getUserData(id) {
    try {
      const res = await getDoc(doc(db, this.collection, id));
      return { status: true, data: res.data() };
    } catch (err) {
      return { status: false, err: err.message };
    }
  }

  async placeOrder(id, order) {}
  async addToCart(id, item) {}
  async removeFromCart(id, item) {}
  async increaseQty(id, item) {}
  async decreaseQty(id, item) {}
}
