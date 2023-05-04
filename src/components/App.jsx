import Statistics from "./Statistics/Statistics";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from './Profile/ProfileJson/user';
import data from './Statistics/StatisticsJson/data';
import friends from './FriendList/FriendListJson/friends';
import transactions from './TransactionHistory/TransactionHistoryJson/transactions';

export const App = () => {
  return (
    <div className="container">
      <Profile {...user} />
      <Statistics data={data} title="Upload stats" />
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </div>
  );
};
