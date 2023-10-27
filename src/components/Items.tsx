import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

import { bebidas, crepes, salgados } from '../../data/itemData'

export const Items = React.memo(() => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Zuumerough: require("../../assets/fonts/fontspring-demo-zuumerough-bold.otf"),
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ width: "100%" }}
      data={[
        { title: "Crepes", data: crepes },
        { title: "Salgados", data: salgados },
        { title: "Bebidas", data: bebidas },
      ]}
      renderItem={({ item, index }) => (
        <View style={{ paddingBottom: index === 2 ? 100 : 0 }}>
          <Text style={styles.h1}>{item.title}</Text>
          <FlatList
            data={item.data}
            renderItem={({ item: product }) => (
              <View style={styles.card}>
                <Image source={product.image} style={styles.image} />
                <View style={{ gap: 8 }}>
                  <Text style={styles.title}>{product.title}</Text>
                  <Text style={styles.price}>R${product.price.toFixed(2)}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity>
                      <Ionicons name="remove-circle" size={24} color="#F1C92C" />
                    </TouchableOpacity>
                    <Text>{product.quantity}</Text>
                    <TouchableOpacity>
                      <Ionicons name="add-circle" size={24} color="#F1C92C" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.customButton}
                    >
                      <Text style={styles.buttonText}>
                        Adicionar R${product.price.toFixed(2)}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(product) => product.title}
          />
        </View>
      )}
      keyExtractor={(item) => item.title}
    />
  );
});

const styles = StyleSheet.create({
  h1: {
    fontFamily: "Zuumerough",
    color: "#F1C92C",
    fontSize: 28,
    marginTop: 48,
  },
  card: {
    width: "100%",
    height: 110,
    backgroundColor: "white",
    marginTop: 16,
    borderRadius: 8,
    marginBottom: 4,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  image: {
    width: "30%",
    height: 110,
    resizeMode: "cover",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
  },
  customButton: {
    backgroundColor: "#F1C92C",
    borderRadius: 5,
    padding: 10,
    marginLeft: 12,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 12,
  },
});
