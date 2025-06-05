## PE06-CitiesWithCountriesCurrencyStackNav

## Input

The Countries app lets one set both country and currency name to be stored in a database. This is done through a very simple form under the `AddCountry` tab. Both fields must be entered before submission is accepted. Each newly entered record receives a unique ID and makes its way into a list of countries maintained in the state.

## Process

The app is built in React Native with React Navigation, developing a stack-based flow between the Countries list and Country detail screens. Upon selecting a country, users see its currencies but can also add some in case they wish to do so. All UI components are styled with a shared theme, giving a nice-consistent feel. This state keeps updating dynamically whenever we add countries or add currencies.

## Output
Users get a scrollable list of stored countries alongside their currencies. Tapping opens the detail view of that country where currencies attached to it are displayed. This app serves the PE section to provide an easy-to-use and clean interface for managing country-currency data.