/* eslint-disable react/prop-types */
import { useGlobalState } from '../../context/GlobalState'

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState()
  return (
    <li className='flex justify-between bg-slate-600 text-white px-3 py-2 rounded-lg mb-2 w-full'>
      <p>{transaction.description}</p>
      <div>
        <span>${transaction.amount}</span>
        <button className='ml-1'
          onClick={() => {
            deleteTransaction(transaction.id)
          }}
        >
          ❌
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
