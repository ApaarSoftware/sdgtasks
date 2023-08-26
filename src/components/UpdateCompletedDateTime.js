
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "./UpdateGoogleSheet.css"
import 'react-datepicker/dist/react-datepicker.css';
// import { useLocation } from 'react-router-dom';

function UpdateCompletedDateTime() {
 
    const [selectedDate, setSelectedDate] = useState(null);
    // const [selectedStatusValue, setSelectedStatusValue] = useState('');

  const handleDropdownChange = (e) => {
    console.log('handleDropdownChange e.target.value = '+ e.target.value)
    if(e.target.value === "Completed")
    {
      const dt = new Date().toLocaleString();
      const currDate = moment(dt).format("DD/MM/YYYY hh:mm a")
      console.log('completd currDate = ' + currDate);
      setSelectedDate(currDate);
    }
    else{
      // console.log('in else condition')
      setSelectedDate('');
    }
    
  };

//   const location = useLocation();
  const queryParams = new URLSearchParams(document.location.search);
  const TaskId = queryParams.get('TaskId');
//   const TaskDesc = queryParams.get('TaskDesc');
  const completedCellNo = queryParams.get('completedCellNo');
  console.log('queryParams TaskId : ' + TaskId);
  console.log('queryParams completedCellNo : ' + completedCellNo);


    const handleSubmit = (event) => {
        //document.getElementById("updateForm").addEventListener("submit", function(event) {
            event.preventDefault();
            var formData = new FormData(event.target);

            fetch("https://script.google.com/macros/s/AKfycbxFHeTViisNolNk_p6GpVvkenep3VSupONveE2cDqZ-MjeQm7etdDanx0Ut-y8J1V4jWA/exec", {
              method: "POST",
              body: formData,
              mode:'no-cors'
            })
            .then(response => response.text())
            .then(data => {
              console.log(data); // You can handle the response here
            })
            .catch(error => {
              console.error("Error:", error);
            });
          //}
          //);
      }

    return (
         
          <div className="new-expense">
            <form id="updateForm" onSubmit={handleSubmit}>
                 
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Update your Task Status</label>
                    </div>
                     
                    <div className="new-expense__control">
                        <label>Task Number:</label>
                        <label>{TaskId}</label>
                        <table>
                            <tbody>
                                <tr hidden>
                                    <td>
                                        <input type="text" id="cellAddress" name="cellAddress" value={completedCellNo}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                    
                    <div className="new-expense__control">
                        <label>Status:</label>
                        <select 
                            // value={selectedStatusValue}
                            onChange={handleDropdownChange}
                            >
                            <option value="SelectTaskStatus">Select Task Status</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <input type="text" id="data" name="data" value={selectedDate}/>
                        {/* <DatePicker 
                        id='data'
                        name='data'
                        selected={selectedDate}
                        onChange={handleDateChange}
                        showTimeSelect
                        //timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="dd/MM/yyyy hh:mm aa"  /> */}
                    </div>

                    

                </div>

                

                <div className="new-expense__actions">
                    <label>&nbsp;</label>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" >Update Excel</button>
                </div>
            </form>

        </div>  
        
    );

    
}

export default UpdateCompletedDateTime;