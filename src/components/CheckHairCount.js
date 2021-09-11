import React from 'react';
import { Text } from 'react-native';
import { MinContext, MaxContext, IsMinOnContext, IsMaxOnContext } from '../contexts/min';
import styles from '../styles/styles'

function CheckHairCount(prop) {
  const [minTemp, setMinTemp] = React.useContext(MinContext)
  const [maxTemp, setMaxTemp] = React.useContext(MaxContext)
  const [isMinOn, setIsMinOn] = React.useContext(IsMinOnContext)
  const [isMaxOn, setIsMaxOn] = React.useContext(IsMaxOnContext)
  const num = prop.num;
  const textStyle = prop.styles;
  let localStyle = '';
  
  if (isMinOn && isMaxOn) {
    if (num > minTemp && num < maxTemp) {
      localStyle = styles.good
    } else {
      localStyle = styles.bad
    }
  
  } else if (!isMaxOn) { //only minTemp on
    if (num > minTemp) {
      localStyle = styles.good
    } else {
      localStyle = styles.bad
    }
  
  } else if (!isMinOn) { //only maxTemp On
    if (num < maxTemp) {
      localStyle = styles.good
    } else {
      localStyle = styles.bad
    }
  
  }

  return (
    <>
    { isMinOn || isMaxOn ? 
      <Text style={[textStyle, localStyle]}>{num}</Text>
      : 
      <Text>nothing is on</Text>
    }
    </>
  )
}

export default CheckHairCount;
