import Stats from "./stats";
import PropTypes from "prop-types";
import css from './profile.module.css'

function Profile(props) {
    const { username, tag, avatar, stats, class: location } = props;
    return (<div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
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
