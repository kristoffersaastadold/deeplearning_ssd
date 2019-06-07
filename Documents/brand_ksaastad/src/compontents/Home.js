import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Icon} from '@blueprintjs/core';
class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            showArrow:true,
        }
    }
    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if (window.scrollY>100&&this.state.showArrow) {
            this.setState({showArrow:false})
        }
        if (window.scrollY<50&&!this.state.showArrow) {
            this.setState({showArrow:true})
        }
        
    }

    render(){
        return(
            <div className="home__wrapper">
                <Hero state={this.state}/>
                {this.state.showArrow?
                    <Icon className="home__down" icon="chevron-down" iconSize={32}></Icon>
                :null}
                <div className="home__gis home__element home__white flex">
                    <div className="home__child">
                        <img className="gis__img" alt="gis" src={require('../assets/gis_img.png')}/>
                    </div>
                    <div className="home__child gis__text">Through a study in geomatics, GIS has become a central part of my experience. It offers excessive knowledge in location and map handling</div>
                </div>
                <div className="home__ml home__element home__grey flex">
                    <div className="home__child">
                        <div className="ml__text">Worked on several projects using state-of-the-art machine learning and AI technology.</div>
                    </div>
                    <div className="home__child">
                        <img className="ml__img" src={require("../assets/deep-learning-brain.png")} alt="deep_learning"/>
                    </div>
                </div>
                <div className="home__bd home__element home__white flex">
                    <div className="home__child">
                        <img className="bd__img" src={require("../assets/bigdata.png")} alt="big_data"/>
                    </div>
                    <div className="home__child">
                        <div className="bd__text">Throughout my study, I have learned how to handle big data streams and solve complicated storage problems.</div>
                    </div>
                </div>
                <div className="home__frontend home__element home__grey flex">
                    <div className="home__child">
                        <div className="wd__text">In addition to a mainly computer scientifically direction of study, I have implemented my knowledge in these areas and displayed them in apps, or websites.</div>
                    </div>
                    <div className="home__child">
                        <img className="wd__img" src={require("../assets/reactjs.png")}/>
                    </div>
                </div>
            </div>
        )
    }
}

const Hero = (props) => {
    return(
        <div className="flex">
            <div className="hero__img"></div>
            <div className="hero__text">Kristoffer Saastad</div>
        </div>
    );
}

const mapStateToProps = (state) => {    
    const {  } = state;
    return {
        
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
