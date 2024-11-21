import {Button} from '@react-navigation/elements';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import * as React from 'react';
import {Text, View} from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </View>
  );
}

// ... other code from the previous section

// const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

// const SecondRoute = () => (
//   <View style={{flex: 1, backgroundColor: '#673ab7'}} />
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

// const routes = [
//   {key: 'first', title: 'First'},
//   {key: 'second', title: 'Second'},
// ];

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
];

function DetailsScreen() {
  // const layout = useWindowDimensions();
  // const [index, setIndex] = React.useState(0);
  // return (
  //   <TabView
  //     navigationState={{index, routes}}
  //     renderScene={renderScene}
  //     onIndexChange={setIndex}
  //     initialLayout={{width: layout.width}}
  //   />
  // );
  return (
    <FlashList
      data={DATA}
      renderItem={({item}) => <Text>{item.title}</Text>}
      estimatedItemSize={200}
    />
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
