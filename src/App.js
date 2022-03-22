import logo from './logo.svg';
import './App.css';
import React from 'react';
import $ from 'jquery';

let rowct = 0;

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

function Addnewrow() {

  let orgdiv = document.getElementById('orgin'+rowct);
  let amtdiv = document.getElementById('amtin'+rowct);
  let datediv = document.getElementById('datein'+rowct);
  let totaldiv = document.getElementById('totalin'+rowct);

  return (
    <React.Fragment>
      <div className='tableitem'><div id={$(orgdiv).attr('id')}>{orgdiv.value}</div></div>
      <div className='tableitem'><div id={$(amtdiv).attr('id')}>{amtdiv.value}</div></div>
      <div className='tableitem'><div id={$(datediv).attr('id')}>{datediv.value}</div></div>
      <div className='tableitem'><div id={$(totaldiv).attr('id')}>{totaldiv.value}</div></div>
    </React.Fragment>
  ),
  document.getElementById('btable')
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

function Addrowbtn() {
  return (
  <button id="addrow" >Add New Row</button>
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