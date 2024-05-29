import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import moment from 'moment';


const EVENT_TITLE = 'Lunch';
const TIME_NOW_IN_UTC = moment.utc();

const utcDateToString = momentInUTC => {
  let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  return s;
};

const addToCalendar = (title, startDateUTC) => {
  const eventConfig = {
    title,
    startDate: utcDateToString(startDateUTC),
    endDate: utcDateToString(moment.utc(startDateUTC).add(1, 'hours')),
    notes:"",
    navigationBarIOS: {
      tintColor: 'orange',
      backgroundColor: 'green',
      titleColor: '#120E43',
    },
  };

  AddCalendarEvent.presentEventCreatingDialog(eventConfig)
    .then(eventInfo => {
      alert('eventInfo -> ' + JSON.stringify(eventInfo));
    })
    .catch(error => {
      // handle error such as when user rejected permissions
      alert('Error -> ' + error);
    });
};

const editCalendarEventWithId = eventId => {
  if (!eventId) {
    alert('Please Insert Event Id');
    return;
  }
  const eventConfig = {
    eventId,
  };

  AddCalendarEvent.presentEventEditingDialog(eventConfig)
    .then(eventInfo => {
      alert('eventInfo -> ' + JSON.stringify(eventInfo));
    })
    .catch(error => {
      alert('Error -> ' + error);
    });
};

const showCalendarEventWithId = eventId => {
  if (!eventId) {
    alert('Please Insert Event Id');
    return;
  }
  const eventConfig = {
    eventId,
    allowsEditing: true,
    allowsCalendarPreview: true,
    navigationBarIOS: {
      tintColor: 'orange',
      backgroundColor: 'green',
    },
  };

  AddCalendarEvent.presentEventViewingDialog(eventConfig)
    .then(eventInfo => {
      alert('eventInfo -> ' + JSON.stringify(eventInfo));
    })
    .catch(error => {
      alert('Error -> ' + error);
    });
};

export default function Calendar() {
  const [title, setTitle] = useState('');
  //const [notes, setNotes] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Add your task to calendar</Text>
      <Text style={styles.heading}>
        {/* Event title: {EVENT_TITLE}
        {'\n'} */}
        Event Date Time: {moment.utc(TIME_NOW_IN_UTC).local().format('lll')}
      </Text>

      <TextInput
        style={styles.inputStyle}
        placeholder="enter task name"
        onChangeText={title => setTitle(title)}
        value={title}
      />
            {/* <TextInput
        style={styles.inputStyle}
        placeholder="enter task detail"
        onChangeText={notes => setNotes(notes)}
        value={notes}
      /> */}
            <TouchableOpacity
        style={[styles.buttonStyle, {minWidth: '100%'}]}
        onPress={() => {
          addToCalendar(title, TIME_NOW_IN_UTC);
        }}>
        <Text style={styles.buttonTextStyle}>Add Task to Calendar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#120E43',
    padding: 16,
    flex:1,
  },
  heading: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  buttonStyle: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#F4BE2C',
    margin: 15,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  buttonHalfStyle: {
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 10,
    flex: 1,
  },
  titleStyle: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  inputStyle: {
    height: 40,
    minWidth: '100%',
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#ffffff',
  },
});
