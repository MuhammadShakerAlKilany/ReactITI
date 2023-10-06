import React, { Component } from 'react'
import Prodact from "./prodact/Prodact";
export default class Prodacts extends Component {
  state={
    prodacts : [
        {
          price: 100,
          title: "prodact1",
          id: 1,
        },
        {
          price: 100,
          title: "prodact2",
          id: 2,
        },
        {
          price: 100,
          title: "prodact3",
          id: 3,
        },
        {
          price: 100,
          title: "prodact4",
          id: 4,
        },
        {
          price: 100,
          title: "prodact5",
          id: 5,
        },
      ],
  } 
  idNewProd = 6;
  
    
      addProdact = () => {
        this.idNewProd++;
        const newProdact = {
          price: 100,
          title: "prodact" + this.idNewProd,
          id: this.idNewProd,
        };
        this.state.prodacts.push(newProdact);
        localStorage.setItem("prodacts", JSON.stringify(this.state.prodacts));
        this.setState({ prodacts: this.state.prodacts });
      };
      deleteProdact = (i)=>{
        console.log(i)
        this.state.prodacts.splice(i,1)
        this.setState({prodacts:this.state.prodacts})
      }
      incremint = (i)=>{
        console.log(i)
        this.state.prodacts[i].price+=10
        this.setState({prodacts:this.state.prodacts})
      }
      render() {
        return (
          <div className='container'>
            <h1 className="bg-primary ">prodacts</h1>
            <input type="button" value="add prodact" onClick={this.addProdact} className='btn btn-add-butt' />
            <div className='d-flex flex-wrap justify-content-center '>

            {this.state.prodacts.map(({ title, price, id },i) => {
              return <Prodact title={title} price={price} key={id} index={i} deleteProdact={this.deleteProdact}  incremint={this.incremint} />;
            })}
            </div>
          </div>
        );
      }
}
