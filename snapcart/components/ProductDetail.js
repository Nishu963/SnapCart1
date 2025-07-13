import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';

const allProducts = [
  {
    id: '1',
    name: 'React Native Hoodie',
    price: '$39',
    description: 'Cozy and stylish for dev days.',
    image: require('../assets/ReactHoddie.png'),
  },
  {
    id: '2',
    name: 'TypeScript T-Shirt',
    price: '$29',
    description: 'Strictly typed fashion.',
    image: require('../assets/Typescript.png'),
  },
  {
    id: '3',
    name: 'JS Mug',
    price: '$19',
    description: 'For debugging mornings.',
    image: require('../assets/JsMug.png'),
  },
  {
    id: '4',
    name: 'Expo Cap',
    price: '$25',
    description: 'Keep your head in the clouds.',
    image: require('../assets/ExpoCap.png'),
  },
  {
    id: '5',
    name: 'GraphQL Socks',
    price: '$17',
    description: 'Stylish and schema-friendly.',
    image: require('../assets/Socks.png'),
  },
  {
    id: '6',
    name: 'Next.js Tote Bag',
    price: '$22',
    description: 'Carry your dev dreams.',
    image: require('../assets/Bag.png'),
  },
];

export default function ProductDetail({ route }) {
  const { product } = route.params;

  const related = allProducts
    .filter((item) => item.id !== product.id)
    .slice(0, 2);

  const handleAddToCart = () => {
    Alert.alert('Added to Cart', `${product.name} has been added to your cart.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={product.image} style={styles.banner} />

      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.suggestions}>
        <Text style={styles.suggestionsTitle}>You May Also Like</Text>
        <FlatList
          data={related}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.suggestionCard}>
              <Image source={item.image} style={styles.suggestionImage} />
              <Text style={styles.suggestionName}>{item.name}</Text>
              <Text style={styles.suggestionPrice}>{item.price}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 40,
  },
  banner: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
  },
  details: {
    padding: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  price: {
    fontSize: 20,
    color: '#009688',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#009688',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  suggestions: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  suggestionCard: {
    backgroundColor: '#fdfdfd',
    borderRadius: 12,
    elevation: 2,
    marginRight: 16,
    paddingBottom: 10,
    alignItems: 'center',
    width: 140,
  },
  suggestionImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  suggestionName: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
    color: '#222',
    textAlign: 'center',
  },
  suggestionPrice: {
    fontSize: 12,
    color: '#009688',
    marginTop: 2,
  },
});
