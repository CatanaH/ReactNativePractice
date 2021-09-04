import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import CheckHairCount from '../components/CheckHairCount';

function makeRandomCount() {
    return Math.floor(Math.random()*100)
}

const HomeScreen = ({navigation, route}) => {
  
  //is this really the best way to hold data? does it need state, and can it just be global? this page only needs to read, not change anything
  //but bc page is rendered first it has to be loaded with default data, or it errors
  const [ hairMinQualifier, setHairMinQualifier ] = useState(25); 
  const [ hairMaxQualifier, setHairMaxQualifier ] = useState(100);
  const [ isMinEnabled, setIsMinEnabled ] = useState(true); 
  const [ isMaxEnabled, setIsMaxEnabled ] = useState(false); 
  

  React.useEffect(()=>{
    if (route.params){
      const { min=32, max=100, minOn=true, maxOn=false } = route.params
      setHairMinQualifier(min)
      setHairMaxQualifier(max)
      setIsMinEnabled(minOn)
      setIsMaxEnabled(maxOn)
    }}, [route.params]
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#f00"} />
      <ScrollView>
        <View style={styles.bodyContainer}>
          <View style={[styles.bodyContainer, styles.firstContainer]}>
            <Text style={styles.text}>Hello, I am your cat!</Text>
            <Text style={styles.text}>My current hair count is (million):</Text>
            <View style={styles.numBox}>
              <CheckHairCount min={hairMinQualifier} max={hairMaxQualifier} minOn={isMinEnabled} maxOn={isMaxEnabled} styles={styles.numText} num={makeRandomCount()} />  
            </View>
          </View>
          <View style={[styles.bodyContainer, styles.secondContainer]}>
            <View style={[styles.bodyContainer, styles.miniContainer]}>
              <Text style={styles.subText}>Im a turtle</Text>
              <Text style={styles.subText}>I need many less hairs:</Text>
              <View style={[styles.numBox, styles.subNumBox]}>
                <CheckHairCount min={hairMinQualifier} max={hairMaxQualifier} minOn={isMinEnabled} maxOn={isMaxEnabled} styles={[styles.subNumText]} num={makeRandomCount()} />  
              </View>
            </View>
            <View style={[styles.bodyContainer, styles.miniContainer]}>
              <Text style={styles.subText}>Im a tribble</Text>
              <Text style={styles.subText}>I need many many hairs:</Text>
              <View style={[styles.numBox, styles.subNumBox]}>
                <CheckHairCount min={hairMinQualifier} max={hairMaxQualifier} minOn={isMinEnabled} maxOn={isMaxEnabled} styles={[styles.subNumText]} num={makeRandomCount()} />  
              </View>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <Text>{hairMinQualifier}</Text>
            <Text>{hairMaxQualifier}</Text>

          </View>
        </View>
        <Button
          title= "Settings"
          onPress={() => {
              navigation.navigate('SettingsScreen', {min:hairMinQualifier, max:hairMaxQualifier, minOn:isMinEnabled, maxOn:isMaxEnabled});
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

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
    


