import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service'
import isAuth from './../helpers/isAuthenticated';
// import { event } from 'jquery';

export default class ApplicationController extends Controller {
  @tracked user = '';
  @tracked pass = '';

  @service application;

  @action
  async submitLogin() {
    const res = await fetch('https://raw.githubusercontent.com/kallebenunes/data/main/login.json')

    const {user, password}  =  await res.json()
    if(user != this.user || password != this.pass){
      alert("Dados de usuário inválidos !")
    } else {
      this.application.userIsLogged = true;
      isAuth = this.application.userIsLogged
    }

  }
  @action
  changeUser() {
    this.user = event.target.value;
  }

  @action
  changePass() {
    this.pass = event.target.value;
  }
}
