import PropTypes from "prop-types";
import css from './FriendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ data }) => data.map(({ avatar, name, isOnline, id }) => (
    <li className={css.item} key={id}>
        <span className={clsx(isOnline ? css.online : css.offline)}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li >
))


FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

export default FriendListItem;