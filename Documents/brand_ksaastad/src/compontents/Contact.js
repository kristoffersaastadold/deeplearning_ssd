import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { InputGroup, TextArea, Button } from '@blueprintjs/core';

class Contact extends Component{

    constructor(props){
        super(props);

        this.state = {
            email:"",
            text:"",
        }
    }

    handleChange = (e) =>{
        this.setState({[e.target.id]:e.target.value})
    }

    submitForm = () => {
        if (this.state.text===""&&this.state.email!=="") {
            console.log("generated email");
            
        }else if(this.state.email!==""){
            console.log("submit")
            this.setState({text:""})
        }
    }

    render(){
        return(
            <div className="contact__container">
                <h2>Contact me</h2>
                <form>
                    <InputGroup id="email" className="contact__email contact__item" placeholder="Email" onChange={this.handleChange} value={this.state.email}></InputGroup>
                    <TextArea placeholder="Press submit to generate a basic contact email" large id="text" fill className="contact__text contact__item" onChange={this.handleChange} value={this.state.text}></TextArea>
                    <Button className="contact__item" onClick={this.submitForm}>Submit</Button>
                </form>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
