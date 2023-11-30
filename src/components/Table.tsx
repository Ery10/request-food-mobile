import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useProducts from '../hook/useProducts';

const Table = ({ onTableSelect }: { onTableSelect: (tableId: number) => void }) => {
  const [tableData, setTableData] = useState(
    Array.from({ length: 5 }, (_, index) => ({ id: index, name: `Mesa ${index + 1}` }))
  );
  const [editedName, setEditedName] = useState('');
  const { tableId, setTableId, setSelectedTableContext, selectedTable, setSelectedTable} = useProducts();

  const handleTableSelect = (tableId: number) => {
    if (tableId === selectedTable) {
      setSelectedTableContext(null);
      setTableId(null);
    } else {
      setSelectedTableContext(tableId);
      setTableId(tableId);
    }

    onTableSelect(tableId); // Chama a função externa após selecionar a mesa
    console.log("ID da mesa selecionada:", tableId);
  };

  const addTable = () => {
    setTableData((prevData) => [
      ...prevData,
      { id: prevData.length, name: `Mesa ${prevData.length + 1}` },
    ]);
  };

  const handleEdit = (tableId: number) => {
    setSelectedTable(tableId);
    setEditedName(tableData.find((table) => table.id === tableId)?.name || '');
  };

  const saveEditedName = () => {
    setTableData((prevData) =>
      prevData.map((table) =>
        table.id === selectedTable ? { ...table, name: editedName } : table
      )
    );
    setSelectedTable(null);
    setEditedName('');
  };

  const handleDelete = (tableId: number) => {
    const tableName = tableData.find((table) => table.id === tableId)?.name || `Mesa ${tableId + 1}`;
  
    Alert.alert(
      'Excluir Mesa',
      `Tem certeza que deseja excluir a ${tableName}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        { text: 'Excluir', onPress: () => confirmDelete(tableId) },
      ],
      { cancelable: false }
    );
  };

  const confirmDelete = (tableId: number) => {
    setTableData((prevData) => prevData.filter((table) => table.id !== tableId));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        {tableData.map((table) => (
          <TouchableOpacity
            key={table.id}
            onPress={() => {
              handleTableSelect(table.id);
              onTableSelect(table.id); // Adiciona essa linha para chamar a função externa
            }}
          >
            <View style={styles.individualTable}>
              {selectedTable === table.id ? (
                <>
                  <TextInput
                    style={styles.editInput}
                    value={editedName}
                    onChangeText={(text) => setEditedName(text)}
                  />
                  <TouchableOpacity onPress={saveEditedName}>
                    <Ionicons name="checkmark" size={20} color="#000" style={styles.icon} />
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.tableText}>{table.name}</Text>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => handleEdit(table.id)}>
                      <Ionicons name="create" size={20} color="#000" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDelete(table.id)}>
                      <Ionicons name="trash" size={20} color="#000" style={styles.icon} />
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={addTable}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 8,
    width: '85%',
  },
  individualTable: {
    backgroundColor: '#F1C92C',
    padding: 16,
    margin: 16,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tableText: {
    fontSize: 16,
    textAlign: 'center',
  },
  editInput: {
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 5,
    padding: 8,
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 12,
  },
  addButton: {
    backgroundColor: '#F1C92C',
    width: 50, // Ajuste a largura conforme necessário
    height: 50, // Defina a altura igual à largura para fazer um quadrado perfeito
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 24
  },

  addButtonText: {
    color: '#000',
    fontSize: 24, // Ajuste o tamanho do texto conforme necessário
  },
});

export default Table;
