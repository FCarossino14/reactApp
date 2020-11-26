
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { SearchBar, Header, Divider, Icon} from 'react-native-elements';

import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component{

    // Acuerdense de poner su key de Google Console
    async _signInWithGoogle(){

        try {
            const result = await Google.logInAsync({
                iosClientId: "765738564074-bo03g3hs3mneiiipcqoeaimh3r6np9am.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });
    
            if (result.type === 'success') {
                try {
                    this.props.onLogin();
                } catch (error){
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render(){
        return (
            <View>
                <Header
                    placement="left"
                    leftComponent={{}}
                    centerComponent={{ text: 'imDB', style: { fontSize:30, color: '#fff' } }}
                />
                <Divider
                    style={{height: 200, backgroundColor: ''}}
                />
                <Button
                    onPress={() => this._signInWithGoogle()}
                    title="Iniciar sesión con Google para acceder a la App"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

