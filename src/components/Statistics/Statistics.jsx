import PropTypes from "prop-types";
import css from './Statistics.module.css';

function Statistics({ data, title }) {
    const titleMark = (title) => title ? (<h2 className={css.title}>{title}</h2>) : "";
    return (<section className={css.statistics}>
        {titleMark(title)}
        {<ul style={{ backgroundColor: getRandomColor() }} className={css.statList}>
            {data.map(({ id, label, percentage }) =>
            (
                <li style={{ backgroundColor: getRandomColor() }} className={css.item} key={id}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li >
            )
            )
            }
        </ul>}

    </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        percentage: PropTypes.number,
        label: PropTypes.string,
        id: PropTypes.string,
    }))
};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default Statistics;