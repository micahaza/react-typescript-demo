import { equal } from 'assert';
import { mapContacts } from './functions';

describe('mapContacts should', () => {
  it('map correctly', () => {
    // arrange
    const contacts = [{
      name: 'Joe',
      phoneNumber: '99887766',
      email: 'joe@email.com'
    }];

    // act
    const items = mapContacts(contacts);

    // assert
    equal(items[0].label, 'Joe (99887766), joe@email.com');
    equal(items[0].value, 0);
  });
});
