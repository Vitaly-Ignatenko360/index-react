import React from 'react'
import UsersContainer from './Users/UsersContainer'
import Filter from './Filter/Filter'
// import'./User.sass'
// import * as axios from 'axios'
// import LogoUzerDefault from '../../assets/images/LogoUzerDefault.png'

class Dashboard extends React.Component {
  render() {
    return <div className="Dashboard">
      <Filter />
      <UsersContainer />
    </div>
  }
}

export default Dashboard
