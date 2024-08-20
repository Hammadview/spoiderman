import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity,Button ,View} from 'react-native'
import React from 'react'
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser, clearAllUsers } from '../store/slices/UserSlice';
import DisplayUser from './DisplayUsers';

const Home = () => {
  const dispatch = useDispatch();
  const addNewUser = (payload) =>{
    console.log(payload)
    dispatch( addUser(payload))

  };
  const deleteUsers = ()=>{
    dispatch(clearAllUsers())
  };

  return (
    
    <ScrollView>
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "9%",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "gray" }}>
            Redux Work
          </Text>
        </View>
        <View style={{ marginTop: "12%", alignSelf: "center" }}>
          <Text style={{ fontSize: 35, fontWeight: "bold", color: "gray" }}>
            ADMIN TABLE
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: "10%" }}>
          <Text style={{ color: "gray" }}>
            
            One Destination for complete App Development
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row", 
            justifyContent: "space-between",
            margin: "3%",
            marginTop: "10%",
          }}
        >
          <Text style={{ color: "gray" }}>HOME</Text>
          <Text style={{ color: "gray" }}>ABOUT</Text>
          <Text style={{ color: "gray" }}>PROJECTS</Text>
          <Text style={{ color: "gray" }}>CODE</Text>
          <Text style={{ color: "gray" }}>CONTACT</Text>
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            margin: "3%",
            marginTop: "7%",
            alignItems: "center",
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ color: "gray", fontSize: 20 }}>
            List for User Details
          </Text>

          <Button
            title="Add new users"
            onPress={() => addNewUser(fakeUserData())}
          />
        </View>

        <View>
          <DisplayUser/>
        </View>
        <View
          style={{ width: "100%", alignItems: "center", paddingBottom: "5%" }}
        >
          <Button 
          onPress={deleteUsers}
          title="Clear users" color={"gray"}
           />
        </View>
      </View>
    </ScrollView>
   
    
  )
}

export default Home

const styles = StyleSheet.create({})