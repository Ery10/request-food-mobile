import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { InputSearch } from '../../src/components/InputSearch';
import { Items } from '../../src/components/Items';

export default function TabOneScreen() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (newSearchText: string) => {
    setSearchText(newSearchText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <InputSearch onSearchChange={handleSearchChange} />
      <View style={{ alignItems: 'flex-start', width: '85%', marginTop: 8 }}>
        <Items searchText={searchText} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flex: 1,
    alignItems: 'center',
  },
});
