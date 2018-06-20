import React from 'react'
import { connect } from 'react-redux'
import {  Link } from 'react-router-dom'

class Users extends React.Component {

    render() {
        return (
            <div>
            <h2>Users</h2>
            <table>
                <tbody>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Blogs added
                        </th>
                    </tr>
                    {
                        this.props.users.map(user =>
                            <tr key={user._id}>
                                <td>
                                <Link to={`/users/${user._id}`}>{user.name}</Link>
                                </td>
                                <td>
                                    {user.blogs.length}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const users = state.users
    return {
        users
    }
}

export default connect(mapStateToProps, null)(Users)