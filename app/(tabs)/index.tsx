import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { InputSearch } from '../../src/components/InputSearch';
import { Items } from '../../src/components/Items';
import { ProductsProvider } from '../../src/context/productsContext';

export default function TabOneScreen() {
  return (
      <SafeAreaView style={styles.container}>
        <InputSearch />
        <View style={{ alignItems: 'flex-start', width: '85%',  marginTop: 8 }}>
          <Items />
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