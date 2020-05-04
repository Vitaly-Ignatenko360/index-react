import React from 'react'
// import'./User.sass'
// import * as axios from 'axios'
// import LogoUzerDefault from '../../assets/images/LogoUzerDefault.png'
import FilterStatus from './FilterStatus'

class Filter extends React.Component {
  render() {
    return (
      <div className="Filter">
        <input className="filter_head" placeholder="Search ..." />
        <div className="filter_foot">
          <div className="filter__status">
            <FilterStatus />
          </div>

          <select className='filter__select'>
            <option value="" hidden disabled selected>
              Выбрать
            </option>
            <option>Мальчик</option>
            <option>Девочка</option>
          </select>
          <select className='filter__select'>
            <option value="" hidden disabled selected>
              Выбрать
            </option>
            <option>Мальчик</option>
            <option>Девочка</option>
          </select>
        </div>
        {/* <input /> */}
      </div>
    )
  }
}

export default Filter
