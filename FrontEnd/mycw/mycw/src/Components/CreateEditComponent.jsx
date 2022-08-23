import React, { Component } from "react";
import Searvice from "../Services/Searvice";

class CreateEditComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      Name: "",
      Author: "",
      Publisher: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
    this.changePublisherHandler = this.changePublisherHandler.bind(this);


    this.saveOrUpdate = this.saveOrUpdate.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      Searvice.getById(this.state.id).then((res) => {
        let Book = res.data;
        // console.log("book => " + JSON.stringify(book));
        this.setState({
          Name: Book.bookName,
          Author : Book.authorName,
          Publisher : Book.publisherName
        });
      });
    }
  }

  saveOrUpdate = (s) => {
    s.preventDefault();
    let Book = {
      bookName: this.state.Name,
      authorName: this.state.Author,
      publisherName: this.state.Publisher
    };

    if (this.state.id === "_add") {
      Searvice.create(Book).then((res) => {
        this.props.history.push("/books");
      });
    } else {
      Searvice.update(Book, this.state.id).then((res) => {
        this.props.history.push("/books");
      });
    }
  };

  changeNameHandler = (event) => {
    this.setState({ Name: event.target.value });
  };

  changeAuthorHandler = (event) => {
    this.setState({ Author: event.target.value });
  };

  changePublisherHandler = (event) => {
    this.setState({ Publisher: event.target.value });
  };
 

  cancel() {
    this.props.history.push("/books");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Book</h3>;
    } else {
      return <h3 className="text-center">Update Book</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  
                  <div className="form-group">
                    <label>Book Name: </label>
                    <input
                      placeholder="Insert Book name here"
                      name="name"
                      className="form-control"
                      value={this.state.Name}
                      onChange={this.changeNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Author Name: </label>
                    <input
                      placeholder="Insert Author name here"
                      name="author"
                      className="form-control"
                      value={this.state.Author}
                      onChange={this.changeAuthorHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Publisher Name: </label>
                    <input
                      placeholder="Insert Publisher name here"
                      name="publisher"
                      className="form-control"
                      value={this.state.Publisher}
                      onChange={this.changePublisherHandler}
                    />
                  </div>
                  
                  <br/><br/>
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdate}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    );
  }
}

export default CreateEditComponent;
