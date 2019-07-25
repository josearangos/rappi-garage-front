import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

export default class CategoriesChooser extends Component {
  state = {
    selected: []
  }

  const appendCategory = (categoryId) => {
    this.setState({selected: [...selected, categoryId]})
  }

  render() {
    return (
      <View style={styles.categoryList}>
        <Text
          style={styles.btnCategory}
          onPress={}
        >
            Moda
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnCategory: {
    borderRadius: 9999,
    backgroundColor: '#edf2f7',
    color: '#2d3748',
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5
  },
  categoryList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})
