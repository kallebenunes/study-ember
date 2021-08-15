import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service'
import { Persistore } from 'persistore';

Persistore.session.set('user-is-logged', false)
// import isAuth from './../helpers/isAuthenticated';


export default class IndexController extends Controller {
  @tracked user = '';
  @tracked pass = '';

  @service application;

  @action
  async submitLogin() {
    console.log(Persistore.session.get('user-is-logged'))
    const res = await fetch('https://raw.githubusercontent.com/kallebenunes/data/main/login.json')

    const {user, password}  =  await res.json()
    if(user != this.user || password != this.pass){
      alert("Dados de usuário inválidos !")
    } else {
      Persistore.session.set('user-is-logged', true)
      window.location.href = '/#/users'
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
