import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function InputSearch() {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleClearText = () => {
    setText('');
    textInputRef.current?.clear();
  };

  return (
    <TouchableOpacity
      style={[
        styles.inputContainer,
        isFocused && styles.inputContainerFocused,
      ]}
      onPress={() => textInputRef.current?.focus()}
    >
      <Ionicons name="search" size={16} style={styles.icon} />
      <TextInput
        ref={textInputRef}
        placeholder='Buscar pedido'
        style={styles.input}
        onChangeText={handleTextChange}
        value={text}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {text.length > 0 && (
        <TouchableOpacity onPress={handleClearText}>
          <MaterialIcons name="close" size={16} style={styles.icon} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    width: '85%',
    borderRadius: 8,
    marginTop: 16,
    borderColor: '#f3f3f3',
    borderWidth: 1,
  },
  inputContainerFocused: {
    borderColor: '#F1C92C',
  },
  input: {
    flex: 1,
    height: 40,
  },
  icon: {
    margin: 16,
  },
});
