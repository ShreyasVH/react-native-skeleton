import 'react-native-reanimated';
import { StyleSheet, View, Text } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text>
        Hello World
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
