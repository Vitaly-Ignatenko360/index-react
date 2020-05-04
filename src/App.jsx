import React from 'react'
// import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/app/navbar/Navbar'
import Sidebar from './components/app/sidebar/Sidebar'
import EmployeesContainer from './components/Employees/EmployeesContainer'
import Equipment from './views/Equipment'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Profile from './components/Profile/Profile'
import Dashboard from './components/Dashboard/Dashboard'
import './assets/fonts/OpenSans/stylesheet.css'
import './assets/fonts/fontello/css/fontello.css'
import './style.sass'
import './App.css'
import * as ROUTES from './constants/routes'

const App = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="app-wrapper-content">
        <Navbar />
        <div className="row">
          <Route exact path={ROUTES.DASHDOARD} render={() => <Dashboard />} />
          <Route
            path={ROUTES.ADDEMPLOYEE}
            render={() => <EmployeesContainer />}
          />
          <Route
            path={ROUTES.EQUIPMENT}
            render={() => <Equipment head="head" text="qwe123" />}
          />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <Profile />} />
        </div>
      </div>
    </div>
  )
}

export default App

// auth

// import { withAuthentication } from './components/Authorization/Session'
// import NavigationAuth from './components/Authorization/Navigation/Navigation'
// const App = (props) => (

// // class App extends Component {
// //   constructor() {
// //     super()

// //     this.state = {
// //       speed: 120
// //     }
// //   }
//   // render() {

//     // return (
//     <Router>
//       <div className="app-wrapper">
//         <NavigationAuth store={props.store}   />
//       </div>
//       {/* asdasdasdas{this.state.speed} */}
//     </Router>
//     )
//   // }
// // }
// export default withAuthentication(App)
