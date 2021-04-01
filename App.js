import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import NewNote from './src/pages/NewNote';
import EditNote from './src/pages/EditNote';
import NewHome from './src/pages/NewHome';
import { Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NotesProvider } from './src/context/NotesContext';
import IconFA from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NotesProvider>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="NewHome" component={NewHome}
            options={{
              title: 'NewHome',
              headerStyle: {
                backgroundColor: '#24282F',
              },
              headerTintColor: '#2f2',
            }} />
         
          <Stack.Screen name="Home" component={Home}
            options={({ navigation }) => {
              return {
                title: 'Inicio',
                headerStyle: {
                  backgroundColor: '#24282F',
                },
                headerTintColor: '#2ff',
                headerRight: () => (
                  <Button 
                  onPress={() => navigation.navigate('NewNote')} 
                  icon={
                    <IconFA name="plus" size={25} color="green" />
                  }
                  type="clear"
                  />
                )
              }
            }} />
          <Stack.Screen name="NewNote" component={NewNote}
            options={{
              title: 'Nova anotação',
              headerStyle: {
                backgroundColor: '#24282F',
              },
              headerTintColor: '#2f2',
            }} />
         
          <Stack.Screen name="EditNote" component={EditNote}
            options={{
              title: 'Editar anotação',
              headerStyle: {
                backgroundColor: '#24282F',
              },
              headerTintColor: '#b60',
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
  )
}
