import React from 'react';
import { FlatList } from "react-native";

const List = (props:any):JSX.Element => <FlatList data={props.data} renderItem={props.renderCallback} />

export default List;