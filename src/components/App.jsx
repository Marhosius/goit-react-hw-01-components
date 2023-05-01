import Statistics from "./Statistics/Statistics";
import Profile from "./profile/profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from './profile/profileJson/user';
import data from './Statistics/StatisticsJson/data';
import friends from './FriendList/FriendListJson/friends';
import transactions from './TransactionHistory/TransactionHistoryJson/transactions';

export const App = () => {
  return (
    <div className="container">
      <Profile {...user} />
      <Statistics data={data} />
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </div>
  );
};
