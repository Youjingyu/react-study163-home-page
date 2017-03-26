import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { createStore } from 'redux'
import Tab from './components/CourseListTab'

class App extends Component{
  render(){
    return (
        <Tab activeTab={this.props.activeTab} onTabClick={this.props.onTabChange}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeTab: state.activeTab
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTabChange: () => dispatch({type: 'onTabChange'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);