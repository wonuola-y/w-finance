import React from "react";
import BillItem from "./billItems";
import BillsData from "../data/billsData";

const BillList= () => {
    return(
        <div>
        {BillsData.map((bill, index) =>(
            <BillItem key = {index} text = {bill.text} img = {bill.img} amount = {bill.amount} dueDate = {bill.dueDate} state = {bill.state}/>
        ))}
    </div>
    );
}
export default BillList