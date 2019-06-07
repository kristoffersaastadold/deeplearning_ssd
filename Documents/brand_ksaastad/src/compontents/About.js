import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class About extends Component{

    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                About
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
    const { } = state;
    return {
        
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(About);
