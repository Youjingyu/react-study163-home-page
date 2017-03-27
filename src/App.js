import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { createStore } from 'redux'
import Tab from './components/CourseListTab'
import ListItem from './components/CourseListItem'

class App extends Component{
  render(){
    const {dispatch, courseList, page, getCourseList} = this.props;
    const curList = courseList.splice(page*20, 20);
    getCourseList();
    return (
        <div>
          <Tab activeTab={this.props.activeTab} onTabClick={this.props.onTabChange}/>
          <ul className="course_list">
            {curList.map((item, index) => {
              <ListItem itemData={item} key={index}/>
            })}
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
    getCourseList: () => (new Ajax()).get('../public/json/courses.json', function(data){
      dispatch({
        type: 'getCourseList',
        listData: data.list
      });
    }),
    changePage: (page) => dispatch({type: 'changePage', page: page})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);