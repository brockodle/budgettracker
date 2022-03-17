import logo from './logo.svg';
import './App.css';
import React from 'react';

let rowct = 0;
let orgdiv = document.getElementById('orgin'+rowct);
let amtdiv = document.getElementById('amtin'+rowct);
let datediv = document.getElementById('datein'+rowct);
let totaldiv = document.getElementById('totalin'+rowct);

function Introtext() {
  return (
    <div className="introtext">Budget Tracker 9000!</div>
  )
};

function BudgetTable() {
  return (
    <div id='budgettable' className='btable'>
      <div id='orgheader' className='tableheader'><strong>Organization</strong></div>
      <div id='amountheader' className='tableheader'><strong>Amount</strong></div>
      <div id='dateheader' className='tableheader'><strong>Date</strong></div>
      <div id='bankheader' className='tableheader'><strong>Bank Total</strong></div>
      <Userrow />
    </div>
  )
}

function Userrow() {
  return (
    <React.Fragment>
      <div className='tableitem'><input id={"orgin"+rowct} className="tabin" /></div>
      <div className='tableitem'><input id={"amtin"+rowct} className="tabin" /></div>
      <div className='tableitem'><input id={"datein"+rowct} className="tabin" /></div>
      <div className='tableitem'><input id={"totalin"+rowct} className="tabin" /></div>
    </React.Fragment>
  )
}

function Addnewrow() {

  let orgdiv = document.getElementById('orgin'+rowct);
  let amtdiv = document.getElementById('amtin'+rowct);
  let datediv = document.getElementById('datein'+rowct);
  let totaldiv = document.getElementById('totalin'+rowct);

  return (
    <React.Fragment>
      <div className='tableitem'><div id={orgdiv.getAttribute('id')}>{orgdiv.value}</div></div>
      <div className='tableitem'><div id={amtdiv.getAtrribute('id')}>{amtdiv.value}</div></div>
      <div className='tableitem'><div id={datediv.getAtrribute('id')}>{datediv.value}</div></div>
      <div className='tableitem'><div id={totaldiv.getAttribute('id')}>{totaldiv.value}</div></div>
    </React.Fragment>
  )
}

function Addrowbtn() {
  return (
  <button id="addrow" onClick={Addnewrow()}>Add New Row</button>
  )
}

function Console() {
  console.log('This is a thing')
}

export {
  Introtext,
  BudgetTable,
  Addrowbtn,
  Userrow,
  Console
}