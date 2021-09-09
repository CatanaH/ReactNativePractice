import 'react-native-gesture-handler';
import React, { useState, useEffect  } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, StatusBar, SafeAreaView, Switch} from 'react-native';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MinContext, MaxContext, IsMinOnContext, IsMaxOnContext } from '../contexts/min';

const STORAGE_KEY = '@save_temp'

const SettingsScreen = ({navigation, route}) => {

  const [min, setMin] = React.useContext(MinContext)
  const [max, setMax] = React.useContext(MaxContext)
  const [isMinOn, setIsMinOn] = React.useContext(IsMinOnContext)
  const [isMaxOn, setIsMaxOn] = React.useContext(IsMaxOnContext)

  const toggleMinSwitch = () => setIsMinOn(previousState => !previousState);
  const toggleMaxSwitch = () => setIsMaxOn(previousState => !previousState);


  const saveData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
      setMin(value.min)
      setMax(value.max)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const onPressButton = () => {
    saveData({"min":min, "max":max, "isMinOn":isMinOn, "isMaxOn":isMaxOn}),
    navigation.navigate('HomeScreen')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#f00"} />
      <ScrollView>
        <View style={styles.bodyContainer}>
          <Input
            label="Location" // need logic here to actually do somehting with input
          />
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isMinOn ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleMinSwitch}
            value={isMinOn}
          />
          <Input
            label="MIN Temp"
            value={min.toString()}
            disabled={!isMinOn}
            placeholder={min.toString()}
            onChangeText={(value) => setMin(value)}
          />
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isMaxOn ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleMaxSwitch}
            value={isMaxOn}
          />
           <Input
            label="MAX Temp"
            value={max.toString()}
            disabled={!isMaxOn}
            placeholder={max.toString()}
            onChangeText={(value) => setMax(value)}
          />
          <View style={styles.secondContainer}>
            <Button title="SAVE"
              onPress={()=> {
                onPressButton()
              }}
            />
          </View>

        </View> 
      </ScrollView>
    </SafeAreaView>
  );
}
export default SettingsScreen;


const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1, //tell it how much space to take, like flex-grow
    backgroundColor: '#abd1ff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  miniContainer: {
    flex: 1, //tell it how much space to take, like flex-grow
    backgroundColor: '#abd1ff',
  },
  firstContainer: {
    flex: 3, //tell it how much space to take, like flex-grow
    borderColor: "black",
  },
  secondContainer: {
    flex: 2, //tell it how much space to take, like flex-grow
    borderColor: "#abd1ff",
    flexDirection: "row",
    paddingTop: 20,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#abd1ff',
  
  },
  numBox: {
    borderStyle: "solid",
    borderColor: "darkgray",
    borderWidth: 6,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center"
  },
  subNumBox: {
    // width: "8rem",
    // height: "8rem",
  },
  text: {
    fontSize: 30,
  },
  subText: {
    fontSize: 25,
  },
  numText: {
    fontSize: 80,
  },
  subNumText: {
    fontSize: 50,
  },
  good: {
    backgroundColor: '#0f0',
  },
  bad: {
    backgroundColor: '#f00',
  },
  
  });