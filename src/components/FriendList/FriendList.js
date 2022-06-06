import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import defaultImage from '../default.jpg';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.item}>
          <span
            className={isOnline ? s.status + ` ${s.online}` : s.status}
          ></span>
          <img
            className={s.avatar}
            src={avatar || defaultImage}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    }),
  ),
};

export default FriendList;
