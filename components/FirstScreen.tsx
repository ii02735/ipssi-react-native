import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View as Div, Button} from 'react-native';
import { Title, Hr, Br } from "../UI/HtmlTags";


export default function FirstScreen({navigation}:any) {
  return (
    <Div style={styles.container}>
      <Title tag="h1">Hello world !</Title>
      <Title tag="h2">Ceci est une application React-Native</Title>
      <Hr margin="10"/>
      <Text> 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quaerat deserunt laudantium fugit corporis, iste aliquam explicabo debitis labore obcaecati a quo at totam asperiores. Necessitatibus pariatur est amet dolorem.
      </Text>
      <Br/>
      <Button title="Second écran" onPress={() => navigation.navigate("Second",{ data: "Données aléatoires en props" })} />
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