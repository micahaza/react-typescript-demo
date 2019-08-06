import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './ContactForm';
import { Contact } from '../../models/Contact';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<ContactForm />', () => {
  it('renders state of the props correctly for name field', () => {
    const contact: Contact = {
      name: 'Deezent Ralized'
    };

    const wrapper = shallow(<ContactForm contact={contact} />);
    
    wrapper.setProps({ contact });
    
    expect(wrapper.find('.name-field').props().value).toEqual(contact.name);
  });

  it('renders state of the props correctly for phone field', () => {
    const contact: Contact = {
      phoneNumber: '99231561'
    };

    const wrapper = shallow(<ContactForm contact={contact} />);
    
    wrapper.setProps({ contact });
    
    expect(wrapper.find('.phone-field').props().value).toEqual(contact.phoneNumber);
  });

  it('renders state of the props correctly for email field', () => {
    const contact: Contact = {
      email: 'fdjuricic98@gmail.com'
    };

    const wrapper = shallow(<ContactForm contact={contact} />);
    
    wrapper.setProps({ contact });
    
    expect(wrapper.find('.email-field').props().value).toEqual(contact.email);
  });
}); 