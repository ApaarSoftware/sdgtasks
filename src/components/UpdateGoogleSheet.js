
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "./UpdateGoogleSheet.css"
import 'react-datepicker/dist/react-datepicker.css';
// import { useLocation } from 'react-router-dom';

function UpdateGoogleSheet() {
 
    const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

//   const location = useLocation();
  const queryParams = new URLSearchParams(document.location.search);
  const TaskId = queryParams.get('TaskId');
//   const TaskDesc = queryParams.get('TaskDesc');
  const cellNo = queryParams.get('CellNo');
  console.log('queryParams TaskId : ' + TaskId);
  console.log('queryParams cellNo : ' + cellNo);


    const handleSubmit = (event) => {
        //document.getElementById("updateForm").addEventListener("submit", function(event) {
            event.preventDefault();
            var formData = new FormData(event.target);
            // console.log('event.target = '+event.target)
            // console.log('formData = '+formData)
            // console.log('cellNo = '+cellNo)
            // console.log('completedCellNo = '+completedCellNo)
            // formData.cellAddress = cellNo
            // console.log('formData11 = '+formData)

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
                        <label>Update your Task Deadline</label>
                    </div>
                     
                    <div className="new-expense__control">
                        <label>Task Number:</label>
                        <label>{TaskId}</label>
                        <table>
                            <tbody>
                                <tr hidden>
                                    <td>
                                        <input type="text" id="cellAddress" name="cellAddress" value={cellNo == null ? '' : cellNo}/>
                                    </td> 
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                    
                    <div className="new-expense__control">
                        <label>Date:</label>
                        {/* <input type="date"  min="2019-01-01" max="2023-12-31" /> */}
                        <DatePicker 
                        id='data'
                        name='data'
                        selected={selectedDate == null ? '' : selectedDate}
                        onChange={handleDateChange}
                        showTimeSelect
                        //timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="dd/MM/yyyy hh:mm aa"  />
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

export default UpdateGoogleSheet;