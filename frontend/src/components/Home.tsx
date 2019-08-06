import React from 'react';
import ContactSelect from './Home/ContactSelect';
import ContactForm from './Home/ContactForm';
import { Contact } from '../models/Contact';

interface Props {

}

interface State {
  selectedContact: Contact;
}

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedContact: {}
    };

    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(selectedContact: Contact) {
    this.setState({
      selectedContact: selectedContact
    });
  }

  render() {
    return (
      <div className="container">
        <h1>List of our contacts:</h1>
        <ContactSelect clickChange={this.updateSelected} />

        <ContactForm contact={this.state.selectedContact}/>
      </div>
    );
  }
}