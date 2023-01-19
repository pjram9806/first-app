import './App.css';
import React, { useState } from 'react';
import { Fragment } from 'react';
import UserProfile from './components/UserProfile';
import Welcome from './components/Welcome';
import Counter from './components/Counter';


let App = ()=>
{
let userDetails = 
[
  {
    uniqueNo: 1,
    imageUrl:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl:'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl:'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl:'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  }
]

  return(
    <Fragment>
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
        <a href="#" className="navbar-brand">List & Keys</a>
      </nav>

{/*       <div className='list-container'>
        <h1 className='title'>Users List</h1>
        <ul>
        {
          userDetails.map(eachItem =>(
            <UserProfile userDetails={eachItem} key = {eachItem.uniqueNo}/>
          ))
        }
        </ul>
      </div> 

      <Welcome name='vikram'/>*/}
      <Counter/>
    </Fragment>
)
}

export default App;
