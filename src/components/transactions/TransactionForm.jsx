import { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'

const TransactionForm = () => {
  const { addTransaction } = useGlobalState()
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [symbol, setSymbol] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: symbol === '+' ? +amount : -amount
    })
    setAmount('')
    setDescription('')
    setSymbol('')
  }

  const symbolHandle = event => {
    event.preventDefault()
    const { name } = event.target
    setSymbol(name)

    if (symbol === name) setSymbol('')
  }

  const allowSubmit = description && amount && symbol

  return (
    <div className='mt-3'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Description'
          onChange={e => setDescription(e.target.value)}
          value={description}
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
          name='description'
          autoComplete='off'
        />
        <input
          type='number'
          min='0'
          placeholder='Value'
          step='0.01'
          onChange={e => setAmount(e.target.value)}
          value={amount}
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
          name='amount'
        />
        <div className='flex flex-col sm:flex-row mt-3'>
          <div className='bg-green-700 text-white mr-1 rounded-lg block mb-2 w-full'>
            <button
              name='+'
              onClick={symbolHandle}
              className={`h-full ${
                symbol !== '+' && '-translate-y-1'
              } bg-green-pie text-white p-2 rounded-lg  w-full`}
            >
              Income
            </button>
          </div>
          <div className='bg-red-700 text-white mr-1 rounded-lg block mb-2 w-full'>
            <button
              name='-'
              onClick={symbolHandle}
              className={`h-full ${
                symbol !== '-' && '-translate-y-1'
              } bg-red-pie text-white p-2 rounded-lg  w-full`}
            >
              Expense
            </button>
          </div>
        </div>
        <div
          className={`${
            !allowSubmit ? 'bg-slate-600' : 'bg-indigo-800'
          } text-white mt-1 mr-1 rounded-lg block mb-2 w-full`}
        >
          <button
            disabled={!allowSubmit}
            className={`${
              !allowSubmit ? 'bg-slate-500' : 'bg-indigo-700'
            } -translate-y-1 active:-translate-y-0 text-white  py-2 rounded-lg block  w-full`}
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  )
}

export default TransactionForm
