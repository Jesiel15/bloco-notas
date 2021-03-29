import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { Card } from 'react-native-elements';

import styles from '../NewNote/styles'

import NotesContext from '../../context/NotesContext';

export default function NewNote({ route, navigation }) {
  const [note, setNote] = useState(route.params ? route.params : {})
  const { dispatch } = useContext(NotesContext)

  const TestNote = () => {
    if (note.noteText || note.titleNoteText) {
      return (
        <Button
          onPress={() => {
            dispatch({
              type: note.id ? 'updateNote' : 'createNote',
              payload: note,
            })
            navigation.goBack()
          }}
          title="Salvar"
        />
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

function confirmNotesDeletion() {
  Alert.alert('Cancelar Anotação?', 'A Anotação será excluida!',
    [
      {
        text: 'Sim',
        onPress() {
          navigation.goBack()
        }
      },
      {
        text: 'Não',
      }
    ])
}

  return (
    <View>
    <Card >
        <TextInput
            style={{ height: '5%' }}
            onChangeText={titleNoteText => setNote({ ...note, titleNoteText })}
            placeholder='Titulo..'
            value={note.titleNoteText}
            multiline={true}
        />
        <Card.Divider />
        <TextInput
            style={{ height: '85%' }}
            onChangeText={noteText => setNote({ ...note, noteText })}
            placeholder='Anotação..'
            value={note.noteText}
            multiline={true}
        />
            <Card.Divider />
        <View style={styles.bottomEditDelete}>
            <TestNote></TestNote>
            <Button
                onPress={() => {
                    confirmNotesDeletion(navigation) 
                }}
                title="Cancelar" />
        </View>

    </Card>
</View>
  );
}