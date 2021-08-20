import React from 'react';
import { Text, StyleSheet } from 'react-native';


function CheckHairCount(prop) {
  const num = prop.num;
  const textStyle = prop.styles;
  const { min=32, max=100, minOn=true, maxOn=false } = prop;
  let localStyle = '';
  
  if (minOn && maxOn) {
    if (num > min && num < max) {
      localStyle = styles.good
    } else {
      localStyle = styles.bad
    }
  
  } else if (!maxOn) { //only min on
    if (num > min) {
      localStyle = styles.good
    } else {
      localStyle = styles.bad
    }
  
  } else if (!minOn) { //only max On
    if (num < max) {
      localStyle = styles.good
    } else {
      localStyle = styles.bad
    }
  
  }

  return (
    <>
    { !minOn || !maxOn ? 
      <Text styles={[textStyle, localStyle]}>{num}</Text>
      : 
      <Text>nothing is on</Text>
    }
    </>
  )
}

export default CheckHairCount;

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
    


