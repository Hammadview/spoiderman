import { ScrollView, StyleSheet, Text, View, Button,TouchableOpacity } from "react-native";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUser = () => {
  const dispatch=useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  // console.log(data);
  const deleteUser=(id)=>{
dispatch(removeUser(id))
  }

  return (
    <ScrollView>
      {data.map((user, id) => {
        return (
          <View
            key={id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              margin: '2%',
              padding: 10,
            }}
          >
            <Text style={{ color: 'gray' }}>{user}</Text>
            <TouchableOpacity onPress={() => deleteUser(id)}>
              <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default DisplayUser;

const styles = StyleSheet.create({});