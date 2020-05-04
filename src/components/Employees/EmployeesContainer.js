// import React from 'react'
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from '../../redux/employees-reducer'
import Employees from './Employees'
// import StoreContext from '../../StoreContext'
// import { StoreContext } from 'react-redux'

import { connect } from 'react-redux'


let mapStateToProps = state => {
  return {
    employeesPage: state.employeesPage
  }
}
let mapDispatchToProps = dispatch => {
  return {
    updateNewPost: text => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const EmployeesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees)

export default EmployeesContainer

// store={props.store.getState().EmployeesPage}
// dispatch={props.store}
