import React from "react";
import Searvice from "../Services/Searvice";

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Book: [],
    };
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.view = this.view.bind(this);
  }

  componentDidMount() {
    Searvice.getAll().then((response) => {
      this.setState({ Book: response.data });
    });
  }

  edit(id) {
    this.props.history.push(`/add-book/${id}`);
  }
  delete(id) {
    Searvice.delete(id).then((res) => {
      this.setState({
        Book: this.state.Book.filter((Book) => Book.bookID !== id),
      });
    });
  }

  view(id) {
    this.props.history.push(`/view-book/${id}`);
  }

  render() {
    return (
      <div>
        <br/><br/>
        <h3 className="bg-dark text-white bg-opacity-50">Our Books</h3>
        <table className="table table-striped ">
          <thead>
            <tr className="text-black ">
              <td> Book Id</td>
              <td> Book Name</td>
              <td> Author Name</td>
              <td> Actions </td>
            </tr>
          </thead>
          <tbody>
            {this.state.Book.map((bk) => (
              <tr key={bk.id}>
                <td className="text-black">{bk.bookID}</td>
                <td className="text-info"> {bk.bookName}</td>
                <td className="text-info"> {bk.authorName}</td>
                <td >
                  <button
                    onClick={() => this.edit(bk.bookID)}
                    className="btn btn-info"
                  >
                    Update{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.delete(bk.bookID)}
                    className="btn btn-danger"
                  >
                    Delete{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.view(bk.bookID)}
                    className="btn btn-info"
                  >
                    View{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;
