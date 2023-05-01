import PropTypes from "prop-types";
import css from './statistics.module.css';

const StatisticsTitle = ({ stats, title }) => stats ? (<h2 className={css.title}>{title}</h2>) : "";


StatisticsTitle.propTypes = {
    stats: PropTypes.array,
    title: PropTypes.string,
};

export default StatisticsTitle;