import React, { Component } from "react";
import Searvice from "../Services/Searvice";

export default class ViewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      Book: {},
    };
  }

  componentDidMount() {
    Searvice.getById(this.state.id).then((res) => {
      this.setState({ Book: res.data });
    });
  }

  cancel() {
    this.props.history.push("/books");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">{this.state.Book.bookName}</h3>
          <div className="card-body">
             <div>
                 
             <table className="table table-striped">
            
                  <tbody>
                      <tr>
                      <td><label> Book ID</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.Book.bookID} </td>
                      </tr>
                      <br/>  <br/>
                      <tr>
                      <td><label> Book Name</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.Book.bookName} </td>
                      </tr>
                      <br/>  <br/>
                      <tr>
                      <td><label> Author Name</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.Book.authorName} </td>
                      </tr>
                      <br/>  <br/>
                      <tr>
                      <td><label> Publisher Name</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.Book.publisherName} </td>
                      </tr>
                      <br/>
                      <tr>
                      <div>
              <button
                className="btn btn-danger"
                onClick={this.cancel.bind(this)}
                style={{ marginTop: "100px" }}
              >
                Back to our Book List
              </button>
            </div>
                      </tr>
                  </tbody>
              </table>
             </div>
          </div>
        </div>
      </div>
    );
  }
}
