import React from 'react'


const Users = ({ users }) => {
    return (
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

                    users.map(user =>
                        <tr key={user._id}>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.blogs.length}
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Users