// import PropTypes from "prop-types";

const FriendListItem = ({ data }) => data.map(({ avatar, name, isOnline, id }) => (
    <li className="item" key={id}>
        <span className="status"></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
))


// StatisticsTitle.propTypes = {
//     stats: PropTypes.array,
//     title: PropTypes.string,
// };

export default FriendListItem;