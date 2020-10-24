import React, { Component } from 'react'
import './styles/home.css'

export default class Home extends Component {

    state = {
        money: 0,
        selectValue: 5000000,
        quantity: 1
    }




    handleChange = (e) => {
        console.log(e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text)
        console.log(e.target.value);
        this.setState({ selectValue: parseInt(e.target.value) }, () => {
            this.calculate()
        });
    }

    handleMoneyChange = (e) => {
        console.log(e.target.value)
        this.setState({ money: parseInt(e.target.value) }, () => {
            this.calculate()
        });

    }



    calculate = () => {
        console.log("update");
        console.log("money:", this.state.money);
        console.log("selectValue:", this.state.selectValue);

        let result = Math.trunc((this.state.money) / (this.state.selectValue))
        console.log("result:", result)
        this.setState({ quantity: result })
    }

    // componentDidUpdate() {
    //     this.calculate()
    // }

    render() {



        return (
            <div>

                <header className="masthead d-flex">
                    <div className="container text-center my-auto">
                        <div className="form-group">
                            <div className="row justify-content-md-center">
                                <div className="col-6 ">
                                    <h1 className="mb-2 ml-5 text">¿Cuánt@s </h1>
                                </div>

                                <div className="col-6 align-self-center mt-3">
                                    <select onChange={this.handleChange} value={this.state.selectValue} className="form-control selector" id="exampleFormControlSelect1">
                                        <option label="Barcos" >5000000</option>
                                        <option label="Putas" >1000</option>
                                        <option label="Kgs de Cocaina" >1232</option>
                                        <option label="lamborghinis">1231231231</option>
                                        <option label="Mansiones">1231242</option>
                                        <option label="Tulas del pipe">1000</option>
                                    </select>
                                </div>

                            </div>

                            <div className="row ">
                                <div className="col-6">
                                    <h3 className="mb-6 text">
                                        Puedo comprar con
                                    </h3>
                                </div>


                                <div className="col-5">
                                    <input type="number" value={this.state.money} onChange={this.handleMoneyChange} className="form-control input" aria-describedby="emailHelp" placeholder="Enter the plaplipla"></input>

                                </div>
                                <div className="col">
                                    <h3 className="mb-6 ml-2">

                                    </h3>
                                </div>

                            </div>

                            <h1> {this.state.quantity} </h1>
                        </div>


                    </div>
                    <div className="overlay"></div>
                </header>
            </div>
        )
    }
}