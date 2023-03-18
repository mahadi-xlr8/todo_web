import React, { Component } from "react";
import CheckBox from "./component/checkbox";
import Input from "./component/input";
import Priority from "./component/Priority";
import "./style.css";
import "font-awesome/css/font-awesome.css";
import _ from "lodash";
import Delete from "./component/delete";

class Main extends React.Component {
  state = {
    data: [
      
    ],
    currentId: 0,
  };
  handleChange = (id) => {
    let temp = this.state.data.map((e) => {
      if (e.id === id) {
        e.checked = !e.checked;
      }
      return e;
    });
    this.setState({ data: temp });
  };
  handleNewData = (value) => {
    let { data, currentId } = this.state;
    currentId++;
    data.push({ id: currentId, value, checked: false, important: false });
    this.setState({ data, currentId });
  };
  handleImportant = (id) => {
    let temp = this.state.data.map((e) => {
      if (e.id === id) {
        e.important = !e.important;
      }
      return e;
    });

    let sorted = _.orderBy(temp, ["important"], ["desc"]);

    this.setState({ data: sorted });
  };

  handleDelete=(element)=>{
    const {data}=this.state
    const index=data.indexOf(element)
    data.splice(index,1)
    this.setState({data})
  }
  render() {
    return (
      <>
        <h1>Unchecked Tasks</h1>
        <div className="task__container">
          {this.state.data
            .filter((e) => e.checked === false)
            .map((e) => (
              <CheckBox key={e.id} data={e} onChange={this.handleChange} />
            )).length != 0
            ? this.state.data
                .filter((e) => e.checked === false)
                .map((e) => (
                  <div key={e.id}>
                    <CheckBox
                      key={e.id}
                      data={e}
                      onChange={this.handleChange}
                    />
                    <Priority
                      key={e.id +1000}
                      id={e.id}
                      important={e.important}
                      onChange={this.handleImportant}
                    />

                    <Delete
                      onDelete={this.handleDelete}
                      key={e.id+10000}
                      element={e}
                    />
                  </div>
                ))
            : "Feel free to add new tasks!"}
        </div>
        <div className="input__container">
          <Input onClick={this.handleNewData} />
        </div>

        <h1>Completed tasks</h1>
        <div className="task__container">
          {this.state.data
            .filter((e) => e.checked === true)
            .map((e) => (
              <CheckBox key={e.id} data={e} onChange={this.handleChange} />
            )).length != 0
            ? this.state.data
                .filter((e) => e.checked === true)
                .map((e) => (
                  <div key={e.id}>
                    <CheckBox
                      key={e.id}
                      data={e}
                      onChange={this.handleChange}
                    />
                    <Delete
                      onDelete={this.handleDelete}
                      key={e.id+10000}
                      element={e}
                    />
                  </div>
                ))
            : "There is no completed task."}

        </div>
      </>
    );
  }
}

export default Main;
