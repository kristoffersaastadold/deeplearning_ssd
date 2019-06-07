import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { changeSelectedTab } from '../actions/global';
import { Link } from 'react-router-dom'

class Nav extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }
    componentWillMount(){
        this.props.changeSelectedTab(window.location.pathname.replace("/",""))
    }

    selectTab = (e) => {        
        this.props.changeSelectedTab(e.target.id);
    }

    render(){
        return(
            <div className="nav__wrapper flex" style={this.props.selectedTab==="home"?{color:"white"}:{}}>
                <Link to="/"><img id="home" alt="logo" onClick={this.selectTab} className="nav__logo" src={require("../assets/ks2.png")}/></Link>
                <Link to="/projects"><div id="projects" onClick={this.selectTab} className="nav__item" style={this.props.selectedTab==="projects"?{background:"white"}:{}}>Projects</div></Link>
                <Link to="/cv"><div id="cv" onClick={this.selectTab} className="nav__item" style={this.props.selectedTab==="cv"?{background:"white"}:{}}>CV</div></Link>
                <Link to="/contact"><div id="contact" onClick={this.selectTab} className="nav__item" style={this.props.selectedTab==="contact"?{background:"white"}:{}}>Contact</div></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
    const { selectedTab } = state.global;
    return {
        selectedTab
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changeSelectedTab }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
