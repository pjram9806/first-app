import React, { Fragment } from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() {
        const {name} = this.props 
        return (
            <Fragment>
                <h1>{name}</h1>
            </Fragment>
        )
    }
}
 
export default Welcome;