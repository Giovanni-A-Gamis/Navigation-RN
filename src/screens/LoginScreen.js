import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    const [text, setText] = useState();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View>
                <TextInput 
                    style={styles.inputContainer}
                    placeholder="USUÁRIO"
                    onChangeText={newText => setText(newText)}
                />
            </View>
            <View>
                <TextInput 
                    style={styles.inputContainer}
                    placeholder="SENHA"
                    onChangeText={newText => setText(newText)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Logar"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    inputContainer: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 50,
    },
    buttonContainer: {
        marginTop: 20,
    }
})