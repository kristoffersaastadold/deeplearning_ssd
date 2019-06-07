import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class CV extends Component{

    constructor(props){
        super(props);

        this.state = {
            numPages:1,
            pageNumber:1,
        }
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    goToPrev = () => {
        if (this.state.pageNumber>1) {
            this.setState({pageNumber:this.state.pageNumber-1})
        }
    }
    goToNext = () => {
        if (this.state.pageNumber<this.state.numPages) {
            this.setState({pageNumber:this.state.pageNumber+1})
        }
    }

    render(){
        return(
            <div className="cv__container">
                {/* <Document
                    file={cv}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    onLoadError={console.error}
                    >
                    <Page pageNumber={this.state.pageNumber} />
                </Document>
                <p className="cv__page">Page {this.state.pageNumber} of {this.state.numPages}</p>
                <div className="cv__buttons">
                    <button onClick={this.goToPrev}>Prev</button>
                    <button onClick={this.goToNext}>Next</button>
                </div> */}
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
  
export default connect(mapStateToProps, mapDispatchToProps)(CV);
