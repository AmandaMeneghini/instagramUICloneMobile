import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: this.props.data,
    };
  }

  render() {
    return (
      <View style={styles.areaFeed}>

        <View style={styles.viewProfile}>
          <Image
            source={{uri: this.state.feed.imgperfil}}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>{this.state.feed.nome}</Text>
        </View>

        <Image
          resizeMode='cover'
          style={styles.postImage}
          source={{uri: this.state.feed.imgPublicacao}}
        />

        <View style={styles.areaBtn}>
          <TouchableOpacity>
            <Image
            source={require('../images/like.png')}
            style={styles.interactionIcons}
             />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sendIcon}>
            <Image
            source={require('../images/send.png')}
            style={styles.interactionIcons}
             />
          </TouchableOpacity>
        </View>

        <View style={styles.footerPostArea}>
          <Text style={styles.footerPostUserName}>
            {this.state.feed.nome}
          </Text>

          <Text style={styles.footerPostDescription}>
            {this.state.feed.descricao}
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed: {},
  userName: {
    fontSize: 15,
    textAlign: 'left',
    color: '#000',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  viewProfile: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
    gap: 8
  },
  postImage: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  interactionIcons: {
    width: 28,
    height: 28,
  },
  sendIcon: {
    paddingLeft: 5
  },
  footerPostArea: {
    flexDirection: 'row',
    alignItems: 'center',
  }, 
  footerPostDescription: {
    paddingLeft: 5,
    fontSize: 12,
    color: '#000'
  },
  footerPostUserName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  }  
});

export default ProductList;
