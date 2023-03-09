import React, { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/expenses'
import NewExpense from './components/newExpense/newExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 0, 14)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 453,
    date: new Date(2021, 5, 12)
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </header>
    </div>
  )
}

export default App
