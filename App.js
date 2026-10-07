import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('julia.smith@example.com');
  const [funFact, setFunFact] = useState('This is a cool fact about cats!');

  const handleContinue = () => {
    Alert.alert(
      'User',
      `${email} is logged in`
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#c4ddf1"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        <View style={styles.loginSection}>

          <Text style={styles.welcome}>
            Welcome{'\n'}Back
          </Text>

          <View style={styles.emailBox}>
            <Text style={styles.lock}>🔒</Text>

            <TextInput
              style={styles.emailInput}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Enter your email"
            />
          </View>

          <Text style={styles.loggedIn}>
            Logged in as:
          </Text>

          <Text style={styles.emailText}>
            {email}
          </Text>

          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueText}>
              Continue
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.profileSection}>

          <Text style={styles.smiley}>☺</Text>

          <Text style={styles.heading}>
            Tell us something{'\n'}about yourself
          </Text>

          <View style={styles.pinkCard}>

            <Text style={styles.smallTitle}>
              Something fun:
            </Text>

            <TextInput
              style={styles.factInput}
              value={funFact}
              onChangeText={setFunFact}
              placeholder="Tell us something fun"
            />

          </View>

          <View style={styles.yellowCard}>

            <Text style={styles.cardTitle}>
              Your Fun Fact:
            </Text>

            <View style={styles.factRow}>

              <Text style={styles.factText}>
                {funFact}
              </Text>

              <Text style={styles.cat}>
                🐈‍⬛
              </Text>

            </View>

          </View>

        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6df',
  },

  loginSection: {
    backgroundColor: '#c4ddf1',
    paddingHorizontal: 23,
    paddingTop: 25,
    paddingBottom: 40,
  },

  welcome: {
    fontSize: 36,
    fontWeight: '800',
    color: '#000',
    marginBottom: 25,
  },

  emailBox: {
    height: 48,
    borderWidth: 1,
    borderColor: '#75a6c8',
    borderRadius: 25,
    backgroundColor: '#e5eff9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  lock: {
    fontSize: 15,
    marginRight: 10,
  },

  emailInput: {
    flex: 1,
    fontSize: 14,
    color: '#222',
  },

  loggedIn: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 40,
    color: '#222',
  },

  emailText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 8,
    color: '#111',
  },

  continueButton: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 38,
  },

  continueText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },

  profileSection: {
    paddingHorizontal: 23,
    paddingTop: 45,
    paddingBottom: 50,
  },

  smiley: {
    fontSize: 32,
    color: '#333',
    marginBottom: 15,
  },

  heading: {
    fontSize: 27,
    fontWeight: '800',
    color: '#403b3b',
    marginBottom: 25,
  },

  pinkCard: {
    backgroundColor: '#ffc9cc',
    borderRadius: 18,
    padding: 15,
    marginBottom: 28,
  },

  smallTitle: {
    fontSize: 14,
    color: '#403333',
    marginBottom: 10,
  },

  factInput: {
    height: 40,
    backgroundColor: '#fff3f3',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#333',
  },

  yellowCard: {
    backgroundColor: '#ffe5a6',
    borderRadius: 18,
    padding: 18,
    minHeight: 135,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#403b3b',
    marginBottom: 15,
  },

  factRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  factText: {
    flex: 1,
    fontSize: 26,
    fontWeight: '800',
    color: '#403b3b',
  },

  cat: {
    fontSize: 40,
    marginLeft: 10,
  },
});