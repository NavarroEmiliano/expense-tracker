import { GlobalProvider } from './context/GlobalState'

import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import IncomeExpenses from './components/transactions/IncomeExpenses'
import ExpenseChart from './components/transactions/ExpenseChart'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <GlobalProvider>
      <div className='flex flex-col justify-between min-h-screen bg-gray-900  text-zinc-400'>
        <div className='pt-20 bg-gray-900 text-white '>
          <div className='flex w-full mx-auto bg-gray-700 p-5 rounded-xl sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-2/5'>
            <div className=' w-1/3'>
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className='flex justify-center items-end  w-2/3 flex-col'>
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
          <Footer />
      </div>
    </GlobalProvider>
  )
}

export default App
