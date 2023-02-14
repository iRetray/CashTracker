import React, { useState } from 'react';
import { TouchableOpacity, View as ReactNativeView } from 'react-native';

import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import ReactNativeBiometrics from 'react-native-biometrics';

import { Box, Heading, HStack, Image, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../../constants';
import { useCashContext } from '../../context';
import { authWithBiometric } from '../../context/actions';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const DeviceBiometrics = new ReactNativeBiometrics();

export const BiometricAuth = () => {
  const [scanText, setScanText] = useState({
    type: 'INFO',
    text: 'Presiona para validar la huella',
  });

  const { dispatch } = useCashContext();

  const scanFingerprint = () => {
    DeviceBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
      .then(resultObject => {
        const { success } = resultObject;
        if (success) {
          dispatch(authWithBiometric());
        } else {
          setScanText({
            type: 'WARNING',
            text: 'Cancelaste la verificación con huella,\n presiona para intentarlo de nuevo.',
          });
        }
      })
      .catch(error => {
        console.log(error);
        setScanText({
          type: 'ERROR',
          text: 'No hay huellas registradas en el dispositivo, \n crea una e intentalo de nuevo',
        });
      });
  };

  const fingerPrintStyle = useAnimatedStyle(() => ({
    color: withRepeat(
      withSequence(
        withTiming(Colors.primary.medium, { duration: 500 }),
        withTiming(Colors.primary.dark, { duration: 500 }),
      ),
      -1,
      true,
    ),
    transform: [
      {
        scale: withRepeat(
          withSequence(
            withTiming(1.05, { duration: 500 }),
            withTiming(0.95, { duration: 500 }),
          ),
          -1,
          true,
        ),
      },
    ],
  }));

  return (
    <ReactNativeView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={require('../../assets/images/password.png')}
        size="100"
        alt="Nequi Logo"
        borderRadius={5}
        marginBottom={10}
      />
      <Heading size="2xl" textAlign="center">
        Cash Tracker
      </Heading>
      <Text fontSize="md" lineHeight="sm" textAlign="center">
        está protegido por <Text fontWeight="bold">datos biometricos</Text>{' '}
        {'\n'} usa tu huella para continuar
      </Text>
      <TouchableOpacity onPress={scanFingerprint}>
        <Box alignItems="center" marginTop={100}>
          {scanText.type === 'ERROR' ? (
            <IconMaterial
              name="fingerprint-off"
              size={75}
              color={Colors.primary.dark}
            />
          ) : (
            <AnimatedIcon
              style={[fingerPrintStyle]}
              name="finger-print-outline"
              size={75}
            />
          )}
          <HStack marginTop={5} alignItems="center" justifyContent="center">
            {scanText.type === 'INFO' ? (
              <IconEntypo
                style={{ marginRight: 5 }}
                name="info-with-circle"
                size={15}
                color="#4096ff"
              />
            ) : scanText.type === 'WARNING' ? (
              <IconEntypo
                style={{ marginRight: 5 }}
                name="warning"
                size={15}
                color="#ffc53d"
              />
            ) : null}
            <Text
              fontSize="md"
              fontStyle="italic"
              lineHeight="sm"
              textAlign="center"
            >
              {scanText.text}
            </Text>
          </HStack>
        </Box>
      </TouchableOpacity>
    </ReactNativeView>
  );
};
