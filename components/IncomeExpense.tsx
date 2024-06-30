import { getIncomeExpense } from "@/app/actions/GetUserBalance";
import formatNumberWithCommas from "@/lib/utils";


const IncomeExpense = async () => {
    const {income, expense}= await getIncomeExpense();
  
    return (
      <div className='inc-exp-container'>
        <div>
          <h4>Income</h4>
          <p className='money plus'>${formatNumberWithCommas(income.toFixed(2))}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className='money minus'>${formatNumberWithCommas(expense.toFixed(2))}</p>
        </div>
      </div>
    );
  };
  
  export default IncomeExpense;