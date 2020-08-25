import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View as Div, Button, ActivityIndicator, Alert, Platform, Image} from 'react-native';
import { Title, Hr, Br } from "../components/HtmlTags";


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
      <Div style={styles.column}>
        <Button title="Second écran" onPress={() => navigation.navigate("Second",{ data: "Données aléatoires en props" })} />
        <Button title="Hello world" onPress={() => Alert.alert("Hello world :)",`Vous lancez cette application sur l'OS suivant : ${Platform.OS+' '+Platform.Version}`)} />
        <Button title="Liste" onPress={() => navigation.navigate("Liste")} />
      </Div>

      <Br/>
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
  column:
  {
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 1
  }
});