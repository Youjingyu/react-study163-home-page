import React, { Component } from 'react'
import { connect } from 'react-redux'
import Ajax from './ajax'
//import { createStore } from 'redux'
import Tab from './components/CourseListTab'
import ListItem from './components/CourseListItem'

class App extends Component{
  componentDidMount(){
    const {getCourseList} = this.props;
    getCourseList();
  }
  render(){
    const {curList} = this.props;
    return (
        <div>
          <Tab activeTab={this.props.activeTab} onTabClick={this.props.onTabChange}/>
          <ul className="course_list">
            {curList.map((item, index) => {
              return <ListItem itemData={item} key={index} isOnHover={false}/>
            })}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeTab: state.activeTab,
    //courseList: state.courseList,
    //page: state.page,
    curList: state.curList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTabChange: () => dispatch({type: 'onTabChange'}),
    getCourseList: () => (new Ajax()).get('./json/courses.json', function(data){
      dispatch({
        type: 'getCourseList',
        listData: data.list
      });
    }),
    changePage: (page) => dispatch({type: 'changePage', page: page})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);