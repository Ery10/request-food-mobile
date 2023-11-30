import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { InputSearch } from '../../src/components/InputSearch';
import { Items } from '../../src/components/Items';
import Table from '../../src/components/Table';
import useProducts from '../../src/hook/useProducts';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  const { setSelectedTableContext } = useProducts();

  const handleSearchChange = (newSearchText: string) => {
    setSearchText(newSearchText);
  };

  const handleTableSelect = (tableId: number) => {
    setSelectedTableContext(tableId);
    setSelectedTable(tableId);
  };
    
    const handleBackToTables = () => {
      // Limpar a seleção da mesa, voltando para a visualização de mesas
      setSelectedTableContext(null);
      setSelectedTable(null);
    };

  return (
    <SafeAreaView style={styles.container}>
      {selectedTable === null ? (
        <Table onTableSelect={handleTableSelect} />
      ) : (
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackToTables} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#F1C92C" />
          </TouchableOpacity>
          <View style={styles.inputSearchContainer}>
            <InputSearch onSearchChange={handleSearchChange} />
          </View>
        </View>
      )}
      {selectedTable !== null && (
        <View style={styles.content}>
          <Items searchText={searchText} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: 8,
  },
  backButton: {},
  inputSearchContainer: {
    flex: 1,
    marginLeft: 8, // Ajuste a margem conforme necessário
  },
  content: {
    alignItems: 'flex-start',
    width: '85%',
    marginTop: 8,
    flex: 1,
  },
  addButton: {
    backgroundColor: '#F1C92C',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
