import { Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#06c', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Yel.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.contentContainer}>
        <ThemedText type="title" style={styles.title}>¡Bienvenido!</ThemedText>
        <ThemedText style={styles.paragraph}>
        Bienvenido a nuestro innovador proyecto de carrito a control remoto. Este carrito puede ser controlado mediante ondas cerebrales con una diadema o con el teléfono. Nuestro objetivo es proporcionar una herramienta útil y accesible para ayudar a personas con discapacidades motoras. Esperamos que encuentres este proyecto inspirador y útil. ¡Gracias por unirte a nosotros en esta emocionante aventura tecnológica!
        </ThemedText>
        <Image
          source={require('@/assets/images/equipo.jpg')}
          style={styles.photo}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  photo: {
    width: 250,
    height: 250,
  },
  reactLogo: {
    bottom: 0,
    left: 50,
    position: 'absolute',
    width: 250,
    height: 150,
    marginBottom: 10,
    resizeMode: 'contain',
    shadowColor: '#033949',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
});
