import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, ScrollView, StatusBar, SafeAreaView, Switch} from 'react-native';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MinContext, MaxContext, IsMinOnContext, IsMaxOnContext } from '../contexts/min';
import styles from '../styles/styles'

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

