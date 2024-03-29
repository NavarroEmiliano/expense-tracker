import { useGlobalState } from '../../context/GlobalState'

const IncomeExpenses = () => {
  const { transactions } = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (
    amounts
      .filter(item => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1
  ).toFixed(2)

  return (
    <>
      <div className='flex flex-col  sm:flex-row justify-between '>
        <h4 className='mr-1'>Income</h4>
        <p>${income}</p>
      </div>
      <div className='flex flex-col  sm:flex-row justify-between'>
        <h4 className='mr-1'>Expense</h4>
        <h4>${expense}</h4>
      </div>
    </>
  )
}

export default IncomeExpenses
