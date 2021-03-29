import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

export default ({ route, navigation }) => {
    const [note, setNote] = useState(route.params ? route.params : {})
    console.log(note.noteText)
    return (
        <View>
            <TextInput
                onChangeText={name => setNote(...note, name)}
                placeholder=' testando..'
                value={note.noteText}

            />
        </View>
    )
}


// import React from 'react';
// import { View } from 'react-native';
// export default function EditNote(props) {


//     console.warn(Object.keys(props.route))
//     return (
//         <View>

//         </View>
//     );
// }
