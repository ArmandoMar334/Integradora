
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { movement } from '../../scripts/moveCar';
//changes

export default function ControlScreen() {

  const [isRunning, setIsRunning] = useState(false);

  const handlePress = () => {
    const newRunningState = !isRunning;
    setIsRunning(newRunningState);
    console.log('Button state:', newRunningState ? 'OFF' : 'ON');
  };
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [tokenMessage, setTokenMessage] = useState<string | null>(null);

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Panel de Control</Text>
        <View style={styles.buttonRowUpDown}>
          <FontAwesome.Button
            name="arrow-up"
            backgroundColor="#3b5998"
            borderRadius={55}
            size={40}
            onLongPress={() => movement(true, "UP")}
            onPressOut={() => movement(false, "UP")}
            style={styles.button}
          >

          </FontAwesome.Button>
        </View>
        <View style={styles.buttonRow}>
          <FontAwesome.Button
            name="arrow-left"
            backgroundColor="#3b5998"
            onLongPress={() => movement(true, "LEFT")}
            onPressOut={() => movement(false, "LEFT")}

            style={styles.button}
          >

          </FontAwesome.Button>

          <FontAwesome.Button
            name={isRunning ? "play" : "stop"}
            backgroundColor={isRunning ? "#5cb85c" : "#d9534f"}
            size={20}
            onPress={handlePress}
            style={styles.button}
          >
            {isRunning ? "ON" : "OFF"}
          </FontAwesome.Button>

          <FontAwesome.Button
            name="arrow-right"
            backgroundColor="#3b5998"
            onLongPress={() => movement(true, "RIGHT")}
            onPressOut={() => movement(false, "RIGHT")}
            style={styles.button}
          >

          </FontAwesome.Button>
        </View>
        <View style={styles.buttonRow}>
          <FontAwesome.Button
            name="arrow-down"
            backgroundColor="#3b5998"
            borderRadius={55}
            size={40}
            onLongPress={() => movement(true, "DOWN")}
            onPressOut={() => movement(false, "DOWN")}
            style={styles.button}
          >

          </FontAwesome.Button>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    header: {
      fontSize: 34,
      textAlign: 'center',
      marginVertical: 20,
      color: '#042654',
      fontWeight: 'bold',
    },
    buttonRowUpDown: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      marginHorizontal: 15,
      marginBottom: 10,
    },
    buttonRow: {
      flexDirection: 'row',
      marginVertical: 15,
      marginHorizontal: 15,
      marginBottom: 15,
      justifyContent: 'space-around',
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: '#F8F9FA',
      borderRadius: 10,


    },
    button: {
      paddingHorizontal: 45,
      marginHorizontal: 10,
      width: 85,
      height: 95,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      padding: 10,
      marginRight: -5,

    },
});
