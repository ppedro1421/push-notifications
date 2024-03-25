import { StyleSheet, Text, View } from 'react-native';
import { usePushNotifications } from './src/hooks/usePushNotifications';

export default function App() {
  const { expoPushToken } = usePushNotifications();

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold' }}>Token</Text>
      <Text style={{ fontSize: 12 }}>{expoPushToken?.data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
});
