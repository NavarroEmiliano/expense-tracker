export const calculateIncomePercentage = (totalIncomes,totalExpenses) =>{
  if(totalIncomes && !totalExpenses) return 100

  const totalAmount = totalIncomes+totalExpenses

  if(totalAmount === 0 ) return 0

  const incomePercentage = (totalIncomes / totalAmount) * 100

  return incomePercentage
}


export const calculateExpensesPercentage = (totalIncomes,totalExpenses) =>{
  if(!totalIncomes && totalExpenses) return 100

  const totalAmount = totalIncomes+totalExpenses

  if(totalAmount === 0 ) return 0

  const expensesPercentage = (totalExpenses/ totalAmount) * 100

  return expensesPercentage
}