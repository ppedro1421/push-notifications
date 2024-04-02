import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { usePushNotifications } from './src/hooks/usePushNotifications';

export default function App() {
  const { expoPushToken } = usePushNotifications();

  const copyToClipboard = async () => {
    if (expoPushToken?.data) {
      await Clipboard.setStringAsync(expoPushToken?.data);
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>

      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Push Notifications</Text>
        <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
          <Text style={styles.buttonText}>Get Token</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A751C5',
  },
  banner: {
    flex: 1,
    padding: '5%',
  },
  card: {
    flex: 2,
    justifyContent: 'space-between',
    padding: '10%',
    backgroundColor: '#FAFAFA',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#888888',
  },
  button: {
    padding: '5%',
    backgroundColor: '#A751C5',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  }
});
