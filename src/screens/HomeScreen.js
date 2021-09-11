import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { Button, View, Text, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import CheckHairCount from '../components/CheckHairCount';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles'
import { MinContext, MaxContext, IsMinOnContext, IsMaxOnContext } from '../contexts/min';

function makeRandomCount() {
    return Math.floor(Math.random()*100)
}
const STORAGE_KEY = '@save_temp'
const HomeScreen = ({navigation, route}) => {
  
  const [min, setMin] = React.useContext(MinContext)
  const [max, setMax] = React.useContext(MaxContext)
  const [isMinOn, setIsMinOn] = React.useContext(IsMinOnContext)
  const [isMaxOn, setIsMaxOn] = React.useContext(IsMaxOnContext)
  
  useEffect(() => {
    readData()
  }, [])

  const readData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
      if (jsonValue !== null) {
        //parsing turns it from JSON to js object 
        const gottenData = JSON.parse(jsonValue) 
        setMin(gottenData.min);
        setMax(gottenData.max);        
      }
    } catch(e) {
      console.log(e)
      alert("error reading async state data, move on..")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#f00"} />
      <ScrollView>
        <View style={styles.bodyContainer}>
          <View style={[styles.bodyContainer, styles.firstContainer]}>
            <Text style={styles.text}>Hello, I am your cat!</Text>
            <Text style={styles.text}>My current hair count is (million):</Text>
            <View style={styles.numBox}>
              <CheckHairCount styles={styles.numText} num={makeRandomCount()} />  
            </View>
          </View>
          <View style={[styles.bodyContainer, styles.secondContainer]}>
            <View style={[styles.bodyContainer, styles.miniContainer]}>
              <Text style={styles.subText}>Im a turtle</Text>
              <Text style={styles.subText}>I need many less hairs:</Text>
              <View style={[styles.numBox, styles.subNumBox]}>
                <CheckHairCount styles={[styles.subNumText]} num={makeRandomCount()} />  
              </View>
            </View>
            <View style={[styles.bodyContainer, styles.miniContainer]}>
              <Text style={styles.subText}>Im a tribble</Text>
              <Text style={styles.subText}>I need many many hairs:</Text>
              <View style={[styles.numBox, styles.subNumBox]}>
                <CheckHairCount styles={[styles.subNumText]} num={makeRandomCount()} />  
              </View>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <Text>{min}</Text> 
            <Text>{max}</Text>

          </View>
        </View>
        <Button
          title= "Settings"
          onPress={() => {
              navigation.navigate('SettingsScreen');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;


