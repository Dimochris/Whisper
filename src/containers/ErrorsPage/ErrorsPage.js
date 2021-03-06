import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import ErrorControls from "./ErrorControls/ErrorControls";
import ErrorsList from "./ErrorsList/ErrorsList";

class ErrorsPage extends Component {
  state = {
    errorList: 
      [
            {code: 1, name:"name1", description: "Error Description number 1 ...", type:"1", dateTime:'1/1/2020'},
            {code: 2, name:"name2", description: "fdfdfd fdfdf fdfd", type:"2", dateTime:'1/1/2020'},
            {code: 3, name:"name3", description: "fdfdfd fdfdf fdfd", type:"3", dateTime:'1/1/2020'},
            {code: 4, name:"name4", description: "fdfdfd fdfdf fdfd", type:"4", dateTime:'1/1/2020'},
            {code: 5, name:"name5", description: "fdfdfd fdfdf fdfd", type:"5", dateTime:'1/1/2020'},
            {code: 6, name:"name6", description: "fdfdfd fdfdf fdfd", type:"5", dateTime:'1/1/2020'},
            {code: 7, name:"name7", description: "fdfdfd fdfdf fdfd", type:"noerror", dateTime:'1/1/2020'},
            {code: 8, name:"name8", description: "fdfdfd fdfdf fdfd", type:"noerror", dateTime:'1/1/2020'},
            {code: 9, name:"name9", description: "fdfdfd fdfdf fdfd", type:"noerror", dateTime:'1/1/2020'}
    ],
    dumyCpunter: 0
  };

  deleteAllHandler = () => {
    console.log("deleteAllHandler function");
    const oldErrorList = this.state.errorList;
    console.log(oldErrorList);
    const newErrorList = [];
    this.setState({errorList: newErrorList});
  }

  deleteErrorHandler = (deleteId) => {
    console.log("deleteErrorHandler function " + deleteId);
    const currentErrorList = [...this.state.errorList]; // για να το κάνω με emutable τρόπο
    currentErrorList.splice(deleteId,1);
    this.setState({errorList : currentErrorList});
  }

  editErrorHandler = (editId) => {
    console.log("editErrorHandler function " + editId);
  }

  render() {
    return (
      <Auxiliary>
        <ErrorsList 
          errors={this.state.errorList}
          deleteError={(index) => this.deleteErrorHandler(index)}
          editError={(index) => this.editErrorHandler(index)}
        />
        <ErrorControls 
          numOfErrors={this.state.errorList.length} 
          deleteAll={this.deleteAllHandler}
        />
      </Auxiliary>
    );
  }
}
export default ErrorsPage;
