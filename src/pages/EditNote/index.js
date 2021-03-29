import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';
import NotesContext from '../../context/NotesContext';
import styles from '../EditNote/styles';

export default function EditNote({ route, navigation }) {
    // var { titleNoteText, noteText } = props.route.params;
    // const [value, onChangeText] = React.useState(text);
    const [note, setNote] = useState(route.params ? route.params : {})
    // console.warn(Object.keys(props.route))
    const { dispatch } = useContext(NotesContext)

    const TestNoteUpdate = () => {
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

    return (
        <View >
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
                style={{ height: '83%' }}
                onChangeText={noteText => setNote({ ...note, noteText })}
                placeholder='Anotação..'
                value={note.noteText}
                multiline={true}
            />
            <Card.Divider />
            <View style={styles.bottomEditDelete}>
                <TestNoteUpdate></TestNoteUpdate>
                <Button
                    onPress={() => {
                        navigation.goBack()
                    }}
                    title="Cancelar" />
            </View>

        </Card>
        </View >
    );
}
