import React, { useState, useEffect} from "react";
import "./RecentTransactionPage.css";
import axios from "axios";
const RecentTransaction = React.lazy(()=> import("../../Components/RecentTransaction/RecentTransactions"));


export default function RecentTransactionPage() {
  const [data, setData] = useState([]);

  const transactionsData = async () => {
    const result = await axios.get(
      `http://localhost:8081/transactions/category`
    );
    const details = result.data.content;
    setData(details);
  };

  useEffect(() => {
    transactionsData();
  }, []);

  return (
    <>
      <div className="transactions">
        <span style={{ fontSize: "20px", color: "#FFFFFF" }}>
          Recent Transaction
        </span>
        <div className="transactions-card">
          <RecentTransaction data={data}/>
        </div>
      </div>
    </>
  );
}
