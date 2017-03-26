import React, { Component } from 'react';

export default class Tab extends Component {
    render() {
        return (
            <div className='course_title'>
                <a className={this.props.activeTab === 0 ? 'on_type' : ''} onClick={this.props.onTabClick} href='#'>产品设计</a>
                <a  className={this.props.activeTab === 1 ? 'on_type' : ''} onClick={this.props.onTabClick} href='#'>编程语言</a>
            </div>
        )
    }
}