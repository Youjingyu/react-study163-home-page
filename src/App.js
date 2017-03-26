import React, { Component } from 'react'
import { connect } from 'react-redux'
import Ajax from 'ajax'
//import { createStore } from 'redux'
import Tab from './components/CourseListTab'
import ListItem from './components/CourseListItem'

class App extends Component{
  render(){
    const {dispatch, courseList, page, getCourseList, initCourseList} = this.props;
    const curList = courseList.splice(page*20, 20);
    return (
        <div>
          <Tab activeTab={this.props.activeTab} onTabClick={this.props.onTabChange}/>
          <ul className="course_list">
            {curList.map((item) => {
              <ListItem itemData={item}/>
            })}
            {getCourseList(() => initCourseList(0))}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeTab: state.activeTab,
    courseList: state.courseList,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTabChange: () => dispatch({type: 'onTabChange'}),
    getCourseList: (cb) => (new Ajax()).get('', function(data){
      dispatch({
        type: 'getCourseList',
        listData: data.list,
        cb: cb
      });
    }),
    initCourseList: (page) => dispatch({type: 'initCourseList', page: page})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);