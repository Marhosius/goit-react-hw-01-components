import PropTypes from "prop-types";
import css from './stats.module.css';

function Stats(props) {
    const { followers, views, likes } = props;
    return (<ul className={css.stats}>
        <li className={css.statsItem}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}> {followers}</span>
        </li>
        <li className={css.statsItem}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}> {views}</span>
        </li>
        <li className={css.statsItem}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}> {likes}</span>
        </li>
    </ul>
    )
}

Stats.propTypes = {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};

export default Stats;