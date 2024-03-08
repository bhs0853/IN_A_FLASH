import { Component } from "react/cjs/react.production.min";

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
        console.log(`${this.props.name} child constructor`);
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                count : 10,
            })
            console.log(`${this.props.name} child state changed`);
        },10000);
        console.log(`${this.props.name} child component did mount`);
    }
    render(){
        console.log(`${this.props.name} child render`);
        const {count} = this.state;
        return(
            <div>
                <h1>This is Profile Component</h1>
                <h4>Created by {this.props.name}</h4>
                <p>{count}</p>
                <button
                onClick={() => {this.setState({
                    count : (count+1)
                })}}>count++</button>
            </div>
        )
    };
}
export default Profile;