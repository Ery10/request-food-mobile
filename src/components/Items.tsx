import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { ProductsContext, ProductsContextType } from '../context/productsContext';
import { menuProducts, ItemProps } from '../../mock/menu';

interface ItemsProps {
  searchText: string;
}

export const Items: React.FC<ItemsProps> = ({ searchText }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const { addToCart, removeFromCart, totalQuantity, tableId } = useContext<ProductsContextType>(ProductsContext as any);

  const handleProductSelect = (product: ItemProps) => {
    console.log('Produto atual:', product, 'Mesa selecionada:', tableId);
  };

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Zuumerough: require('../../assets/fonts/fontspring-demo-zuumerough-bold.otf'),
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  // Normaliza a pesquisa removendo espaços extras e convertendo para letras minúsculas
  const normalizedSearchText = searchText.trim().toLowerCase();

  // Aplicar a filtragem somente quando houver um texto de pesquisa
  const filteredProducts = normalizedSearchText
    ? menuProducts.filter(product => {
        return product.items.some(item =>
          item.title.toLowerCase().includes(normalizedSearchText)
        );
      })
    : menuProducts;

  return (
    <View>
      {filteredProducts.length === 0 ? (
        <Text style={styles.noItemsText}>Nenhum item encontrado...</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ width: '100%' }}
          data={filteredProducts}
          renderItem={({ item, index }) => (
            <View style={{ paddingBottom: 80, paddingTop: index === 0 ? 40 : 0 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.h1}>{item.category}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>{totalQuantity}</Text>
                </View>
              </View>
              <FlatList
                data={item.items}
                renderItem={({ item: product }) => (
                  <View style={styles.card}>
                    <Image source={product.image} style={styles.image} />
                    <View style={{ gap: 8 }}>
                      <Text style={styles.title}>{product.title}</Text>
                      <Text style={styles.price}>{`R$${product.price.toFixed(2)}`}</Text>
                      <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => removeFromCart(product)}>
                          <Ionicons name="remove-circle" size={24} color="#F1C92C" />
                        </TouchableOpacity>
                        <Text>{product.quantity}</Text>
                        <TouchableOpacity onPress={() => addToCart(product) }>
                          <Ionicons name="add-circle" size={24} color="#F1C92C" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleProductSelect(product)} style={styles.customButton}>
                          <Text style={styles.buttonText}>{`Adicionar R$${product.newPrice.toFixed(2)}`}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
                keyExtractor={(product) => product.title}
              />
            </View>
          )}
          keyExtractor={(item) => item.category}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Zuumerough',
    color: '#F1C92C',
    fontSize: 28,
  },
  card: {
    width: '100%',
    height: 110,
    backgroundColor: 'white',
    marginTop: 16,
    borderRadius: 8,
    marginBottom: 4,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  image: {
    width: '30%',
    height: 110,
    resizeMode: 'cover',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  customButton: {
    backgroundColor: '#F1C92C',
    borderRadius: 5,
    padding: 10,
    marginLeft: 12,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  noItemsText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    color: 'gray', // Cor opcional, ajuste conforme necessário
  },
});
