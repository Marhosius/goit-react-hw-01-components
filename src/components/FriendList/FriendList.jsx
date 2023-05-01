import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import css from './FriendList.module.css';

const FriendList = ({ data }) => (
    <ul className={css.friendList}>
        <FriendListItem data={data} />
    </ul>
)


FriendList.propTypes = {
    data: PropTypes.object,
};

export default FriendList;