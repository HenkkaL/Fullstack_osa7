import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Jumbotron, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'

class User extends React.Component {
    render() {
        const user = this.props.users.find(a => a._id === this.props.id)
        console.log(user)
        if (user)
            return (
                <div>
                    <Jumbotron>
                        <Row>
                            <Col md={10}>
                                <h2>{user.name}</h2>
                                <h3>Added blogs</h3>
                                <ListGroup>
                                    {user.blogs.map(blog =>
                                        <ListGroupItem key={blog._id}>
                                            {blog.title} by {blog.author}</ListGroupItem>
                                    )}
                                </ListGroup>
                            </Col>
                        </Row>
                    </Jumbotron>
                </div>
            )
        return (
            <div>
            </div>
        )
    }
}

User.propTypes = {
    id: PropTypes.string.isRequired,
    users: PropTypes.object
}

const mapStateToProps = (state) => {
    const users = state.users
    return {
        users
    }
}

export default connect(mapStateToProps )(User)