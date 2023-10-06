import { Component } from "react";

class Home extends Component {
 

  render() {
    return (
      <div className="m-3 card w-25 " >
        <h2 className="display-4 text-center bg-secondary pb-1 "> {this.props.title} </h2>
        <div className="display-2" >{this.props.price}</div>
        <input type="button" value="incremint" onClick={()=>this.props.incremint(this.props.index)} className="btn btn-secondary w-50 m-auto " />
        <input type="button" value="delete" onClick={()=>{this.props.deleteProdact(this.props.index)}} className="btn btn-danger  w-50 m-auto my-1"/>
      </div>
    );
  }
}
export default Home;
