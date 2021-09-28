import Carousel, {Pagination} from 'react-native-snap-carousel';
import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

class MyCarousel extends Component {
  state = {
    entries: [
      {
        img: require('../../assets/mobileToilet.jpg'),
        text: 'Household Waste',
      },
      {
        img: require('../../assets/officeWaste.jpg'),
        text: 'Office Waste',
      },
      {img: require('../../assets/medicalWaste.jpg'), text: 'Medical Waste'},
      {
        img: require('../../assets/industrialWaste.jpg'),
        text: 'Industrial Waste',
      },
    ],
    activeSlide: 0,
  };

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'white',
          // borderRadius: 10,
          // width: '100%',
          height: '100%',
        }}>
        {/* <View style={{backgroundColor: 'white'}}>
          <Text style={{alignSelf: 'center', height: 20, color: '#0b8467'}}>
            {item.text}
          </Text>
        </View> */}
        <Image
          source={item.img}
          style={{
            width: viewportWidth,
            alignSelf: 'center',
            height: 350,
            // borderRadius: 10,
          }}
        />
      </View>
    );
  }

  get pagination() {
    const {entries, activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{marginTop: -20}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#0b8647',
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#d6d1d1',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          onSnapToItem={i => this.setState({activeSlide: i})}
          autoplay={true}
          enableMomentum={false}
          lockScrollWhileSnapping={true}
          loop={true}
          containerCustomStyle={{flex: 1}}
          slideStyle={{width: viewportWidth}}
        />
        {/* {this.pagination} */}
      </View>
    );
  }
}

export default MyCarousel;
