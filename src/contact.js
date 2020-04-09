import React from "react";

class Contact extends React.Component {
  onSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <form>
        <input placeholder="nom" type="name" />
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default Contact;
