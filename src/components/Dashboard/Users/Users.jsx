import React from 'react'
import * as axios from 'axios'
import LogoUzerDefault from '../../../assets/images/LogoUzerDefault.png'

class Users extends React.Component {
  componentDidMount() {
    axios
      .get('/api/employees')
      .then(response => {
        // debugger
        console.log(response)
        this.props.setUsers(response.data)
        // debugger
        // this.props.setTotalUsersCount(response.data.totalCount)
      })
  }
  // onPageChanged = pageNamber => {
  //   this.props.setCurrentPage(pageNamber)
  //   axios
  //     .get(
  //       `https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`
  //     )
  //     .then(response => {
  //       this.props.setUsers(response.data.items)
  //     })
  // }
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div className="Users">
        {/* <div className="">
          {pages.map(p => {
            return (
              <span
                className={this.props.currentPage === p && 'qwe'}
                onClick={e => {
                  this.onPageChanged(p)
                }}
              >
                {p}
              </span>
            )
          })} */}
        {/* </div> */}
        {this.props.users.map(u => (
          <div className="Users__list" key={u.id}>
            <div className="list__head">
              <figure className="list_img">
                <img
                  src={u.end_date != null ? u.end_date : LogoUzerDefault}
                  alt="logo"
                />
              </figure>
              <div className="list__info">
                <div className="fio">
                  <div>{u.fname_ru}</div>
                  <div>{u.mname_ru}</div>
                  <div>{u.lname_ru}</div>
                </div>
              </div>
            </div>
            {/* <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div> */}
          </div>
        ))}
      </div>
    )
  }
}

export default Users
