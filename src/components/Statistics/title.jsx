import PropTypes from "prop-types";

const StatisticsTitle = ({ stats, title }) => stats ? (<h2 className="title">{title}</h2>) : "";


StatisticsTitle.propTypes = {
    stats: PropTypes.array,
    title: PropTypes.string,
};

export default StatisticsTitle;