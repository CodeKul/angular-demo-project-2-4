import { Injectable } from '@angular/core';
declare var firebase;

@Injectable()
export class RegistrationService {

  constructor() {

  }

  register(email, pass) {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .catch(function (error) {
        console.log(`Error code is ${error.code} message is ${error.message}`);
      });
  }

  login(email, pass) {
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .catch(function (error) {
        console.log(`Error code is ${error.code} message is ${error.message}`);
      });
  }
  checkState(callback) {
    firebase.auth().onAuthStateChanged(callback);
  }

  logout(callback) {
    firebase.auth().signOut().then(callback, function (error) {
    });
  }

  getUser() {
    return firebase.auth().currentUser;
  }
}
