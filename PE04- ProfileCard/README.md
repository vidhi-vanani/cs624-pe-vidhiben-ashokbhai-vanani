## Profile Card

## Input
This React Native application initializes with an array of six identical user profile objects, each containing an image, name, occupation, description, and a boolean showThumbnail flag. These inputs are stored in the component state and passed as props to individual ProfileCard components.

## Process
The App component is a list of ProfileCards within a Scrollview. Each card takes props for rendering and interaction. A card press invokes handleProfileCardPress(), which toggles the showThumbnail value of the targeted card with immutability-helper. Conditional styling then displays the card image full size or as a thumbnail (transform: scale(0.50)) accordingly.

## Output
The app concludes by showing a responsive scrollable grid of profile cards. The clicking of any card toggles the thumbnail state, thus revealing some feedback at the UI level. The styling used produces a consistently good-looking UI layout on Android as well as iOS.