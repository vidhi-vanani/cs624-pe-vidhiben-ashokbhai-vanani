# Hello World

## Input
There is no interactive user input required in this mobile application. The input is hardcoded directly into the code itself, i.e., within the `index.tsx` file. Three hardcoded static strings—i.e., the user's name, degree program, and school—are literally hardcoded into JSX through React Native Text components. These are the direct input for what appears on the screen. The application is kept basic, with no dynamic data or user-inputted inputs.

## Process
The reasoning in `index.tsx` handles the layout with React Native components and styling. There is a single View component that acts as a container and contains a yellow background with central alignment through Flexbox. Within this View, three Text components are used for the display of the values inserted. Styling is achieved through a StyleSheet object so that the content is easily readable and well formatted. The Expo environment bundles the TypeScript and React Native code, launches the development server, and supports live preview by either an emulator or a device.

## Output
The program creates a static mobile screen with a yellow color. In the center of the screen are three lines of text showing the user's name, degree program, and school. The layout is straight forward and visually confirms proper rendering.