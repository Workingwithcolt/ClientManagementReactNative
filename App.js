import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Welcome from './src/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/screens/Homepage';
import Verification from './src/screens/Verification';
import GenericBodyCard from './src/GenericComponent/GenericBodyCard';
import { Users } from './src/screens/Users';
import { Projects } from './src/screens/Projects';
import { ShowFile } from './src/GenericComponent/ShowFile';
import { UploadFile } from './src/GenericComponent/UploadFile';


const Stack = createNativeStackNavigator();

const UserComponent = ({ navigation }) => {
  return (
    <GenericBodyCard>
      <Users navigation={navigation} />
    </GenericBodyCard>
  )
}
const AccountComponent = ({ navigation }) => {
  return (
    <GenericBodyCard>
      <Projects navigation={navigation} />
    </GenericBodyCard>
  )
}

const FileComponent = ({ navigation,route }) => {
  return (<GenericBodyCard>
    <ShowFile navigation={navigation} route={route} />
  </GenericBodyCard>)
}

const UploadComponent = ({navigation,route})=>{
  return(
    <GenericBodyCard>
    <UploadFile navigation={navigation} route={route} />
  </GenericBodyCard>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={Welcome}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled: true
            }
          }
        />
        <Stack.Screen name="login" component={Login}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled: true

            }
          }
        />
        <Stack.Screen name="signup" component={Signup}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled: true

            }
          }

        />
        <Stack.Screen name="homepage" component={
          Homepage

        }
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled: true

            }
          }
        />

        <Stack.Screen name="Verification" component={Verification}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled: true

            }
          }
        />
        <Stack.Screen name="Users" component={
          UserComponent}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled: true

            }
          }
        />
        <Stack.Screen name="Projects" component={
          AccountComponent}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled: true

            }
          }
        />
        <Stack.Screen name="Files" component={
          FileComponent}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled: true

            }
          }
          initialParams={{ id:undefined}}
        />
 <Stack.Screen name="Upload" component={
          UploadComponent}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled: true

            }
          }
          initialParams={{ id:undefined}}
        />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
