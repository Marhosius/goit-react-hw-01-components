import PropTypes from "prop-types";
import css from './statistics.module.css';

function StatList({ data }) {
    return (
        <ul style={{ backgroundColor: getRandomColor() }} className={css.statList}>
            {data.map(({ id, label, percentage }) =>
            (
                <li style={{ backgroundColor: getRandomColor() }} className={css.item} key={id}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
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

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default StatList;