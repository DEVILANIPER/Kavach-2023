import { Platform, TouchableOpacity, TouchableWithoutFeedback, Text, Linking, Alert } from 'react-native';
import GetLocation from 'react-native-get-location';

const handleCallPress = (phoneNumbers) => {
    const phoneUrl = Platform.OS === 'ios' ? `telprompt:${phoneNumbers[0]}` : `tel:${phoneNumbers[0]}`;
    Linking.openURL(phoneUrl);
};

const handleTextPress = async (phoneNumbers) => {
    if (Platform.OS === 'ios' && !Linking.canOpenURL('sms:')) {
        Alert.alert(
            'Cannot Send Message',
            'SMS functionality is not supported on iOS devices or simulators',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
        return;
    }

    // Get the device's current location
    let location = null;
    try {
        const locationData = await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        });
        location = `${locationData.latitude},${locationData.longitude}`;
    } catch (error) {
        console.log('Error getting location:', error.message);
        location = 'unknown location';
    }

    // Send the message
    const messageBody = `HELP! I am in danger! Please send help! My location is: ${location}`;
    const smsUrl = `sms:${phoneNumbers.join(';')}?body=${messageBody}`;
    Linking.openURL(smsUrl);
};


export { handleCallPress, handleTextPress };