import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../../context/GlobalState'
import {
  calculateExpensesPercentage,
  calculateIncomePercentage
} from '../../utils/calcules'

const ExpenseChart = () => {
  const { transactions } = useGlobalState()

  const totalIncomes = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)

  const totalExpenses =
    transactions
      .filter(transaction => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1

  const totalExpensePercentage = calculateExpensesPercentage(
    totalIncomes,
    totalExpenses
  )
  const totalIncomePercentage = calculateIncomePercentage(
    totalIncomes,
    totalExpenses
  )

  const showPie = totalExpensePercentage || totalIncomePercentage

  return (
    <div className=' flex items-center justify-center w-11/12 '>
      {showPie ? (
        <VictoryPie
          colorScale={['#e74c3c', '#2ecc71']}
          data={[
            { x: 'Expenses', y: totalExpensePercentage },
            { x: 'Income', y: totalIncomePercentage }
          ]}
          animate={{
            duration: 300
          }}
          labels={({ datum }) => `${datum.y.toFixed(2)}%`}
          width='400'
          height='400'
          padding={65}
          
          labelComponent={
            <VictoryLabel
              angle={45}
              style={{
                fill: 'white',
                fontSize:20
              }}
              
            />
          }
        />
      ) : (
        <div>There are no records</div>
      )}
    </div>
  )
}

export default ExpenseChart
