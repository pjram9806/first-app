import React, { Fragment,useState } from 'react';

let  MsgItem = ()=>
{
    let [msg,setMsg] = useState('Hello');


    return ( 
        <Fragment>
        <div className='container mt-3 '>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-header'> 
                         <p className='h2'>Functional Component</p>
                        </div>
                        <div className='card-body'>
                         <p className='h3'>{msg}</p>
                         <button className='btn btn-sm btn-danger' onClick ={()=>setMsg('Good Morninig')}>Good Morning</button>
                         <button className='btn btn-sm btn-amber' onClick={()=>setMsg('Good AfterNoon')}>Good AfterNoon</button>
                         <button className='btn btn-sm btn-info' onClick={()=>setMsg('Good Evening')}>Good Evening</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
     );
}

export default MsgItem;