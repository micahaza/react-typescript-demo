import React from 'react';
import { Contact } from '../../models/Contact';

interface PropsState {
  contact: Contact;
}

export default class ContactForm extends React.Component<PropsState, PropsState> {
  constructor(props: PropsState){
    super(props);
    this.state = {
      contact: {name: '', phoneNumber: '', email: ''}
    };
  }

  componentWillReceiveProps(nextProps: PropsState) {
    this.setState({
      contact: nextProps.contact
    });
  }

  render() {
    const { contact } = this.state;
    
    return(
      <div className="selectedContact">
        <form>
          <div className="form-item">
            <input name="name" type="text" className="name-field" value={contact.name} readOnly />
          </div>
          <div className="form-item">
            <input name="phoneNumber" type="text" className="phone-field" value={contact.phoneNumber} readOnly />
          </div>
          <div className="form-item">
            <input name="email" type="email" className="email-field" value={contact.email} readOnly />
          </div>
        </form>
      </div>
    );
  }
}