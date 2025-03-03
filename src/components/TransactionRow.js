import React from "react";
import mastercardLogo from "../assets/mastercard.png";
import visaLogo from "../assets/visa.png";
import amexLogo from "../assets/amex.png";
import "./TransactionRow.css";

const logos = {
  mastercard: mastercardLogo,
  visa: visaLogo,
  amex: amexLogo
};

const TransactionRow = ({ data }) => {
  return (
    <tr>
      <td>
        <img src={logos[data.logo]} alt={data.logo} className="card-logo" />
        {data.card} <span className={`type-${data.type.toLowerCase()}`}>{data.type}</span>
      </td>
      <td>{data.date} <br /> {data.time}</td>
      <td className={`status-${data.status.toLowerCase()}`}>{data.status}</td>
      <td className={data.amount > 0 ? "positive" : "negative"}>{data.amount.toFixed(2)}</td>
    </tr>
  );
};

export default TransactionRow;
