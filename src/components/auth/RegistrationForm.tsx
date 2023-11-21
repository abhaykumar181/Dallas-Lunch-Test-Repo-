import React, { ReactElement } from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const RegistrationForm: React.FC = (): ReactElement => {
    const [
        emailInput,
        phoneNumberInput,
        passwordInput,
        confirmPasswordInput,
    ] = [
        React.useRef<TextInput>(null), // <Where to Apply>(Initial Value)
        React.useRef<TextInput>(null), 
        React.useRef<TextInput>(null),
        React.useRef<TextInput>(null),
    ];

    return (
        <View style={{paddingVertical: 25}}>
            <TextInput
                inputMode="text"
                placeholder="Name"
                style={StyledTextInputStyles.input}
                keyboardType="default"
                autoComplete="off"
                autoCorrect={false}
                placeholderTextColor="#000"
                returnKeyType="next"
                onSubmitEditing={() => emailInput.current?.focus() }
                blurOnSubmit={false}
            />
            <TextInput
                inputMode="email"
                placeholder="Email"
                style={StyledTextInputStyles.input}
                keyboardType="numeric"
                autoComplete="off"
                autoCorrect={false}
                placeholderTextColor="#000"
                ref={emailInput}
                returnKeyType="next"
                onSubmitEditing={() => phoneNumberInput.current?.focus() }
                blurOnSubmit={false}
            />
            <TextInput
                inputMode="numeric"
                placeholder="Phone Number"
                style={StyledTextInputStyles.input}
                keyboardType="default"
                autoComplete="off"
                autoCorrect={false}
                placeholderTextColor="#000" 
                ref={phoneNumberInput}
                returnKeyType="next"
                onSubmitEditing={() => passwordInput.current?.focus() }
                blurOnSubmit={false}
            />
            <TextInput
                inputMode="text"
                placeholder="Password"
                style={StyledTextInputStyles.input}
                keyboardType="default"
                autoComplete="off"
                autoCorrect={false}
                placeholderTextColor="#000"
                secureTextEntry={true}
                ref={passwordInput}
                returnKeyType="next"
                onSubmitEditing={() => confirmPasswordInput.current?.focus() }
                blurOnSubmit={false}
                
                />
            <TextInput
                inputMode="text"
                placeholder="Confirm Password"
                style={StyledTextInputStyles.input}
                keyboardType="default"
                autoComplete="off"
                autoCorrect={false}
                placeholderTextColor="#000" 
                secureTextEntry={true}
                ref={confirmPasswordInput}
                blurOnSubmit={false}
                onSubmitEditing={Keyboard.dismiss}
                />
        </View>
    );
}

const StyledTextInputStyles = StyleSheet.create({
    input: {
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        paddingVertical: RFValue(9),
        backgroundColor: "#fff",
        fontFamily: 'PlaypenSans-Regular',
        fontSize: RFValue(16),
    }
});

export default RegistrationForm;