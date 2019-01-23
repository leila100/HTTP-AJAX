import React from 'react';
import { FormWrapper, Btn } from '../styles/friendStyles';

class InfoForm extends React.Component {
  state = {
    info: {
      name: "",
      age: null,
      email: ""
    }
  }

  componentDidMount = () => {
    if(this.props.info) { // populate the form fields with previous data, if available.
      this.setState({info: this.props.info});
    }
  }

  saveInput = (event) => {
    const info = {
      ...this.state.info,
      [event.target.name]: event.target.value
    }
    this.setState({info: info});
  }

  onSubmitAction = (event) => {
    event.preventDefault();
    this.props.action(this.state.info, this.props.match.params.id);
    this.setState({info: {name: "", age: null, email: ""}}); // reset the form fields
    this.props.history.push("/"); // remove the form from view
  }

  render() {
    return ( 
      <FormWrapper onSubmit={this.onSubmitAction}>
        <h2>{this.props.message}</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={this.state.info.name} onChange={this.saveInput}/>
        <label htmlFor="age">age:</label>
        <input type="number" name="age" value={this.state.info.age} onChange={this.saveInput}/>
        <label htmlFor="email">email:</label>
        <input type="email" name="email" value={this.state.info.email} onChange={this.saveInput}/>
        <Btn type="submit">Submit</Btn>
      </FormWrapper>
    );
  }
}
 
export default InfoForm;