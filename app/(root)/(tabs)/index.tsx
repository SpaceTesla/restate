import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className={'font-rubik-semibold text-3xl font-semibold'}>
        Welcome to ReState
      </Text>
      <View className={'my-4 flex items-center justify-center gap-4'}>
        <Link href={'/sign-in'}>Sign In</Link>
        <Link href={'/explore'}>Explore</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/properties/1'}>Property</Link>
      </View>
    </View>
  );
}
