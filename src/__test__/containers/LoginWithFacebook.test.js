import { mapDispatchToProps } from '../../containers/LoginWithFacebook';

describe('<LoginWithFacebook /> mapDispatchToProps', () => {
  it('Should call dispatch when calling onPressButton', () => {
    const dispatch = jest.fn().mockImplementation(() => Promise.resolve());

    return Promise.resolve(mapDispatchToProps(dispatch).onPressButton())
      .then(() => expect(dispatch).toHaveBeenCalled());
  });
});
