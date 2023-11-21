import React, { ReactElement } from "react";
import { 
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    useColorScheme,
    Pressable,
    TouchableWithoutFeedback,
    Keyboard,
    Image
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import StyledText from "../components/styled/StyledText";
import RegistrationForm from "../components/auth/RegistrationForm";

const Register: React.FC = (): ReactElement => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={RegisterStyles.container}>
                <StatusBar 
                    barStyle={isDarkMode ? "light-content" : "dark-content"}
                    hidden={false}
                    backgroundColor="#F6F6F7"
                />

                <View style={RegisterStyles.header}>
                    <Pressable onPress={() => { console.log('Back Button Pressed.'); }}>
                    {
                        ({pressed}) => (
                            <StyledText
                            style={[RegisterStyles.headerText, {color : pressed ? "#ddd" : undefined}]} 
                            familyStyle="Bold">
                               <FontAwesome6 name={'arrow-left'} size={RFValue(35)} />
                            </StyledText>
                        ) 
                    }
                    </Pressable>

                    <Image
                        style={RegisterStyles.deliveryImage}
                        source={require("../../assets/images/app_logo.png")}
                    />

                    <Pressable
                        onPress={() => {
                            console.log("Skip button pressed!");
                        }} >
                        {
                            ({pressed}) => (
                                <StyledText
                                style={[
                                    RegisterStyles.headerText,
                                    {color: pressed ? "#ddd" : undefined, textTransform: "uppercase"},
                                ]}
                                familyStyle= {"Bold"}
                                >
                                Skip
                                </StyledText>
                            )
                        }
                    </Pressable>
                </View>

                <View>
                    <StyledText style={RegisterStyles.letsGetStartedText} familyStyle="Bold">Let's Get Started</StyledText>
                </View>
                
                <View>
                    <StyledText style={RegisterStyles.createAccountText} familyStyle="Bold">Create an new account</StyledText>
                </View>

                <RegistrationForm />

                <View>
                    <Pressable 
                        style={
                        ({pressed}) => 
                            [RegisterStyles.getStartedButton, {backgroundColor: pressed ? '#ddd' : '#F7941D'}]
                        }
                        onPress={() => { console.log("Register Button Pressed"); } }>
                        <StyledText style={[RegisterStyles.getStartedText, {textTransform: "uppercase"}]} familyStyle="Bold" >Create</StyledText>
                    </Pressable>
                </View>

                <View style={RegisterStyles.footer}>
                    <StyledText style={{ fontSize: RFValue(13), marginRight:5 }} familyStyle="Regular" >Already have an account?</StyledText>
                    <Pressable onPress={() => { console.log("Login button Pressed."); } }>
                        {
                            ({pressed}) => (
                                <StyledText
                                    style={[{ fontSize: RFValue(13), color: pressed ? "#ddd" : undefined }]}
                                    familyStyle="Bold"
                                    >
                                Login here</StyledText>
                            )
                        }
                    </Pressable>
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F7',
        padding: "5%",
        justifyContent: "space-evenly",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        alignItems: "center",
    },
    deliveryImage: {
        width: RFValue(52), 
        height: RFValue(57), 
        marginBottom: 45, 
        resizeMode: "contain"
    },
    letsGetStartedText: {
        fontSize: RFValue(27),
        textAlign: "center",
    },
    createAccountText: {
        fontSize: RFValue(16),
        textAlign: "center",
    },
    headerText: {
        fontSize: RFValue(20),
    },
    getStartedButton: {
        alignSelf: "center",
        borderRadius: 10,
        paddingHorizontal: "13.5%",
        paddingVertical: "3%",
    },
    getStartedText: {
        color: "#fff",
        fontSize: RFValue(20),
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        paddingVertical: 5,
    }
});

export default Register;