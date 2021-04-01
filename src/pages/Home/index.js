import React, { useContext } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { Card, Button } from 'react-native-elements';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons'
import NotesContext from '../../context/NotesContext';
import styles from '../Home/styles'

export default function Home({ navigation }) {
  IconFA.loadFont();
  IconMI.loadFont();

  const { state, dispatch } = useContext(NotesContext)

  function confirmNotesDeletion(note) {
    Alert.alert('Excluir Anotação', 'Deseja excluir a Anotação?',
      [
        {
          text: 'Sim',
          onPress() {
            dispatch({
              type: 'deleteNote',
              payload: note,
            })
          }
        },
        {
          text: 'Não',
        }
      ])
  }

  function getNoteItem({ item: note }) {
    return (
      <View >
        <Card >
          <View flexDirection="row">
            <View >
              <Card.Title>{note.titleNoteText}</Card.Title>
            </View>
            <View style={styles.bottomEditDelete }>
              <Button
                onPress={() => navigation.navigate('EditNote', note)}
                icon={
                  <IconMI name="edit" size={20} color="green" />
                }
                type="clear"
              />
              <Button
                onPress={() => confirmNotesDeletion(note)}
                icon={
                  <IconFA name="close" size={20} color="#f22" />
                }
                type="clear"
              />
            </View>
          </View>
          <Card.Divider />
          <Text numberOfLines={2}>{note.noteText}</Text>
        </Card>
      </View>
    )
  }
  
  return (
    //Para mostrar o do Async Storage e context API
      <FlatList
        keyExtractor={note => note.id.toString()}
        data={state.notes}
        renderItem={getNoteItem}
      />    
  );
}
