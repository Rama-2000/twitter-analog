import React, { Component } from 'react'

export default class PostStatusFilter extends Component {
  render() {
    return (
      <div className='btn-group'>
            <button className='btn btn-primary'> All</button>
            <button className='btn btn-outline-secondary'>Like</button>
      </div>
    )
  }
}
