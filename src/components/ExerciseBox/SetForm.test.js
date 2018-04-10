import React from 'react';
import { shallow } from 'enzyme';
import SetForm, { InputForm } from './SetForm';

describe('<InputForm />', () => {
  it('renders without crashing', () => {
    const props = {
      showForm: false,
      onPressToggleForm: jest.fn(),
    };
    shallow(<InputForm {...props} />);
  });

  it('should show the add set form when pressing the Add Set button', () => {
    const wrapper = shallow(<SetForm />);
    wrapper.find('InputForm').simulate('pressToggleForm');
    expect(wrapper.find('InputForm').prop('showForm')).toEqual(true);
  });
});
