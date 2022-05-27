import React from 'react';
import {View, Image, StyleSheet,SafeAreaView,StatusBar,Text,Pressable,Linking} from 'react-native';

const colorGithub = 'black';
const ColorFontGithub = '#C9D1D9';
const ColordarkFontGithub ='#4F565E';
const imageProfileGithub=
'https://avatars.githubusercontent.com/u/101279756?s=400&u=61c489fbc5e767cadd446105d9aa67791855e8eb&v=4'
const urlToMyGithub = 'https://github.com/GuigaKaercher'
const App = () => {
const handlePressGoToGithub = async () =>{
console.log('verificando link');
    const res= await Linking.canOpenURL(urlToMyGithub);
    console.log('link aprovado');
    console.log('abrindo link') 
    if(res) await Linking.openURL(urlToMyGithub);
}

return ( 
<SafeAreaView style={style.container}>
 <StatusBar backgroundColor={colorGithub} barStyle='light-content'/>
  <View style={style.content}>
        <Image 
        accessibilityLabel='foto de guiga do github'
        style={style.avatar} 
        source={{uri:imageProfileGithub}}/>
      
      <Text accessibilityLabel='name:Guilherme Kaercher'
      style={[style.defaultText,style.name]}> Guilherme Kaercher</Text>
      
      <Text accessibilityLabel='nickname:Guiga Kaercher' 
      style={[style.defaultText,style.nickname]}>@GuigaKaercher_</Text>
      
      <Text accessibilityLabel='descricao: um pouco sobre' 
      style={[style.defaultText,style.descricao]}>Futuro desenvolvedor web/mobile</Text>    
     
     <Pressable onPress={handlePressGoToGithub}>
         
             
    <View style={style.button}> 
        <Text style={[style.defaultText,style.textbutton]}>Open in Github</Text>
    </View>
    </Pressable>
  </View>
</SafeAreaView>
    );

};

export default App; 

const style = StyleSheet.create({
container: {
    backgroundColor: colorGithub,
    flex:1, //expandir para a tela inteira
    justifyContent: 'center',

},    
     content: {
      alignItems: 'center',},
      padding:20,     
 
      avatar: {
      height:200,
      width:200,
      borderRadius:100,
      borderColor:'white',
      borderWidth: 2,
      },

      defaultText: {
      color: ColorFontGithub, },

        name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight:'bold'},

        nickname: {
        fontSize: 18,
        color:ColordarkFontGithub},

        descricao: {
        fontSize: 14,
        fontWeight:'bold'}, 
        
         button: {
         marginTop: 20,   
         backgroundColor: ColordarkFontGithub,
         borderRadius: 10,
         padding: 20, },

         textbutton: {
         fontSize: 16,
         fontWeight:'bold'},

        });
