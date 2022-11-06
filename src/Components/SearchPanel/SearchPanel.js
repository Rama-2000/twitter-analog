import React, { Component } from 'react'
import './SearchPanel.css'
export default class SearchPanel extends Component {
  render() {
    return (
      <input 
        type="text"
        className='form-control search-input'
        placeholder='Search by posts'
      />
    )
  }
}
