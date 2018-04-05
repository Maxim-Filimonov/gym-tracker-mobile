import { mapDispatchToProps } from '../../containers/ListOfPrograms';

describe('<ListOfPrograms /> mapDispatchToProps', () => {
  it('redirects to the exercise page after dispatching selectProgram', () => {
    const dispatch = jest.fn();
    const ownProps = {
      history: {
        push: jest.fn(),
      },
    };
    const programId = '123456';
    const programName = 'test program name';

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve());

    mapDispatchToProps(dispatch, ownProps).onSelectProgram(programId, programName)
      .then(() => expect(ownProps.history.push).toHaveBeenCalled());
  });
});
