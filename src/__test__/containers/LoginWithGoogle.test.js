import { mapDispatchToProps } from '../../containers/LoginWithGoogle';

describe('<LoginWithGoogle /> mapDispatchToProps', () => {
  it('Should call dispatch when calling onPressButton', () => {
    const dispatch = jest.fn().mockImplementation(() => Promise.resolve());

    return Promise.resolve(mapDispatchToProps(dispatch).onPressButton())
      .then(() => expect(dispatch).toHaveBeenCalled());
  });
});
