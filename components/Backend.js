import React from 'react';
import { Platform, TouchableOpacity, TouchableWithoutFeedback, Text, Linking, Alert } from 'react-native';
// import * as SMS from 'expo-sms';
// import GetLocation from 'react-native-get-location';

const handleCallPress = (phoneNumbers) => {
    const phoneUrl = Platform.OS === 'ios' ? `telprompt:${phoneNumbers[0]}` : `tel:${phoneNumbers[0]}`;
    Linking.openURL(phoneUrl);
};

// const handleTextPress = async (phoneNumbers) => {
//     if (Platform.OS === 'ios' && !SMS.isAvailableAsync()) {
//         Alert.alert(
//             'Cannot Send Message',
//             'SMS functionality is not supported on iOS devices or simulators',
//             [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
//         );
//         return;
//     }

//     // Get the device's current location
//     let location = null;
//     try {
//         const locationData = await GetLocation.getCurrentPosition({
//             enableHighAccuracy: true,
//             timeout: 15000,
//         });
//         location = `${locationData.latitude},${locationData.longitude}`;
//     } catch (error) {
//         console.log('Error getting location:', error.message);
//         location = 'unknown location';
//     }

//     // Send the message
//     const messageBody = `HELP! My location is: ${location}`;
//     const { result } = await SMS.sendSMSAsync(phoneNumbers, messageBody);

//     if (result === SMS.SentStatus.DONE) {
//         Alert.alert('Message Sent', 'Your message has been sent!', [
//             { text: 'OK', onPress: () => console.log('OK Pressed') },
//         ]);
//     } else {
//         Alert.alert('Message Failed', 'Your message could not be sent. Please try again later.', [
//             { text: 'OK', onPress: () => console.log('OK Pressed') },
//         ]);
//     }
// };

export { handleCallPress } //handleTextPress };