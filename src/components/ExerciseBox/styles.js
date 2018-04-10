import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    margin: 10,
  },
  name: {
    backgroundColor: '#1e7ca7',
    textAlign: 'center',
    padding: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  lastSession: {
    backgroundColor: '#263A40',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
  },
  lastSessionText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  table: {
    margin: 0,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#cecaca',
    backgroundColor: '#fff',
  },
  th: { // table header
    padding: 8,
  },
  td: { // table data
    padding: 8,
  },
  targetsContainer: {
    alignItems: 'center',
    backgroundColor: '#edf5f0',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#91969880',
  },
  targetsHeading: {
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#2a4032',
    padding: 5,
  },
  targets: {
    fontSize: 15,
    color: '#2a4032',
  },
  btnAddSet: {
    backgroundColor: '#00a442',
    margin: 10,
    padding: 10,
    width: 316,
    alignSelf: 'center',
  },
  btnSave: {
    backgroundColor: '#00a442',
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    width: 316,
    alignSelf: 'center',
  },
  btnCancel: {
    backgroundColor: '#ff6f4d',
    marginTop: 8,
    marginBottom: 10,
    padding: 10,
    width: 316,
    alignSelf: 'center',
  },
  ptNoteContainer: {
    backgroundColor: '#eee',
    padding: 10,

  },
  ptNoteHeading: {
    fontWeight: 'bold',
    color: '#263A40',
  },
  ptNoteText: {
    color: '#263A40',
  },
  formContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#115473',
  },
  formInput: {
    borderColor: '#222',
    backgroundColor: '#fff',
    paddingLeft: 8,
    paddingRight: 8,
  },
  formLabel: {
    color: '#eee',
    marginBottom: 4,
  },
});

export default styles;
