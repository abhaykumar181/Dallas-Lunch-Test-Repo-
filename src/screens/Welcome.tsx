import React, { ReactElement } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  useColorScheme,
  ImageBackground,
  Image,
  View,
  TouchableHighlight,
} from "react-native";
import StyledText from "../components/styled/StyledText";
import { Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Welcome: React.FC = (): ReactElement => {
  const isDarkMode = useColorScheme() === "dark";
  const bG = require('../../assets/images/delivery_screen_bg.png');

  return (
    <SafeAreaView style={WelcomeStyles.container} >
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        hidden={false}
        backgroundColor="#F6F6F7"
      />
      <ImageBackground source={bG} style={WelcomeStyles.bgImageContainer} >
        {/* App logo. */}
        <View style={WelcomeStyles.appLogoBox}>
            <Image
                style={WelcomeStyles.appLogo}
                source={require("../../assets/images/delivery_screen_logo.png")}
            />
        </View>

        {/* Deliver box */}
        <View style={WelcomeStyles.deliverModeBox}>
            <Pressable
                onPress={() => { console.log("Pickup button clicked!"); }} >
                {
                    ({pressed}) =>  (
                        <View style={WelcomeStyles.pickUpBox}>
                            <FontAwesome6
                                name={'bag-shopping'}
                                size={RFValue(22)}
                                style={{
                                    marginRight: 10,
                                    color: pressed ? "#ddd" : "#ffffff",
                            }} />
                            <StyledText
                                style={[
                                    WelcomeStyles.pickUpButton,
                                    {color: pressed ? "#ddd" : "#ffffff",}
                                ]}
                                familyStyle={'Bold'}>
                                PICKUP AT DALLAS LIFE
                            </StyledText>
                        </View>
                    )
                }
          </Pressable>


            {/* <View 
                style={{
                    backgroundColor: "#F7941D",
                    borderRadius: 10,
                    marginTop : 5,
                }}>
                <Pressable
                    style={[
                        WelcomeStyles.deliverMeBox, {
                        flexDirection: "row",
                        alignContent:"center",
                        alignItems:"center",
                        alignSelf:"center",
                        backgroundColor: "#F7941D",
                        borderWidth: 0 ,
                    }]} >
                <Image
                    style={WelcomeStyles.deliveryImage}
                    source={require("../../assets/images/delivery_btn_icon.png")}
                />
                <StyledText style={WelcomeStyles.deliverMeButton} familyStyle={'Bold'}>
                    DELIVER TO ME
                </StyledText>
                </Pressable>
            </View> */}
            
                <Pressable 
                    style={
                        ({pressed}) => [{
                            borderRadius: 10,
                            backgroundColor: pressed ? "#f7b21d" : "#F7941D",   
                        }]
                    }>
                    {
                        ({pressed}) => (
                            <View
                                style={[
                                    WelcomeStyles.deliverMeBox, {
                                        flexDirection: "row",
                                        alignContent:"center",
                                        alignItems:"center",
                                        alignSelf:"center",
                                        backgroundColor: pressed ? "#f7b21d" : "#F7941D",
                                        borderWidth: 0 ,
                                }]} >
                                <Image
                                    style={[
                                        WelcomeStyles.deliveryImage, {

                                        }]}
                                    source={require("../../assets/images/delivery_btn_icon.png")}
                                />
                                <StyledText style={WelcomeStyles.deliverMeButton} familyStyle={'Bold'}>
                                    DELIVER TO ME
                                </StyledText>
                            </View>
                        )
                    }
                </Pressable>
        </View>
        

        {/* Footer Content */}
        <View style={{ borderWidth:0, borderColor:"white"}}>
            <Pressable>
                {
                    ({pressed}) => (
                        <StyledText
                            style={{
                                color: pressed ? "#ddd" : "#FFFFFF",
                                textAlign: "center",
                                fontSize: RFValue(14),
                            }}
                            familyStyle={'Bold'}>
                            WHY IT DALLAS LUNCH™ MATTERS
                        </StyledText>
                    )
                }
            </Pressable>
        </View>
          
        <View style={{ borderWidth:0, borderColor:"white"}}>
          <Pressable style={WelcomeStyles.donateBox}>
            {
              ({pressed}) => (
                <StyledText 
                    style={[
                        WelcomeStyles.donateButton,
                        {backgroundColor : pressed ? "#ddd" : "#ffffff"}
                    ]}
                    familyStyle={'Bold'}>
                    GIVE TO DALLAS LIFE
                </StyledText>
              )
            }
          </Pressable>  
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const WelcomeStyles = StyleSheet.create({
  container: {    
    flex: 1, 
  },
  bgImageContainer: {
    flex: 1,
    paddingHorizontal: "5%",
    paddingVertical: "2%",
    borderWidth: 0,
  },
  appLogoBox: {
    padding: 15,
    borderWidth: 0,
    borderColor:"white",
  },
  appLogo: {
    width: RFValue(200),
    height: RFValue(240),
    alignSelf: "center",
    resizeMode: "contain",
    borderWidth: 0,
    borderColor:"white",
  },
  deliveryImage: {
    width: RFValue(52), 
    height: RFValue(47),
    resizeMode: "contain",
    alignSelf: "center",
  },
  deliverModeBox: {
    flexGrow: 1, borderWidth: 0, borderColor:"white",
  },
  pickUpBox: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    borderWidth: 0,
    marginBottom: 13
  },
  pickUpButton: {
    fontSize: RFValue(20),
    textAlign: "center",
  },
  deliverMeBox: {
    paddingHorizontal: 20,
    paddingVertical: RFValue(5),
  },
  deliverMeButton: {
    padding: "1.3%",
    color: "#ffffff",
    fontSize: RFValue(20),
    borderRadius: 10,
  },
  donateBox:{
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  donateButton: {
    padding: "2%",
    textAlign: "center",
    fontSize: RFValue(16),
    borderRadius: 10
  }
});

export default Welcome;
