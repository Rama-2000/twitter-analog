import "./PostAddForm.css"
import React from 'react'

export default class PostAddForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text: ''
    }
    this.onChangeValue = this.onChangeValue.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChangeValue(e){
    this.setState({
      text: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onAdd(this.state.text)
    this.setState({
      text: ''
    })
  }
  render(){
    return (
    <form  className='bottom-panel d-flex' onSubmit={this.onSubmit} >
            <input 
                type="text"
                placeholder='What are you thinking about?'
                className='form-control new-post-label'
                onChange={this.onChangeValue}
                value={this.state.text}
            />
            <button 
              
              className='btn btn-outline-secondary' 
              type='submit'>
                Add Post
            </button>
      </form>
  )
  }
}
