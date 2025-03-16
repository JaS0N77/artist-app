import { ScrollView, Image, StyleSheet } from 'react-native';

export default function GalleryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('@/assets/images/mona_lisa.jpg')} style={styles.artwork} />
      <Image source={require('@/assets/images/last_supper.jpg')} style={styles.artwork} />
      <Image source={require('@/assets/images/vitruvian_man.jpg')} style={styles.artwork} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20 },
  artwork: { width: 300, height: 300, marginBottom: 20, resizeMode: 'contain' },
});
