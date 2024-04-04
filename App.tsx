import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Clipboard from 'expo-clipboard';
import Animated, { Easing, ReduceMotion, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { usePushNotifications } from './src/hooks/usePushNotifications';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const { expoPushToken } = usePushNotifications();

  const translateY = useSharedValue(600);

  const reanimatedCard = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  }, []);

  useEffect(() => {
    translateY.value = withTiming(0, { duration: 1000, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System })
  }, []);

  const copyToClipboard = async () => {
    if (expoPushToken?.data) {
      await Clipboard.setStringAsync(expoPushToken?.data);
    };
  };

  return (
    <LinearGradient style={styles.container} colors={['#663388', '#443388']}>
      <StatusBar style='light' />
      <View style={styles.banner}>

      </View>
      <Animated.View style={[styles.card, reanimatedCard]}>
        <Text style={styles.title}>Push Notifications</Text>
        <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
          <Text style={styles.buttonText}>Copy Token</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#666666',
  },
  button: {
    padding: '5%',
    backgroundColor: '#663388',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  }
});
