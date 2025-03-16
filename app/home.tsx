import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/artist.jpg')} style={styles.image} />
      <Text style={styles.title}>Leonardo da Vinci</Text>
      <Text style={styles.description}>
        Leonardo da Vinci was an Italian polymath known for his paintings, inventions, and scientific studies.
      </Text>
      <Button title="View Gallery" onPress={() => router.push('/gallery')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 200, height: 200, borderRadius: 100, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});
