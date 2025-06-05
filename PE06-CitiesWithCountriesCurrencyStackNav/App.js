// import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { LogBox } from 'react-native';

// LogBox.ignoreLogs([
//   'Non-serializable values were found in the navigation state',
// ]);

// import Cities from './src/City/Cities/Cities';
// import City from './src/City/Cities/City';
// import AddCity from './src/City/AddCity/AddCity';
// import { colors } from './src/City/theme';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function CitiesStackScreen({ navigation, route, cities, addCity, addLocation }) {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: colors.primary,
//         },
//         headerTintColor: '#fff',
//       }}
//     >
//       <Stack.Screen
//         name="Cities"
//         children={(props) => (
//           <Cities {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
//         )}
//       />
//       <Stack.Screen
//         name="City"
//         children={(props) => (
//           <City {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
//         )}
//       />
//     </Stack.Navigator>
//   );
// }

// export default class App extends Component {
//   state = {
//     cities: [],
//   };

//   addCity = (city) => {
//     this.setState((prevState) => ({
//       cities: [...prevState.cities, { ...city, locations: [] }],
//     }));
//   };

//   addLocation = (location, city) => {
//     const index = this.state.cities.findIndex((item) => item.id === city.id);
//     const updatedCity = { ...this.state.cities[index], locations: [...this.state.cities[index].locations, location] };

//     const cities = [
//       ...this.state.cities.slice(0, index),
//       updatedCity,
//       ...this.state.cities.slice(index + 1),
//     ];

//     this.setState({ cities });
//   };

//   render() {
//     return (
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen
//             name="CitiesNav"
//             children={(props) => (
//               <CitiesStackScreen
//                 {...props}
//                 cities={this.state.cities}
//                 addCity={this.addCity}
//                 addLocation={this.addLocation}
//               />
//             )}
//           />
//           <Tab.Screen
//             name="AddCity"
//             children={(props) => (
//               <AddCity
//                 {...props}
//                 cities={this.state.cities}
//                 addCity={this.addCity}
//                 addLocation={this.addLocation}
//               />
//             )}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { LogBox } from 'react-native';

// import Cities from './src/Cities/Cities';
// import City from './src/Cities/City';
// import AddCity from './src/AddCity/AddCity';
// import Countries from './src/Countries/Countries';
// import Country from './src/Countries/Country';
// import AddCountry from './src/AddCountry/AddCountry';
// import { colors } from './src/theme';


// LogBox.ignoreLogs([
//   'Non-serializable values were found in the navigation state',
// ]);

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function CitiesStackScreen({ navigation, cities, addCity, addLocation }) {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: colors.primary },
//         headerTintColor: '#fff',
//       }}
//     >
//       <Stack.Screen name="Cities">
//         {(props) => <Cities {...props} cities={cities} addCity={addCity} addLocation={addLocation} />}
//       </Stack.Screen>
//       <Stack.Screen name="City">
//         {(props) => <City {...props} cities={cities} addCity={addCity} addLocation={addLocation} />}
//       </Stack.Screen>
//     </Stack.Navigator>
//   );
// }

// export default class App extends Component {
//   state = {
//     cities: [],
//     countries: [],
//   };

//   addCity = (city) => {
//     this.setState((prevState) => ({
//       cities: [...prevState.cities, { ...city, locations: [] }],
//     }));
//   };

//   addLocation = (location, city) => {
//     const index = this.state.cities.findIndex((item) => item.id === city.id);
//     const updatedCity = {
//       ...this.state.cities[index],
//       locations: [...this.state.cities[index].locations, location],
//     };

//     const cities = [
//       ...this.state.cities.slice(0, index),
//       updatedCity,
//       ...this.state.cities.slice(index + 1),
//     ];

//     this.setState({ cities });
//   };

//   addCountry = (country) => {
//     this.setState((prevState) => ({
//       countries: [...prevState.countries, country],
//     }));
//   };

//   render() {
//     const { cities, countries } = this.state;

//     return (
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="CitiesNav">
//             {(props) => (
//               <CitiesStackScreen
//                 {...props}
//                 cities={cities}
//                 addCity={this.addCity}
//                 addLocation={this.addLocation}
//               />
//             )}
//           </Tab.Screen>
//           <Tab.Screen name="AddCity">
//             {(props) => (
//               <AddCity
//                 {...props}
//                 cities={cities}
//                 addCity={this.addCity}
//                 addLocation={this.addLocation}
//               />
//             )}
//           </Tab.Screen>
//           <Tab.Screen name="Countries">
//             {(props) => <Countries {...props} countries={countries} />}
//           </Tab.Screen>
//           <Tab.Screen name="AddCountry">
//             {(props) => <AddCountry {...props} addCountry={this.addCountry} />}
//           </Tab.Screen>
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import Country from './src/Countries/Country';
import AddCountry from './src/AddCountry/AddCountry';
import { colors } from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ cities, addCity, addLocation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Cities"
        children={(props) => (
          <Cities {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      />
      <Stack.Screen
        name="City"
        children={(props) => (
          <City {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      />
    </Stack.Navigator>
  );
}

function CountriesStackScreen({ navigation, route, countries, addCountry, addCurrency }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Countries"
        children={(props) => (
          <Countries {...props} countries={countries} addCountry={addCountry} addCurrency={addCurrency} />
        )}
      />
      <Stack.Screen
        name="Country"
        children={(props) => (
          <Country {...props} countries={countries} addCountry={addCountry} addCurrency={addCurrency} />
        )}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    cities: [],
    countries: [],
  };

  addCity = (city) => {
    this.setState((prevState) => ({
      cities: [...prevState.cities, { ...city, locations: [] }],
    }));
  };

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex((item) => item.id === city.id);
    const updatedCity = {
      ...this.state.cities[index],
      locations: [...this.state.cities[index].locations, location],
    };
    const cities = [
      ...this.state.cities.slice(0, index),
      updatedCity,
      ...this.state.cities.slice(index + 1),
    ];
    this.setState({ cities });
  };

  addCountry = (country) => {
    this.setState((prevState) => ({
      countries: [...prevState.countries, { ...country, currencies: [] }],
    }));
  };

  addCurrency = (currency, country) => {
    const index = this.state.countries.findIndex((item) => item.id === country.id);
    const updatedCountry = {
      ...this.state.countries[index],
      currencies: [...this.state.countries[index].currencies, currency],
    };
    const countries = [
      ...this.state.countries.slice(0, index),
      updatedCountry,
      ...this.state.countries.slice(index + 1),
    ];
    this.setState({ countries });
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="CitiesNav"
            children={(props) => (
              <CitiesStackScreen
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="AddCity"
            children={(props) => (
              <AddCity
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="CountriesNav"
            children={(props) => (
              <CountriesStackScreen
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
                addCurrency={this.addCurrency}
              />
            )}
          />
          <Tab.Screen
            name="AddCountry"
            children={(props) => (
              <AddCountry
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
                addCurrency={this.addCurrency}
              />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
