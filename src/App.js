import logo from './logo.svg';
import './App.css';

function Introtext() {
  return (
    <div className="introtext">Budget Tracker 9000!</div>
  )
};

function BudgetTable(){
  return (
  <div className='btable'>
    <div id='orgheader' className='tableheader'><strong>Organization</strong></div>
    <div id='amountheader' className='tableheader'><strong>Amount</strong></div>
    <div id='dateheader' className='tableheader'><strong>Date</strong></div>
    <div id='bankheader' className='tableheader'><strong>Bank Total</strong></div>
  </div>
  )
}

function Console() {
    console.log('This is a thing')
}

function addamt(){
  
}

export {
  Introtext,
  BudgetTable,
  Console
}