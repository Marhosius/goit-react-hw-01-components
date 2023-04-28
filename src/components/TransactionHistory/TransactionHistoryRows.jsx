import PropTypes from "prop-types";

const TransactionHistoryRows = ({ data }) => data.map(({ id, type, amount, currency }) => (
    <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
));

TransactionHistoryRows.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
};

export default TransactionHistoryRows;