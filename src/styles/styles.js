import { StyleSheet } from "react-native";


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
    }    
});
    


export default styles