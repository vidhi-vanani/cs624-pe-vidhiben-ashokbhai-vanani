import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

const userImage = require('../../assets/images/user.png');

const data = Array(6).fill({
  image: userImage,
  name: 'John Doe',
  occupation: 'React Native Developer',
  description:
    'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
  showThumbnail: true
});

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress} underlayColor="#4682b4">
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View>
          <Text style={styles.cardName}>{name}</Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: data
    };
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {
        [index]: { showThumbnail: { $set: showThumbnail } }
      })
    });
  };

  render() {
    const list = this.state.data.map((item, index) => {
      const { image, name, occupation, description, showThumbnail } = item;
      return (
        <ProfileCard
          key={'card-' + index}
          image={image}
          name={name}
          occupation={occupation}
          description={description}
          onPress={() => this.handleProfileCardPress(index)}
          showThumbnail={showThumbnail}
        />
      );
    });

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {list}
      </ScrollView>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 80
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 140,
    height: 180,
    margin: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 30,
    height: 30,
    borderRadius: 30,
    marginTop: 15,
    paddingTop: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 4
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 8
      }
    })
  },
  cardImage: {
    width: 20,
    height:20,
    marginTop: -10,
    paddingTop: 3
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 10,
    textAlign: 'center'
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 2,
    marginTop: 1
  },
  cardOccupation: {
    fontWeight: 'bold',
    fontSize: 10,
    marginVertical: 5,
    textAlign: 'center'
  },
  cardDescription: {
    fontStyle: 'italic',
    fontSize: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  cardThumbnail: {
    transform: [{ scale: 0.50 }]
  }
});
