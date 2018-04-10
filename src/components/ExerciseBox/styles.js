import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: 'darkgrey',
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
    backgroundColor: '#eee',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#91969880',
  },
  targetsHeading: {
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#263A40',
  },
  targets: {
    fontSize: 15,
    color: '#263A40',
  },
  btnAddSet: {
    backgroundColor: '#00a442',
    margin: 10,
    padding: 8,
    width: '100%',
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
});

export default styles;
