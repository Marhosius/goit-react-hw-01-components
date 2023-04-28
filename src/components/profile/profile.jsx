import Stats from "./stats";
import PropTypes from "prop-types";

function Profile(props) {
    const { username, tag, avatar, stats, class: location } = props;
    return (<div className="profile">
        <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                className="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>
        <Stats {...stats} />
    </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object,
};

export default Profile;
