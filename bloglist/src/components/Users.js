import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Row, Col } from 'react-bootstrap'

class Users extends React.Component {

    render() {
        return (
            <div>
                <h2>Users</h2>
                <Row>
                    <Col md={8}>
                        <Table striped>
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
                        </Table>
                    </Col>
                </Row>
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