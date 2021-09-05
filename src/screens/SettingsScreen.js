import 'react-native-gesture-handler';
import React, { useState, useEffect  } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, StatusBar, SafeAreaView, Switch} from 'react-native';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MinProvider, useMinContext } from '../contexts/min';

const STORAGE_KEY = '@save_temp'

const SettingsScreen = ({navigation, route}) => {
  // const { min, max, minOn, maxOn } = route.params
  
  // const minContext = React.useContext(MinContext)
  // const {value} = useMinContext();
  const { min, setMin }= value //supposed to be drawing from context

  const [minTemp, setMinTemp] = useState(min.toString());
  const [maxTemp, setMaxTemp] = useState(max.toString());
  const [isMinEnabled, setIsMinEnabled] = useState(minOn);
  const [isMaxEnabled, setIsMaxEnabled] = useState(maxOn);

  const toggleMinSwitch = () => setIsMinEnabled(previousState => !previousState);
  const toggleMaxSwitch = () => setIsMaxEnabled(previousState => !previousState);


  useEffect(() => {
    readData()
  }, [])

  const readData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
      if (jsonValue !== null) {
        //parsing turns it from JSON to js object 
        const gottenData = JSON.parse(jsonValue) 
        setMinTemp(gottenData.min);
        setMaxTemp(gottenData.max);
      // setMinContext(1)
      alert(`min Context is ${value}`)
      }
    } catch(e) {
      console.log(e)
      alert("error reading async state data, move on..")
    }
  }

  const saveData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
      // setMinTemp(value.min)
      // setMaxTemp(value.max)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const onPressButton = (min, max, isMinEnabled, isMaxEnabled) => {
    saveData({"min":min, "max":max}),
    // setTemp('') - dont know why set back to empty string?
    navigation.navigate('HomeScreen', {min:min, max:max, minOn:isMinEnabled, maxOn:isMaxEnabled})
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
            thumbColor={isMinEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleMinSwitch}
            value={isMinEnabled}
          />
          <Input
            label="MIN Temp"
            value={minTemp}
            disabled={!isMinEnabled}
            placeholder={minTemp}
            onChangeText={(value) => setMinTemp(value)}
          />
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isMaxEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleMaxSwitch}
            value={isMaxEnabled}
          />
           <Input
            label="MAX Temp"
            value={maxTemp}
            disabled={!isMaxEnabled}
            placeholder={maxTemp}
            onChangeText={(value) => setMaxTemp(value)}
          />
          <View style={styles.secondContainer}>
            <Button title="SAVE"
              onPress={()=> {
                onPressButton(minTemp, maxTemp, isMinEnabled, isMaxEnabled)
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