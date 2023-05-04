import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import css from './FriendList.module.css';

const FriendList = ({ data }) => (
    <ul className={css.friendList} key={css.friendList}>
        {data.map((el) => < FriendListItem key={el.id} {...el} />)}
    </ul>
)


FriendList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
};

export default FriendList;