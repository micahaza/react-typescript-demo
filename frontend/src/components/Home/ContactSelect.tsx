import React from 'react';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import 'react-select/dist/react-select.css';
import VirtualizedSelect from 'react-virtualized-select';
import { Contact } from '../../models/Contact';

interface Props {
  clickChange: Function
}

interface State {
  items: Contact[];
}

export default class ContactSelect extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      items: []
    };

    this.contactsOptionRenderer = this.contactsOptionRenderer.bind(this);
  }

  componentWillMount() {
    fetch('/bequant-coding-test/contacts.json')
      .then(response => response.json())
      .then((data: Contact[]) => {
        this.setState({
          items: data
        });
    }).catch((err: Error) => {
      alert('Error occurred: ' + err.message);
    });
  }

  contactsOptionRenderer({ focusOption, key, option, selectValue, style } : any): JSX.Element {
    return (
      <div
        key={key}
        onClick={() => {
          this.props.clickChange(option);
          selectValue(option);
        }}
        onMouseEnter={() => focusOption(option)}
        style={style}
        className="contactItem"
      >
        <p className="contactLabel">{option.name}, {option.email}, {option.phoneNumber}</p>
      </div>
    );
  }

  render() {
    return (
      <VirtualizedSelect
      options={this.state.items}
      optionRenderer={this.contactsOptionRenderer}
      labelKey='name' />
    );
  }
}
