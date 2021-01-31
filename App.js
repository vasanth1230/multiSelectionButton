import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-paper';

const Data = [
  {
    id: 1,
    first_name: 'Apple',
  },
  {
    id: 2,
    first_name: 'Mango',
  },
  {
    id: 3,
    first_name: 'Pappaya',
  },
  {
    id: 4,
    first_name: 'Orange',
  },
  {
    id: 5,
    first_name: 'Banana',
  },
  {
    id: 6,
    first_name: 'Kiwi',
  },


];

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      renderData: Data, // decelaring the fruits list data
      selectedFruits: []

    }
  }

  // function will call when Button clicked

  onPressHandler(id) {
    let renderData = [...this.state.renderData];           // making copy of renderData data locally
    let selectedFruits = [...this.state.selectedFruits];   // making copy of selectedFruits data locally

    for (let data of renderData) {
      if (data.id == id) {

        data.selected = (data.selected == null) ? true : !data.selected; // making button selcted or not using boolen

        if (data.selected) {
          selectedFruits.push(data.first_name);  // push selected fruit value to array
        } else {
          selectedFruits = this.arrayRemove(this.state.selectedFruits, data.first_name)  // remove unselected fruit from array
        }
        break;
      }
    }

    this.setState({ renderData });  // updating current selected button data to state
    this.setState({ selectedFruits });  // updating current selected Fruits data to state
  }


  // function which remove value from array and return  
  arrayRemove(arr, value) {

    return arr.filter(function (geeks) {
      return geeks != value;

    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <Text style={styles.titleStyle}>Select fruits</Text>
          <View style={styles.FlatListContainer}>
            <FlatList showsHorizontalScrollIndicator={false}
              data={this.state.renderData} // set render data in flatlist

              keyExtractor={item => item.id.toString()} // keyExtractor convert INT  'item.id' value to string 
              renderItem={({ item }) =>

                <Button mode="outlined"
                  color={item.selected == true ? '#ffffff' : '#e1601f'} // color of button will change according to selection

                  style={
                    item.selected == true
                      // style when button is selected
                      ? {
                        margin: 5, borderRadius: 2,backgroundColor: '#e1601f',
                      }
                      // style when button is unSelected
                      : {
                        margin: 5, borderRadius: 2, backgroundColor: '#ffffff',
                      }
                  }
                  // onPress will call the function when button is clicked
                  onPress={() => this.onPressHandler(item.id)} >{item.first_name}
                </Button>

              } />
          </View>
          <View>
          <Text >{this.state.selectedFruits}  </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row"
  },
  titleStyle: {
    margin: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#161616",
    letterSpacing: 0.36,
    textAlign: "center",
    alignSelf: "stretch",
  },
  FlatListContainer: {
    width:"100%",
    height: 500,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});