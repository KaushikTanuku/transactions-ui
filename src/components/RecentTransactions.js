import React from "react";
import TransactionRow from "./TransactionRow";
import "./RecentTransactions.css";

const transactions = [
  { card: "*4920", type: "Credit", logo: "mastercard", date: "Jun 24, 2023", time: "10:00 am", status: "Verified", amount: 2890.00 },
  { card: "*4230", type: "Debit", logo: "visa", date: "Jun 20, 2023", time: "11:00 am", status: "Rejected", amount: -49.00 },
  { card: "*5510", type: "Credit", logo: "visa", date: "Jun 19, 2023", time: "2:00 pm", status: "Pending", amount: -80.00 },
  { card: "*0983", type: "Debit", logo: "amex", date: "Jun 18, 2023", time: "11:00 am", status: "Verified", amount: -30.00 },
  { card: "*4443", type: "Credit", logo: "mastercard", date: "Jun 17, 2023", time: "10:00 am", status: "Verified", amount: 1500.00 },
  { card: "*7635", type: "Debit", logo: "visa", date: "Jun 14, 2023", time: "9:00 am", status: "Rejected", amount: -200.00 }
];

const RecentTransactions = () => {
  return (
    <div className="transactions-container">
      <div className="header">
        <h2>Recent transactions</h2>
        <p className="subheading">Transactions overview</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Card</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <TransactionRow key={index} data={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
