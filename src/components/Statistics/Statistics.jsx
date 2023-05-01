import PropTypes from "prop-types";
import StatisticsTitle from "./title";
import StatList from "./statList";
import css from './statistics.module.css';

function Statistics(props) {
    return (<section className={css.statistics}>
        <StatisticsTitle title="Upload stats" stats={props.data} />
        <StatList data={props.data} />

    </section>
    )
}

Statistics.propTypes = {
    props: PropTypes.object,
};

export default Statistics;