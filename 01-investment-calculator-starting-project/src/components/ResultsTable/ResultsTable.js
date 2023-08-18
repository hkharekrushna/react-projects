import React  from "react";
import cssclasses from "./ResultsTable.module.css";

const ResultsTable = (props) =>{
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

    return (
        <table className={cssclasses.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearData) =>(
            <tr key = {yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearData.yearlyInterest)}</td>
              <td>{formatter.format(yearData.savingsEndOfYear-props.initialSavings - yearData.yearlyContribution*yearData.year)}</td>
              <td>{formatter.format(props.initialSavings + yearData.yearlyContribution*yearData.year)}</td>
            </tr>
            //{console.log(yearData)};
          ))}
          


        </tbody>
      </table>
    );
};

export default ResultsTable;