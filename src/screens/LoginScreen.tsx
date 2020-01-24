import React from "react";
import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";

import Logo from "../../assets/logo.png";
import { Actions } from "react-native-router-flux";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignContent: "center",
          justifyContent: "center",
          marginTop: 25
        }}
      >
        <View>
          <Image
            resizeMode="contain"
            source={Logo}
            style={{ width: 200, height: 200, alignSelf: "center", margin: 15 }}
          />
        </View>
        <TextInput
          placeholder="Username or email"
          style={{
            fontSize: 18,
            borderColor: "white",
            borderWidth: 1,
            padding: 5,
            width: "80%",
            alignSelf: "center",
            marginBottom: 10,
            color: "#000",
            borderRadius: 1,
            borderBottomColor: "black"
          }}
        />
        <TextInput
          placeholder="Password"
          style={{
            fontSize: 18,
            borderColor: "white",
            borderWidth: 1,
            padding: 10,
            width: "80%",
            alignSelf: "center",
            color: "#000",
            borderRadius: 1,
            borderBottomColor: "black"
          }}
        />

        <TouchableOpacity
          style={{
            width: "80%",
            backgroundColor: "#00acee",
            height: "10%",
            borderRadius: 10,
            marginTop: 30,
            marginBottom: 10,
            alignSelf: "center"
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 40, color: "white" }}>
            Entrar
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold" }}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <View
            style={{
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 50,
              height: "80%"
            }}
          >
            <Text style={{ margin: 3 }}>Não tem uma conta?</Text>

            <TouchableOpacity
              onPress={() => {
                Actions.register();
              }}
            >
              <Text style={{ color: "#00acee", fontWeight: "bold" }}>
                Criar conta
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
