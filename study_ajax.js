/* Using JSONPlaceholder Fake Online REST API for Testing and Prototyping */
 var xhr = new XMLHttpRequest();
 xhr.open("get", "https://jsonplaceholder.typicode.com/users",true);
 // Performing AJAX call on a click of button
 document.getElementById("populate").addEventListener("click",function(){
     xhr.send();
  });
      
  /* full response is recieved if readyState is 4 */

  xhr.onreadystatechange = function() {
       
  if (xhr.readyState == 4) {
  // Get request is success,then
     if (xhr.status == 200) {
            var result_data = JSON.parse(xhr.responseText);
            console.log(result_data); 
            var html_content = "";
            for (i = 0; i < result_data.length; ++i) {
              var current_record = result_data[i];
             // Populating data in table body 
              html_content =
                html_content +
                "<tr><td>" +
                current_record.id +
                "</td> <td>" +
                current_record.name +
                "</td><td>" +
                current_record.username +
                "</td><td>" +
                current_record.email +
                "</td></tr>";
         }
            document.getElementById("result_area").innerHTML = html_content;
          }
          else{
            alert("Error");
          }
        }
      }
