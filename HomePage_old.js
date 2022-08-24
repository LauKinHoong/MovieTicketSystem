/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView 
} from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import ImagedCarouselCard from "react-native-imaged-carousel-card";

import { Top3Movies } from './data';
import { theImages } from './data';


export default class HomePage extends Component {
  
  render() {
    return (
      <SafeAreaView>
        <ScrollView 
          decelerationRate={0.6}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
          persistentScrollbar={true}
        >

          <View style={styles.welcome}>
          <Text style={{fontSize: 27}}>Welcome to Sg. Long Cinema</Text>
          <Text style={{fontSize: 20}}>Hi xxx,</Text>
          </View>

          <View>
         
    <ImageSlider 
    data={[
        
        {img: 'https://image.tmdb.org/t/p/original/mZuAPY4ETMQPHhCXIcJ90kd6RaS.jpg'},
        {img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg'},

        {img: 'https://image.tmdb.org/t/p/original/8bxMHkuEzRpIC1YeVhWJKBnj5qq.jpg'},
    ]}
    autoPlay={true}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
    style ={styles.theSlider}
/>
  </View>
          
            <View style={styles.safeView}>
            
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >

                 <ImagedCarouselCard
          text={"Inception"}
  width={300}
  height={500}
  style={styles.aCarousel}
  shadowColor="#051934"
  source={{
    uri: "https://image.tmdb.org/t/p/original/8bxMHkuEzRpIC1YeVhWJKBnj5qq.jpg",
  }}
/>

<ImagedCarouselCard
          text={"Minions: The Rise of Gru"}
  width={300}
  height={500}
  style={styles.aCarousel}
  shadowColor="#051934"
  source={{
    uri: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/minions-the-rise-of-gru/images/regions/ca/onesheet.jpg",
  }}
/>
<ImagedCarouselCard
          text={"Frozen II"}
  
  style={styles.aCarousel}
  shadowColor="#051934"
  source={{
    uri: "https://lumiere-a.akamaihd.net/v1/images/p_frozen2_19644_4c4b423d.jpeg",
  }}
  shadowPaddingBottom={50}
/>
              </ScrollView>
            </View>

     


          

          

          <View style={styles.mvPage}>
          <Text style={styles.mvHeader}>Top 3 Movies</Text>
          </View>


          <View style={styles.aMv}>
          {Top3Movies.map((movie, index) => 
            <View>

              <Image 
                style={styles.mvPoster} 
                source={{uri: movie.poster}}
              />

              <Text 
                style={styles.mvId} 
                numberOfLines={1} 
              >
                Top : {movie.id}
              </Text>

              <Text 
              style={styles.mvTitle} 
              numberOfLines={1} 
              ellipsizeMode="tail"
              key={movie.title}
              >
                {movie.title}
              </Text>
              <Text style={styles.mvGenre} numberOfLines={1} ellipsizeMode="tail">{movie.genre}</Text>
            </View>
          )}
          </View>
        </ScrollView>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({
  safeView: {
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },

  theSlider :{
    flex: 0,
    width: 200,
    height:400,
    
    
  },

  aCarousel: {
    marginLeft: 50,
    marginRight:50,
    width: 300,
    height:500,
    marginBottom: 40,
    marginTop: 40,
  },

  mvPage: {
    fontSize: 25,
  },

  mvHeader: {
    backgroundColor: 'olive',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '20',
    padding: 20,
  },

  scrollContent: {
    flexDirection: 'column', 
    justifyContent: 'space-between',
  },

  aMv:{

    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%' ,
    backgroundColor: 'black',
  },

  mvPoster: {
    marginTop: 20,
    width: 120,
    height: 200,
    margin: 3,
    borderRadius: 10,
  },

  mvId: {
     fontSize: 20,
      color: 'white',
      width: 100,
      textAlign:'center',
      flexWrap: 'wrap',
      margin: 5,
    flexDirection: 'column',
  },

  mvTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 3,
    margin: 5,
    flexDirection: 'column',
    flex: 1,
    flexWrap: 'wrap',
    width: 100,
    textAlign:'center',
  },

  mvGenre: {
    color: '#BBBBBB',
    fontSize: 12,
    margin: 5,
    textAlign:'center',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection:'column',
    width: 100,
  },
});