import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet} from 'react-native'

export default class ProductForm extends Component {
  render() {
    return (
      <View>
        <Text style={styles.label}>Precio</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    padding: 10,
  },
  input: {
    padding: 10
  }
})
