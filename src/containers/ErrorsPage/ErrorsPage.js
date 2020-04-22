import React, { Component } from "react";

import axios from '../../services/axios-orders';

import Auxiliary from "../../hoc/Auxiliary";
import ErrorControls from "./ErrorControls/ErrorControls";
import ErrorsList from "./ErrorsList/ErrorsList";
import Spiner from '../../components/UI/Spinner/Spinner';

class ErrorsPage extends Component {
  state = {
    errorList:null,
    errorCounter: 0,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios.get('errors.json').then(response => {
      let currentErrorList = [];
      for (let element in response.data) {
        currentErrorList.push({
          errorId: element,
          errorCode: response.data[element].code,
          errorName: response.data[element].name,
          errorDescription: response.data[element].description,
          errorType: response.data[element].type,
          errorDateTime: response.data[element].datetime
        });
      }
      this.setState({ errorCounter: currentErrorList.length });
      this.setState({errorList:currentErrorList});
    }).catch(error => {
      console.log(error);
      this.setState({ error: true });
    });
  }

  deleteAllHandler = () => {
    console.log("deleteAllHandler function");
    const oldErrorList = this.state.errorList;
    console.log(oldErrorList);
    const newErrorList = [];
    this.setState({ errorList: newErrorList });
    // Delete all from errors in database and receive 200 OK change state
  }

  deleteErrorHandler = (deleteId) => {
    console.log("deleteErrorHandler function " + deleteId);
    const currentErrorList = [...this.state.errorList]; // για να το κάνω με emutable τρόπο
    currentErrorList.splice(deleteId, 1);
    this.setState({ errorList: currentErrorList });
    // Delete one from DB with ID and receive 200 ok change state
  }


  render() {
    let errorPage = null;
    if (this.state.errorList) {
      errorPage = <span>
        <ErrorsList
          errors={this.state.errorList}
          deleteError={(index) => this.deleteErrorHandler(index)}
        />
        <ErrorControls
          numOfErrors={this.state.errorList.length}
          deleteAll={this.deleteAllHandler}
        />
      </span>
    }else if(this.state.error){
      errorPage = <p>Errors can't de loaded!</p>
    }else {
      errorPage= <Spiner/>
    }
      

    return (
      <Auxiliary>
        {errorPage}
      </Auxiliary>
    );
  }
}
export default ErrorsPage;
