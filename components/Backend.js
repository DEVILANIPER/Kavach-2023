import { Platform, TouchableOpacity, TouchableWithoutFeedback, Text, Linking, Alert } from 'react-native';
import GetLocation from 'react-native-get-location';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

const handleCallPress = (phoneNumbers) => {
  RNImmediatePhoneCall.immediatePhoneCall(phoneNumbers[0]);
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
    const { latitude, longitude } = locationData;
    const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2`;
    const nominatimResponse = await fetch(nominatimUrl);
    const nominatimData = await nominatimResponse.json();
    const district = nominatimData.address?.state_district || nominatimData.address?.village;
    const state = nominatimData.address?.state || nominatimData.address?.county;
    location = `${latitude},${longitude}, district: ${district}, state: ${state}`;
  } catch (error) {
    console.log('Error getting location:', error.message);
    location = 'unknown location';
  }

  // Send the message
  const messageBody = `HELP! I am in danger! My current location is: ${location}`;
  const smsUrl = Platform.select({
    ios: `sms:${phoneNumbers.join(';')}&body=${messageBody}`,
    android: `sms:${phoneNumbers.join(';')}?body=${messageBody}`,
  });
  Linking.openURL(smsUrl);
};


export { handleCallPress, handleTextPress };