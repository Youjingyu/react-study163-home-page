import React, { Component } from 'react';

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_tab: 0
        }
    }
    handleClick(){
        this.setState({
            active_tab: this.state.active_tab === 0 ? 1 : 0
        })
        this.props.onTabClick(this.active_tab);
    }
    render() {
        return (
            <div className='course_title'>
                <a className={this.state.active_tab === 0 ? 'on_type' : ''} onClick={this.handleClick.bind(this)} href='#'>产品设计</a>
                <a  className={this.state.active_tab === 1 ? 'on_type' : ''} onClick={this.handleClick.bind(this)} href='#'>编程语言</a>
            </div>
        )
    }
}