import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, NavigationContainer, SafeAreaView, Image, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.title}>
        <Image
          source={require('./assets/Icons/menu_light.png')}
          style={{ height: 50, width: 50 }}
        >
        </Image>
        <Text style={{ fontFamily: 'SydneyBold', fontSize: 32 }}> ensom </Text>
        <Image
          source={require('./assets/Icons/sun.png')}
          style={{ height: 40, width: 40 }}
        ></Image>
      </View>

      <View style={{ paddingTop: 50 }}>
        <View style={{ paddingBottom: 20 }}>
          <ImageBackground
            source={require('./assets/Profiles/mtl.jpg')}
            style={{ height: 330, width: 300 }}
            imageStyle={[styles.ImageBox, Themes.light.shadows]}
          >
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingLeft: '4%',
              paddingBottom: '4%',
              paddingTop: '3%'
            }}>
              <Text style={{ fontFamily: 'Sydney', color: '#fff', fontSize: 32 }}>MTL</Text>

              <Text style={{ fontFamily: 'Sydney', color: '#fff' }}> 2 miles away </Text>
            </View>
          </ImageBackground>
        </View>


        <View style={{ paddingBottom: 100 }}>
          <View style={[Themes.light.shadows, styles.box]}>
            <Text style={{ fontFamily: 'Sydney', fontSize: 25 }}>My Hottest take</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
              <Image
                source={require('./assets/Icons/player_light.png')}
                style={{ width: 50, height: 50, marginRight: 5, }}
              >
              </Image>
              <Image
                source={require('./assets/Icons/audio_waveform_light.png')}
                style={{ width: '80%', resizeMode: "contain", }}
              >
              </Image>
            </View>
          </View>
        </View>
      </View>


      <View style={styles.navBar}>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Image
            source={require('./assets/Icons/discover_light.png')}
            style={{ height: 34, width: 34, }}
          />
          <Text style={{ fontFamily: 'Sydney', fontSize: '18', color: 'white' }}> Discover</Text>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Image
            source={require('./assets/Icons/heart_light.png')}
            style={{ height: 34, width: 34, }}
          />
          <Text style={{ fontFamily: 'Sydney', fontSize: '18', color: 'white' }}> Matches</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Image
            source={require('./assets/Icons/messages_light.png')}
            style={{ height: 34, width: 34, }}
          />
          <Text
            style={{
              fontFamily: 'Sydney', fontSize: '18', color: 'white', textAlign: 'center'
            }}> Dms
            </Text>
        </View>
      </View>
    </SafeAreaView >


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },

  title: {
    ...Platform.select({
      ios: {
        height: 54
      },
      android: {
        height: 41
      }
    }),

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'

  },

  box: {
    backgroundColor: 'white',
    width: 300,
    padding: '5%',
    borderRadius: 25,
    height: 150,
    paddingTop: '5%',
  },

  ImageBox: {
    borderRadius: 20
  },

  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 4,
    width: '100%',
    height: '10%',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingHorizontal: '13%',

  }

});
