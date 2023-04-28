import PropTypes from "prop-types";

function StatList({ data }) {
    return (
        <ul className="stat-list">
            {data.map(({ id, label, percentage }) =>
            (
                <li className="item" key={id}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li >
            )
            )
            }
        </ul>)
}

StatList.propTypes = {
    percentage: PropTypes.number,
    label: PropTypes.string,
    id: PropTypes.string,
};

export default StatList;