import React from 'react';
import {Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CoreComponents = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('/workspaces/cs624-pe-vidhiben-ashokbhai-vanani/PE02-ReactnativeComponents/assets/images/icon.png')} style={styles.image} />
      
      <Text style={styles.label}>Which course did you like?</Text>
      <TextInput style={styles.input} placeholder="ex. CS624" placeholderTextColor="#888" />

      <Text style={styles.sectionHeader}>Core Requirements (24 credits)</Text>
      {[
        'CS 504 Software Engineering',
        'CS 506 Programming for Computing',
        'CS 519 Cloud Computing Overview',
        'CS 533 Computer Architecture',
        'CS 547 Secure Systems and Programs',
        'CS 622 Discrete Math and Algorithms for Computing',
        'DS 510 Artificial Intelligence for Data Science',
        'DS 620 Machine Learning & Deep Learning',
      ].map((course, index) => (
        <Text key={index} style={styles.courseText}>{course}</Text>
      ))}

      <Text style={styles.sectionHeader}>Depth of Study (6 credits)</Text>
      <Text style={styles.courseText}>CS 624 Full-Stack Development - Mobile App</Text>
      <Text style={styles.courseText}>CS 628 Full-Stack Development - Web App</Text>

      <Text style={styles.sectionHeader}>Capstone</Text>
      <Text style={styles.courseText}>CS 690 Master’s Capstone</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    padding: 10,
    marginTop: 20,
  },
  courseText: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default CoreComponents;
