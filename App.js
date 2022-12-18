/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const isDarkMode = useColorScheme() === 'light';
  const [paymentKey, setPaymentKey] = useState('');

  return (
    <SafeAreaView>
      <StatusBar />
      <View
        style={{
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"#fff"
        }}>
        {paymentKey && (
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            Your Payment Id is{' '}
            <Text style={{color: 'green'}}>{paymentKey}</Text>
          </Text>
        )}
        <Button
          title="Pay with razorpay"
          onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.png',
              currency: 'INR',
              key: 'rzp_test_oj5MiDvDeIz13v', // Your api key
              amount: '5000',
              name: 'Yumesh Kumar',
              prefill: {
                email: 'abc@gmail.com',
                contact: '9191919191',
                name: 'Yumesh KUmar',
              },
              theme: {color: '#F37254'},
            };
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
                setPaymentKey(data.razorpay_payment_id);
              })
              .catch(error => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
