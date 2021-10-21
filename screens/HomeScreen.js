import React from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../components/Card';
import data from '../const/data';
// https://ctxt.io/2/AABg6Fi7Eg
import GlobalStyles from '../styles/GlobalStyles';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Popular</Text>
                <FlatList 
                    data={data}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString() }
                    renderItem={({item}) => <Card navigation={navigation} item={item} />}
                />
            </View>
        </SafeAreaView>
    )
}


export default HomeScreen
