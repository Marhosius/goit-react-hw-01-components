// import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

const FriendList = (props) => (
    <ul className="friend-list">
        <FriendListItem data={props.data} />
    </ul>
)


// StatisticsTitle.propTypes = {
//     stats: PropTypes.array,
//     title: PropTypes.string,
// };

export default FriendList;