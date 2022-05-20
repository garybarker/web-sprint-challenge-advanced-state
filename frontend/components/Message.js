import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Message(props) {
  return <div id="message">Nice job!</div>
}

export default connect(st => st, actions)(Message)
