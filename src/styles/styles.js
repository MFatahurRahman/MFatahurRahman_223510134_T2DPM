import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  banner: {
    marginBottom: 20,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#e8f5e9',
    alignItems: 'center',
    padding: 10,
  },
  bannerImage: {
    width: '100%',
    height: 300,
    borderRadius: 5,
  },
  bannerText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    elevation: 2,
  },
  menuIcon: {
    fontSize: 30,
    marginBottom: 5,
  },
  menuText: {
    fontSize: 14,
    textAlign: 'center',
  },
  articleCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
  },
  articleImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  articleContent: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  articleDescription: {
    fontSize: 14,
    color: '#757575',
    marginTop: 5,
  },
});

export default styles;
