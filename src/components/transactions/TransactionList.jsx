import { useGlobalState } from '../../context/GlobalState'
import TransactionItem from './TransactionItem'

const TransactionList =() =>{
  const { transactions } = useGlobalState()

  return (
    <div className='w-11/12'>
      {transactions.length ? <h3 className='mb-2 text-xl font-semibold text-end'>History</h3>: ''}
      
      <ul>
        {transactions.map(transaction => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  )
}

export default TransactionList
