// import { Outlet } from "react-router-dom";
import Profile from "./ProfileClassComponent";
import React from "react";

const About1 = () => {
    return (
        <>
            <h1>About Us</h1>
            <p>In the phase of learning</p>
            {/* < Outlet/> */}
            <Profile name={"sai"}/>
        </>
    )
};

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
        this.state = {
            name : "sai",
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                name: "newName",
            });
            console.log("parent state changed");
        },5000);
        console.log("parent componentDidMount called");
    }
    render(){
        console.log("parent render called");
        return(
            <>
                <h1>About Us {this.state.name}</h1>
                <p>In the phase of learning</p>
                <Profile name="sai"/>
                <Profile name="name" />
            </>
        );
    }
}
export default About;