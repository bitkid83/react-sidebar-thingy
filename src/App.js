import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* function FooterTab(props) {    
    function handleClick(e) {
        e.preventDefault();
        console.log(e.timeStamp + ' AppSidebar.handleClick: ' + e.ctrlKey);
        console.log(this.props.onSidebarToggle(e.target.value));
    }

    const footerTabStyle = {
        backgroundColor: props.bgColor,
    };

    return (
        <div className="Footer-tab" style={footerTabStyle} onClick={this.handleClick}>
            {props.footerTabName}
        </div>
    );
} */
class FooterTab extends Component {
    constructor(props) {     
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {        
        if (this.props.sidebarToggle) {
            this.props.sidebarToggle();
        }
    }

    render() {        
        var footerTabStyle = {
            backgroundColor: this.props.bgColor
        };
        return (            
          <div className="Footer-tab" style={footerTabStyle} onClick={this.handleClick}>
            {this.props.footerTabName}
          </div>
        );
    }
}

/* class AppFooter extends React.Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div className="App-footer">
            <FooterTab bgColor="red" footerTabName="foo" sidebarToggle={this.props.onSidebarToggle}/>
            <FooterTab bgColor="blue" footerTabName="bar"/>
            <FooterTab bgColor="green" footerTabName="baz"/>
            </div>
        );      
    }
} */
function AppFooter(props) {        
    return (
        <div className="App-footer">
            <FooterTab bgColor="red" footerTabName="foo" sidebarToggle={props.onSidebarToggle}/>
            <FooterTab bgColor="blue" footerTabName="bar"/>
            <FooterTab bgColor="green" footerTabName="baz"/>
        </div>     
    );
}

function AppSidebar(props) {
    console.log("AppSidebar => props.sidebarToggled: " + props.sidebarToggled);

    //todo(paulh): put this in a little method
    let sidebarToggled = props.sidebarToggled;
    let sidebarStyle = {};
    if (sidebarToggled === true) {
        sidebarStyle = {
            width: '200px',
        };
    }
    else {
        sidebarStyle = {
            width: '0px',
        }
    }
    return (
        <div className="App-sidebar" style={sidebarStyle}>
        Layers
        </div>
    ); 
}

class App extends Component {
    constructor(props) {
        super(props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.state = { sidebarToggled: false };
    }

    toggleSidebar() {       
        console.log("App.state.sidebarToggled: " + this.state.sidebarToggled);
        if (this.state.sidebarToggled === true) {
            this.setState({ sidebarToggled:  false });            
        }
        else if (this.state.sidebarToggled === false) {
            this.setState({ sidebarToggled:  true });
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">          
                    <h1 className="App-title">TitleReactor</h1>                    
                </header>
                
                <p className="App-intro">
                    Fuck it, we'll do it live!!!<br />
                    <img src={logo} className="App-logo" alt="logo" />
                </p>
                <AppSidebar sidebarToggled={this.state.sidebarToggled}/>
                <AppFooter onSidebarToggle={this.toggleSidebar}/>    
            </div>
        );
    }
}

export default App;
