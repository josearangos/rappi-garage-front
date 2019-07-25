import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet} from 'react-native'
import CategoriesChooser from './CategoriesChooser'

export default class ProductForm extends Component {

  state = {
    price: '',
    name: '',
    description: '',
    location: '',
    categories: ''
  }

  render() {
    return (
      <View style={styles.productForm}>
        <View>
          <Text style={[styles.label, styles.labelBig]}>Precio</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
          />
        </View>

        <View>
          <Text style={[styles.label, styles.labelBig]}>Detalles</Text>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
          />

          <Text style={styles.label}>Descripción</Text>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={5}
          />
        </View>

        <View>
          <Text style={[styles.label, styles.labelBig]}>Ubicación del artículo</Text>
          <TextInput
            style={styles.input}
          />
        </View>

        <CategoriesChooser />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    padding: 10,
  },
  labelBig: {
    fontSize: 16
  },
  input: {
    padding: 10
  },
  productForm: {
    backgroundColor: '#FFF'
  }
})
