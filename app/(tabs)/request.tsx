import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProductsContext } from '../../src/context/productsContext';

const TabTwoScreen = () => {
  const { selectedProduct } = useContext(ProductsContext) || { selectedProduct: null };

  return (
    <View style={styles.container}>
      <Text>Detalhes do produto:</Text>
      {selectedProduct && (
        <>
          <Text>{selectedProduct.title}</Text>
          <Text>{`Preço: R$${selectedProduct.newPrice.toFixed(2)}`}</Text>
        </>
      )}
    </View>
  );
};

export default TabTwoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
