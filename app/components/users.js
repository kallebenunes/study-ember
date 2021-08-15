import React, {useState} from 'react'
import User from './user'
import ReactComponent from '../react-component';
import { Persistore } from 'persistore';

export const Users = () => {

  const [userIsLogged, setUserIsLogged] = useState(Persistore.session.get('user-is-logged'))

  return userIsLogged === 'true'
  ?(
    <div className="container-users">
      <h1 className="container-users__title">Lista de usuário</h1>
      <User/>
    </div>
  )
  :(
    <div className="login-required">
      <h2>É necessário estar logado para visualizar a lista de usuários</h2>
      <a href="/">Clique para retornar a tela de login</a>
    </div>
  )

}

export default ReactComponent.extend({
  didInsertElement() {
    this._super(...arguments);
    this.reactRender(<Users/>);
  }
});
