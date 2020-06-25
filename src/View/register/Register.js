import React, {useState} from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView, SafeAreaView,Alert} from 'react-native';

import Constants from '../../Config/constants';
import Colors from '../../Config/Colors';
import ButtonLogin from '../../Components/login/Button';
import LogoLogin from '../../Components/login/logo';
import EmailTextField from '../../Components/login/EmailTextField';
import Images from '../../Config/images';
import TextInputLogin from '../../Components/login/TextInput';
import DismissKeyboard from '../../Components/login/DismissKeyboard';
import Utils from '../../utils/util';
import FirebasePlugin from '../../plugins/firebase/Firebase';


const RegisterScreen = ({navigation}) => {
const [email, setEmail] = useState('');
const [errorEmail, setErrorEmail] = useState('');
const [password, setPassword] = useState('');
const [errorPassword, setErrorPassword] = useState('');
const [isLoading, setIsLoading] = useState(false);

const _validateEmailAddress = () => {
let isValidEmail = Utils.isValidEmail(email);
isValidEmail
? setErrorEmail('')
: setErrorEmail(Constants.STRING.EMAIL_ERROR);
return isValidEmail;
}

const _validatePassword = () => {
let isValidPassword = Utils.isValidField(password);
isValidPassword
? setErrorPassword('')
: setErrorPassword(Constants.STRING.PASSWORD_ERROR);
return isValidPassword;
}

const _onPressRegister = () => {
  let emailData = _validateEmailAddress();
  let passwordData = _validatePassword();

  if (emailData && passwordData) {
    loginApp(email, password);
  } else {
    Alert.alert(Constants.STRING.EMPTY_TITLE, Constants.STRING.EMPTY_VALUES);
  }

}
const loginApp = (email, password) => {
  try {
    setIsLoading(true);
    FirebasePlugin.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        setIsLoading(false);
        
      })
      .catch((error) => {
        
          
          
            setIsLoading(false);
            Alert.alert('Invalid Values', error.message);

          
      });
  } catch (error) {
    setIsLoading(true);
    Alert.alert('Firebase Error', error.message);
  }
};

return (
<DismissKeyboard>
<KeyboardAvoidingView
style={styles.container}
behavior="height"
enabled>
<View style={styles.container}>
<SafeAreaView>
<View style={styles.form}>
<EmailTextField
onChangeText={(email) => {
setEmail(email);
}}
onEndEditing={_validateEmailAddress}
error={errorEmail}
source={Images.EMAIL}
placeholder={Constants.STRING.EMAIL}
secureTextEntry={false}
autoCorrect={false}
/>
<TextInputLogin
onChangeText={(password) => {
setPassword(password);
}}
onEndEditing={_validatePassword}
error={errorPassword}
source={Images.USERNAME}
placeholder={Constants.STRING.PASSWORD}
secureTextEntry={true}
autoCorrect={false}
/>
<ButtonLogin
isLoading={isLoading}
onPress={_onPressRegister}
titleButton={Constants.STRING.REGISTER}
/>
</View>
</SafeAreaView>
</View>
</KeyboardAvoidingView>
</DismissKeyboard>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: Colors.blue,
alignItems: 'center',
justifyContent: 'center'
},
text: {
color: Colors.white,
textAlign: 'center',
fontWeight: 'bold',
height: 20,
},
});

export default RegisterScreen;