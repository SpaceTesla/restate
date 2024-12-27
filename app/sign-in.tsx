import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';

const SignIn = () => {
  const handleLogin = () => {
    console.log('Login');
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName={'h-full'}>
        {/*<Text className="text-2xl font-bold">Sign In</Text>*/}
        <Image
          source={images.onboarding}
          className="mt-2 h-4/6 w-full"
          resizeMode="contain"
        />
        <View className={'flex gap-4'}>
          <Text
            className={
              'text-black-200 text-center text-base font-semibold uppercase'
            }
          >
            Welcome to ReState
          </Text>
          <Text
            className={'font-rubik-bold text-black-300 text-center text-3xl'}
          >
            Let's get closer to {'\n'}{' '}
            <Text className={'text-primary-300'}>your ideal home</Text>
          </Text>

          <Text className={'text-black-200 text-center text-base'}>
            Login to ReState with Google
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className={
              'm-8 flex flex-row items-center justify-center gap-4 rounded-full bg-white p-4 shadow-lg shadow-zinc-400'
            }
          >
            <Image
              source={icons.google}
              className={'h-5 w-5'}
              resizeMode={'contain'}
            />
            <Text className={'font-rubik-semibold'}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
