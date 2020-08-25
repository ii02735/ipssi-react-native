import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View as Div, Button} from 'react-native';
import { Title, Hr, Br } from "../UI/HtmlTags";


export default function SecondScreen({ navigation, route }:any) {
  return (
    <Div style={styles.container}>
      <Title tag="h2">Hello world again !</Title>
      <Title tag="h3">Vous êtes arrivé sur le second écran !</Title>
      <Br/>
      <Text>{route.params.data}</Text>
      <Hr margin="10"/>
      <Br/>
      <Button title="Revenir en arrière" onPress={() => navigation.goBack()} />
      <StatusBar style="auto" />
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50
  },
});