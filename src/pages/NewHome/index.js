import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, Button } from 'react-native-elements';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons'
import NotesContext from '../../context/NotesContext';
import styles from '../Home/styles'

import api from '../../services/api'

export default function Home({ navigation }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    api.get("notes")
      .then((response) => {
        setNotes(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [])


  // Salva dados na API
  const handlePost = () => {
    api.post("/notes", {
      email: "quarto@email.com",
      notes: {
        titleNoteText: "quarto testHandlePost titleNoteText",
        noteText: "quarto terceiroterceiroterceiroterceiroterceiroterceiroterceiro terceiro testHandlePost noteTextterceiro testHandlePost noteTextterceiro testHandlePost noteTextterceiro testHandlePost noteText"
      }

    }).then(({ data }) => console.log(data))
  }

  // Mostra os itens chamados do Flatlist na tela
  function notesShow(item) {

    const { email } = item.item
    const { noteText, titleNoteText } = item.item.notes


    return (
      // <View>
      //   <Text>{email}</Text>
      //   <Text>{noteText}</Text>
      //   <Text>{titleNoteText}</Text>
      //   <Button title="create new" onPress={() => handlePost()} />
      // </View>
      <View >
        <Card >
          <View flexDirection="row">
            <View >
              <Card.Title>{email}</Card.Title>
              <Card.Title>{titleNoteText}</Card.Title>
            </View>
            {/* <View style={styles.bottomEditDelete }>
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
            /> */}
            {/* </View> */}
          </View>
          <Card.Divider />
          <Text numberOfLines={2}>{noteText}</Text>
        </Card>
        <Button title="create new" onPress={() => handlePost()} />
      </View>
    )
  }

  return (
    <FlatList
      data={notes}
      keyExtractor={(notes) => notes._id}
      contentContainerStyle={{ flexGrow: 1 }}
      renderItem={notesShow}
    />
  );
}
