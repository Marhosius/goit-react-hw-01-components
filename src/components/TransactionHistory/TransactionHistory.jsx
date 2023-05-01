import PropTypes from "prop-types";
import TransactionHistoryRows from "./TransactionHistoryRows";
import css from './TransactionHistory.module.css'

const TransactionHistory = (props) => (
    <table className={css.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            <TransactionHistoryRows data={props.data} />
        </tbody>
    </table>
)


TransactionHistory.propTypes = {
    props: PropTypes.array,
};

export default TransactionHistory;