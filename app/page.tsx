import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";
import AddTransactions from "@/components/AddTransactions";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionsList from "@/components/TransactionsList";

async function HomePage() {
  const user = await currentUser();
  if(!user) {
    return <Guest></Guest>
  }
  return (
    <main>
      <h1>Welcome, {user.firstName} </h1>
      <Balance></Balance>
      <IncomeExpense></IncomeExpense>
      <AddTransactions></AddTransactions>
      <TransactionsList></TransactionsList>
    </main>
  )
}

export default HomePage;
