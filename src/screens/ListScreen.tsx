import React, { useState, useEffect } from 'react';
import { View as Div, StyleSheet, Alert, ActivityIndicator, View, FlatList, Text } from 'react-native';
import { Title, Br } from '../components/HtmlTags';

interface Book {
    id: number,
    auteur: string,
    description: string,
    exemplaires: number,
    genre: string,
    sortie: string,
    titre: string
}

export default function ListScreen({ navigation, route }:any) {

    const [books,setBooks]:[Book[],any] = useState([]);
    const [fetched,setFetched] = useState(false);

    useEffect(() => {
        fetch("http://192.168.0.58:4000/books")
            .then(response => response.json())
            .then((books:Book[]) => {setBooks(books); setFetched(true); })
            .catch(error => { Alert.alert(error.message); setFetched(true)})
    },[])

const renderItem:Function = ({item}:any):JSX.Element => <Div><Text style={{padding: 10, margin: 5, fontSize: 20, borderWidth: 1, backgroundColor: "aquamarine"}}>{item.titre}</Text></Div>
    

    const fetchedData:JSX.Element = (
        fetched ? <FlatList data={books} keyExtractor={(book:any) => book.id.toString()} renderItem={renderItem.bind(books)} /> 
        : <ActivityIndicator size="large" />)
     
    return (
        <Div style={styles.container}>
            <Title tag="h3">Voici la liste des livres disponibles : </Title>
            <Br/>
            {fetchedData}
        </Div>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 30,
        alignItems: "center"
    }
})