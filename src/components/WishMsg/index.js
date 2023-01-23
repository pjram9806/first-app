import React,{Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sayGoodAfterNoon, sayGoodEvening, sayGoodMorning } from '../../redux/wishMsg/wish-msg.actions';
import { messageKey, messageReducer } from '../../redux/wishMsg/wish-msg.reducer';


let WishMsg = ()=> 
{
    let dispatch = useDispatch();
    let messageInfo = useSelector((state)=>
    {
        return state[messageKey];
    });

    let clickGM = ()=>
    {
        dispatch(sayGoodMorning());
    }


    return(
        <Fragment>
        <div className='container mt-3 '>
            <div className='row'>
                <div className='col-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <p className='h3'>{messageInfo.message}</p>

                            <button className='btn btn-sm btn-danger' onClick={clickGM}>Good Morning</button>

                            <button className='btn btn-sm btn-success' onClick={()=> dispatch(sayGoodAfterNoon())}>Good AfterNoon</button>

                            <button className='btn btn-sm btn-info' onClick={()=> dispatch(sayGoodEvening())}>Good Evening</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</Fragment>
    )
}

export default WishMsg;