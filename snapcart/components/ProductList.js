import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const products = [
  {
    id: '1',
    name: 'React Native Hoodie',
    description: 'Cozy and stylish for dev days.',
    image: require('../assets/ReactHoddie.png'),
    price: '$39',
  },
  {
    id: '2',
    name: 'TypeScript T-Shirt',
    description: 'Strictly typed fashion.',
    image: require('../assets/Typescript.png'),
    price: '$29',
  },
  {
    id: '3',
    name: 'JS Mug',
    description: 'For debugging mornings.',
    image: require('../assets/JsMug.png'),
    price: '$19',
  },
  {
    id: '4',
    name: 'Expo Cap',
    description: 'Keep your head in the clouds.',
    image: require('../assets/ExpoCap.png'),
    price: '$25',
  },
  {
    id: '5',
    name: 'GraphQL Socks',
    description: 'Stylish and schema-friendly.',
    image: require('../assets/Socks.png'),
    price: '$17',
  },
  {
    id: '6',
    name: 'Next.js Tote Bag',
    description: 'Carry your dev dreams.',
    image: require('../assets/Bag.png'),
    price: '$22',
  },
];

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 48) / 2;

export default function ProductList({ navigation }) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { width: cardWidth }]}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fdfdfd',
    borderRadius: 14,
    elevation: 3,
    overflow: 'hidden',
    alignItems: 'center',
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
    color: '#222',
  },
  price: {
    fontSize: 14,
    color: '#009688',
    marginBottom: 6,
  },
});
