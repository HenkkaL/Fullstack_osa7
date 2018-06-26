import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap'

class Notification extends React.Component {
    render() {
        if (this.props.notification.length===0) {
            return null
        }

        return (
            <Alert bsStyle="warning">
                {this.props.notification}
            </Alert>
        )
    }
}

Notification.propTypes = {
    notification: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
}

export default connect(mapStateToProps)(Notification)