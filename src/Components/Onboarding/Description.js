import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
;
import Images from '../../Config/images';



export default class Description extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            
                <View style={styles.container}>
                <Image source={this.props.source} style={styles.image}/>
                    <Text style={styles.title}>
                    {this.props.text1}
                    </Text>
                </View>
                <View style={styles.container}>
                <Text style={styles.text}>
                {this.props.text2}
                    </Text>
                    <Text style={styles.text}>
                    {this.props.text3}
                    </Text>
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:300
        ,
        height:300,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:40,
    },
    title:{
        color:'white',
        fontSize:30 ,
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:40,
    },
})