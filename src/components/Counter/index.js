import React, { Fragment } from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
      
    }

    state = {count:0}
    //method or function starts here
    onIncrement =()=>
    {
        this.setState(prevState => 
            {
                console.log(`previous state value is ${prevState.count}`)
                return{count:prevState.count +  1}
            });
    };

    onDecrement =()=>
    {
        this.setState(prevState => 
            {
                console.log(`previous state value is ${prevState.count}`)
                return{count:prevState.count - 1}
            });
    };


    render() { 
        let {count} = this.state
        return (  
        <Fragment>
            <div className='container mt-3 text-center '>
                <div className='row'>
                    <div className='col-4'>
                        <div className='card bg-light'>
                            <p className="h1 ">Counter</p>
                            <div className='card-body'> 
                            <p className="display-3 text-center">{count}</p>
                            <button className="btn btn-sm btn-amber" onClick={this.onIncrement}>Increment</button>
                            <button className="btn btn-sm btn-danger" onClick={this.onDecrement}>Decrement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

        );
    }
}
 
export default Counter;