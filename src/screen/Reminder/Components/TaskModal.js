// components/TaskModal.js 
import React,{useState} from "react"; 
import { 
    View, 
    Text, 
    TextInput, 
    Button, 
    Modal, 
    SafeAreaView,
    ScrollView,
    StatusBar,
} from "react-native"; 
import {Picker} from '@react-native-picker/picker';
import styles from "../styles"; 
import DatePicker from "react-native-modern-datepicker"; 
  
const TaskModal = ({ 
    modalVisible, 
    task, 
    setTask, 
    handleAddTask, 
    handleCancel, 
    validationError, 
    // selectedPriority, // New prop for selected priority
    // setSelectedPriority, // New prop for updating selected priority
}) => { 

    //const [selectedPriority, setSelectedPriority] = useState("urgent");
    return ( 
        

           
        <Modal 
            visible={modalVisible} 
            animationType="slide"
            transparent={false}> 
       

            {/* Container for the modal */} 
            <ScrollView style={styles.taskList}> 
                <TextInput 
                    style={styles.input} 
                    placeholder="Title"
                    value={task.title} 
                    onChangeText={(text) => 
                        setTask({ ...task, title: text }) 
                    } 
                    // Update the title when text changes/ 
                   ></TextInput>   
                <TextInput 
                    style={styles.input} 
                    placeholder="Description"
                    value={task.description} 
                    onChangeText={(text) => 
                        setTask({ 
                            ...task, 
                            description: text, 
                        }) 
                    }/> 
                      
                <Text style={styles.inputLabel}> 
                    Deadline: 
                </Text> 
                <DatePicker 
                    style={styles.datePicker} 
                    mode="date"
                    selected={task.deadline} 
                    onDateChange={(date) => 
                        setTask({ ...task, deadline: date }) 
                    }/> 
                      
                {validationError && ( 
                    <Text style={styles.errorText}> 
                        Please fill in all fields correctly. 
                    </Text> 
                )} 
{/* Dropdown list for priority selection */}

                    <Text style={styles.inputLabel}>Priority:</Text>
                    <Picker
                        selectedValue={task.importance}
                        onValueChange={(itemValue) => setTask({ ...task, importance: itemValue })}
                    >
                        <Picker.Item label="Urgent" value="urgent" />
                        <Picker.Item label="Important" value="important" />
                        <Picker.Item label="Normal" value="normal" />
                    </Picker>
                

                       
                <Button 
                  
                    // Display "Update" when editing an existing  
                    // task, "Add" when adding a new task 
                    title={task.id ? "Update" : "Add"} 
                    // Call the handleAddTask function  
                    // when the button is pressed 
                    onPress={handleAddTask} 
                    // Set the button color 
                    color="#007BFF"/> 
                      
                <Button 
                    title="Cancel"
                    onPress={handleCancel} 
                    color="#FF3B30" /> 
                        
            </ScrollView> 
            </Modal>
                
    ); 
}; 


  
export default TaskModal;