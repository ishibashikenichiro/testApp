import React, { Component } from 'react'
import {AppRegistry, Image ,View, ScrollView, Text, StatusBar ,Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './example/src/styles/SliderEntry.style';
import SliderEntry from './example/src/components/SliderEntry';
import styles from './example/src/styles/index.style';

const screen={
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

const ENTRIES1 = [
    {
        title: 'Happy',
        illustration: 'assets_happy'
    },
    {
        title: 'Grad',
        illustration: 'assets_grad'
    },
    {
        title: 'Sorrow',
        illustration: 'assets_sorrow'
    },
    {
        title: 'Peaceful',
        illustration: 'assets_peaceful'
    },
    {
        title: 'Painful',
        illustration: 'assets_painful'
    },
    {
        title: 'Angry',
        illustration: 'assets_angry'
    }
];


export default class Swipertest extends Component {
    getSlides (entries) {
        if (!entries) {
            return false;
        }

        return entries.map((entry, index) => {
            return (
                <SliderEntry
                  key={`carousel-entry-${index}`}
                  even={(index + 1) % 2 === 0}
                  {...entry}
                />
            );
        });
    }

    render() {
            return (
                <View>
                    <Carousel
                      sliderWidth={sliderWidth}
                      itemWidth={itemWidth}
                      firstItem={1}
                      inactiveSlideScale={0.94}
                      inactiveSlideOpacity={0.6}
                      enableMomentum={false}
                      containerCustomStyle={styles.slider}
                      contentContainerCustomStyle={styles.sliderContainer}
                      showsHorizontalScrollIndicator={false}
                      snapOnAndroid={true}
                      removeClippedSubviews={false}
                    >
                        { this.getSlides(ENTRIES1) }
                    </Carousel>
                </View>
            );
      }
}

AppRegistry.registerComponent('Swipertest', () => Swipertest);