import React, { ReactElement } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  useColorScheme,
  Pressable,
  View,
  Image,
  FlatList,
  ImageSourcePropType,
} from "react-native";

import StyledText from "../components/styled/StyledText";
import { RFValue } from "react-native-responsive-fontsize";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Home: React.FC = (): ReactElement => {
  const isDarkMode = useColorScheme() === "dark";
  const bG = require('../../assets/images/delivery_screen_bg.png');

  type ItemsType = {
    id: string;
    title: string;
    subTitle: string;
    img: ImageSourcePropType;
  };

   const MenuItems: ItemsType[] = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Double Cheeseburger',
        subTitle: 'With lettuce, tomato, pickle and onion with chip and soda.',
        img: require('../../assets/images/menu_image_1.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Quesadilla',
        subTitle: 'With grilled onion and bell pepper, grilled chicken and Monterrey jack cheese with chip and soda.',
        img: require('../../assets/images/menu_image_2.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f656',
        title: 'Chef Salad',
        subTitle: 'With ham or turkey, boiled egg, your hoice of dressing, chips and soda.',
        img: require('../../assets/images/menu_image_3.png')
    },
    {
        id: '3ac68afc-c6d05-48d3-a4f8-fbd91aa97f656',
        title: 'Grilled chicken Salad',
        subTitle: 'With grilled chicken, cucumber, tomato, cheese, your choice of dressing with chips and soda.',
        img: require('../../assets/images/menu_image_4.png')
    },
  ];

  return (
    <SafeAreaView style={HomeStyles.container} >
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        hidden={false}
        backgroundColor="#F6F6F7"
      />

        {/* Header */}
        <View style={HomeStyles.header} >            
            <View>
                <Pressable onPress={ () => { console.log('Home screen Back Button Pressed.'); }}>
                {
                    ({pressed}) => (
                        <StyledText
                            style={[
                                HomeStyles.headerText, 
                                {color : pressed ? "#ddd" : undefined, }
                            ]} 
                            familyStyle="Bold">
                            <FontAwesome6 name={'arrow-left'} size={RFValue(35)} />
                        </StyledText>
                    ) 
                }
                </Pressable>
            </View>

            <View 
                style={HomeStyles.centerLogo}>            
                <Image
                    style={HomeStyles.appLogo}
                    source={require("../../assets/images/app_logo.png")}
                />
            </View>
        </View>

        <View style={HomeStyles.menuHeaderBox}>
            {/* Menu */}
            <View>
                <StyledText style={{
                    fontSize: RFValue(30), color: "#000000"
                }} familyStyle={'Bold'}>Menu</StyledText>
            </View>
            
            {/* Menu Headline */}
            <View>
                <StyledText style={{ color: "#000000" }}>Choose from one of the four selections below.</StyledText>
            </View>
        </View>
        

        {/* FlatList */}

        <FlatList
            data={MenuItems}
            renderItem={({ item }: { item: ItemsType }): ReactElement => (
                
                <View style={{padding: 10, flexDirection: "row",}}>
                    <View 
                        style={{ width:"35%", }}>
                        <Image
                            style={HomeStyles.itemImage}
                            source={item.img}
                        />
                    </View>

                    {/* Item Details */}
                    <View
                        style={{ width: "65%", paddingHorizontal: 10, }}>
                        <View style={{ flexDirection: "column", }}>
                            <StyledText style={{ color: "#105ea4", marginVertical: 2, }} familyStyle={'Bold'}>{item.title}</StyledText>
                            <StyledText style={{ color: "#000000", marginVertical: 2, }}>{item.subTitle}</StyledText>
                            <Pressable 
                                style={
                                    ({pressed}) => [{
                                        backgroundColor: pressed ? "#f7b21d" : "#F7941D",
                                        alignSelf: "flex-start",
                                        marginVertical: 2,                            
                                    }]                                    
                                }>
                                <StyledText style={{ color: "#ffffff", padding: 4 }}>SELECT</StyledText>
                            </Pressable>
                        </View>
                    </View>
                </View>

            )}
            keyExtractor={item => item.id}
        />

    </SafeAreaView>
  );
};

const HomeStyles = StyleSheet.create({
    container: {    
        flex: 1,
        backgroundColor: '#F6F6F7',
        padding: "5%",
        // borderWidth: 2
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        // borderWidth: 2
    },
    appLogo: {
        width: RFValue(52), 
        height: RFValue(57), 
        resizeMode: "contain"
    },
    headerText: {
        fontSize: RFValue(20),
    },
    centerLogo: {
        position: "absolute",
        left: 0,
        right: 0,
        alignItems: "center",
    },
    menuHeaderBox: {
        padding: 15
    },
    itemImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        alignContent: "flex-end",
        // borderWidth: 2
        // position: "absolute",
        // top: 0,
        // bottom: 0,
        // alignItems: "flex-start"
    }
});

export default Home;
