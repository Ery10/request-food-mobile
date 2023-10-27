import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  // // Estado para armazenar as mesas e seus pedidos
  // const [mesas, setMesas] = useState([
  //   {
  //     numeroMesa: 1,
  //     pedidos: [],
  //   },
  //   {
  //     numeroMesa: 2,
  //     pedidos: [],
  //   },
  //   // Adicione mais mesas conforme necessário
  // ]);

  // // Função para adicionar um pedido a uma mesa
  // const adicionarPedido = (numeroMesa, novoPedido) => {
  //   const novasMesas = [...mesas];
  //   const mesaIndex = novasMesas.findIndex((m) => m.numeroMesa === numeroMesa);
  //   if (mesaIndex !== -1) {
  //     novasMesas[mesaIndex].pedidos.push(novoPedido);
  //     setMesas(novasMesas);
  //   }
  // };

  // // Função para remover um pedido de uma mesa
  // const removerPedido = (numeroMesa, indicePedido) => {
  //   const novasMesas = [...mesas];
  //   const mesaIndex = novasMesas.findIndex((m) => m.numeroMesa === numeroMesa);
  //   if (mesaIndex !== -1) {
  //     novasMesas[mesaIndex].pedidos.splice(indicePedido, 1);
  //     setMesas(novasMesas);
  //   }
  // };

  // return (
  //   <ScrollView>
  //     {mesas.map((mesa) => (
  //       <View key={mesa.numeroMesa} style={{ margin: 10 }}>
  //         <Text>Mesa {mesa.numeroMesa}</Text>
  //         {mesa.pedidos.map((pedido, index) => (
  //           <View key={index} style={{ backgroundColor: 'lightgray', padding: 5 }}>
  //             <Text>Item: {pedido.item}</Text>
  //             <Text>Quantidade: {pedido.quantidade}</Text>
  //             <Button
  //               title="Remover Pedido"
  //               onPress={() => removerPedido(mesa.numeroMesa, index)}
  //             />
  //           </View>
  //         ))}
  //         <Button
  //           title="Adicionar Pedido"
  //           onPress={() =>
  //             adicionarPedido(mesa.numeroMesa, {
  //               item: 'Novo Item',
  //               quantidade: 1,
  //             })
  //           }
  //         />
  //       </View>
  //     ))}
  //   </ScrollView>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
