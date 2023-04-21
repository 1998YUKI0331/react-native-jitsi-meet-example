import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

function App() {
  const [showJitsiView, setShowJitsiView] = useState(false);

  useEffect(() => {
    if (showJitsiView)
      setTimeout(() => {
        const url = 'https://meet.jit.si/exemple';
        const userInfo = {
          displayName: 'User',
          email: 'user@example.com',
          avatar: 'https:/gravatar.com/avatar/abc123',
        };
        JitsiMeet.call(url, userInfo);
      }, 1000);
  }, [showJitsiView]);

  if (showJitsiView) {
    return (
      <JitsiMeetView
        style={styles.jitsiMeetView}
        onConferenceTerminated={_ => setShowJitsiView(false)}
        onConferenceJoined={e => console.log(e.nativeEvent)}
        onConferenceWillJoin={e => console.log(e.nativeEvent)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setShowJitsiView(true)}
        style={{backgroundColor: 'pink', padding: 30}}>
        <Text>Start Jitsi as a RN View</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jitsiMeetView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default App;
