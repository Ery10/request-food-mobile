import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProductsContext, ProductsContextType } from '../../src/context/productsContext';

const Request = ({ selectedTable }: { selectedTable: number | null }) => {
  // Use o contexto para obter os valores necessários
  const { cart, totalQuantity, setSelectedTable, selectedTable: contextSelectedTable } = useContext<ProductsContextType>(ProductsContext as any);

  // Atualiza a mesa selecionada no contexto ao montar o componente
  useEffect(() => {
    setSelectedTable(selectedTable);
  }, [selectedTable, setSelectedTable]);

  // Exibe a mesa selecionada ou uma mensagem se nenhuma mesa estiver selecionada
  const displaySelectedTable = selectedTable
    ? `Mesa Selecionada: ${selectedTable}`
    : "Nenhuma mesa selecionada";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displaySelectedTable}</Text>

      <Text style={styles.text}>Itens Adicionados:</Text>
      {cart.map((item) => (
        <Text key={item.title}>{`${item.title} - ${item.quantity}`}</Text>
      ))}

      <Text style={styles.text}>Total de Itens na Mesa:</Text>
      <Text style={styles.text}>{totalQuantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
    color: '#fff'
  },
});

export default Request;
