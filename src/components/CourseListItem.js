import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        const itemData = this.props.itemData;
        return (
            <li className='course_list_item'>
                <a href='#'>
                    <img className='course_img' src={itemData.middlePhotoUrl}/>
                    <span>{itemData.name}</span>
                    <span>{itemData.provider}</span>
                    <span>{itemData.learnerCount}</span>
                    <span>{itemData.price == 0 ? '���' : '?' + itemData.price}</span>
                </a>
                <div className={'course_detail' + this.props.isOnHover ? '' : ' hidden'}>
                    <div className='detail'>
                        <div className="detail_img">
                            <img className="course_img" src={itemData.middlePhotoUrl} />
                        </div>
                        <div class="detail_item">
                            <h4>{itemData.name}</h4>
                            <span>{itemData.learnerCount}</span>
                            <span>{itemData.provider}</span>
                            <span>{itemData.categoryName}</span>
                        </div>
                        <p>{itemData.description}</p>
                    </div>
                </div>
            </li>
        )
    }
}