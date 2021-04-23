import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: "",
      });
    }
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter((item) => item.id !== id);
    this.setState({ list: updatedlist });
  }

  updateImput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div className="container">
        <h1 className="appName">Todo List</h1>
        <span>Add an item..</span>
        <br />
        <div className="row">
          <div className="col-12 top">
            <input
              type="text"
              className="input-text"
              placeholder="Write a Todo"
              required
              value={this.state.newItem}
              onChange={(e) => this.updateImput(e.target.value)}
            />
            <Button
              variant="success"
              className="addBtn"
              onClick={() => this.addItem(this.state.newItem)}
              disabled={!this.state.newItem.length}
            >
              Add TODO
            </Button>
          </div>
        </div>
        <div className="row">
            {this.state.list.map((item) => {
              return (
                <div className="col-12 col-md-6">

                <Modal.Dialog key={item.id}>
                  <Modal.Body>
                    <p>{item.value}</p>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button
                      variant="outline-danger"
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal.Dialog>
                </div>
              );
            })}
          </div>
      </div>
    );
  }
}

export default App;
