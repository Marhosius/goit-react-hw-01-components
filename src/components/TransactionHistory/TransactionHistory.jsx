import PropTypes from "prop-types";
import TransactionHistoryRows from "./TransactionHistoryRows";

const TransactionHistory = (props) => (
    <table className="transaction-history">
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