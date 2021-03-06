// Setup stuff for the CSRF Token/post requests
// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});
// End CSRF stuff

function deleteSchool(list) {
    // Add axjax thingy

    var schoolName = $(list).closest('tr').find(".school-name").html();
    var schoolAddress = $(list).closest('tr').find(".school-address").html();
     var getUrl = window.location;
     var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
     var urlSubmit = baseUrl + "/delete-school";
     var data = {"school_name": schoolName, "school_address": schoolAddress};
     // var data ={
     //     "school_info": schoolJSON
     // }; 
     $.ajax({  
         type: "POST",
         url: urlSubmit,
         dataType: "json",
         data      : data,
         success: function(response){
             console.log("working?");
             console.log(response);
         }
     });

     $(list).closest('tr').remove();
}
function deleteStudent(list) {
    // Add axjax thingy

    var studentName = $(list).closest('tr').find(".student-name").html();
    var emailAddress = $(list).closest('tr').find(".email-address").html();
    var studentSchool = $(list).closest('tr').find(".student-school").html();
     var getUrl = window.location;
     var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
     var urlSubmit = baseUrl + "/delete-student";
     var data = {'email': emailAddress};
     // var data ={
     //     "school_info": schoolJSON
     // }; 
     $.ajax({  
         type: "POST",
         url: urlSubmit,
         dataType: "json",
         data      : data,
         success: function(response){
             console.log("working?");
             console.log(response);
         }
     });

     $(list).closest('tr').remove();
}
function acceptStudentRequest(list) {
    // Add axjax thingy

    var studentEmail = $(list).closest('tr').find(".student-email").html();
    console.log(studentEmail);
    console.log("help");
     var getUrl = window.location;
     var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
     var urlSubmit = baseUrl + "/accept-student-account-request";
     var data = {"student_email": studentEmail};
     // var data ={
     //     "school_info": schoolJSON
     // }; 
     $.ajax({  
         type: "POST",
         url: urlSubmit,
         dataType: "json",
         data      : data,
         success: function(response){
             console.log("working?");
             console.log(response);
         }
     });

     $(list).closest('tr').remove();
}
function denyStudentRequest(list) {
    // Add axjax thingy

    var studentEmail = $(list).closest('tr').find(".student-email").html();
     var getUrl = window.location;
     var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
     var urlSubmit = baseUrl + "/deny-student-account-request";
     var data = {"student_email": studentEmail};
     // var data ={
     //     "school_info": schoolJSON
     // }; 
     $.ajax({  
         type: "POST",
         url: urlSubmit,
         dataType: "json",
         data      : data,
         success: function(response){
             console.log("working?");
             console.log(response);
         }
     });
     $(list).closest('tr').remove();
}
function acceptAll(){
  $('#studentAccountRequest tr').each(function (i, row) { 
    if(i != '0'){
        acceptStudentRequest($(row).find(".accept-req").first());
    }
  })
}
function createAcctReqList() { 
  $('#manageAccountReq').append('<table></table>');
  var table = $('#manageAccountReq').children();
  
  table.append('<tr><td><b>Name</b></td>\
    <td><b>ID</b></td>\
    <td><b>School</b></td>\
    <td><b>Accept</b></td>\
    <td><b>Deny</b></td></tr>');
}
function createManageSchool() {  
//  $('#manageSchool').append('<table></table>');
//  var table = $('#manageSchool').children();
//  
//  table.append('<tr><td><b>Name</b></td>\
//    <td><b>School Address</b></td>\
//    <td><b>View/Edit</b></td>\
//    <td><b>Delete</b></td>');
//
//  for(var i = 0; i < 1; i++){
//    table.append('<tr><td class="schoolName">SBU</td>\
//      <td class = "schoolAddress">Stony Brook, NY 11794</td>\
//      <td><input type="button" class="btn" value = "Edit" \
//        onClick=""></button></td>\
//      <td><input type="button" class="btn" value = "Delete" \
//        onClick="Javacsript:deleteListRow(this)"></td>');
//  }
}
function createManageStudent() {  
  // $('#manageStudents').append('<table></table>');
  // var table = $('#manageStudents').children();
  
  // table.append('<tr><td><b>Name</b></td>\
  //   <td><b>Email</b></td>\
  //   <td><b>School</b></td>\
  //   <td><b>Delete</b></td></tr>');

  // table.append('<tr><td>Joe Poodle</td>\
  //   <td>poodle@gmail.com</td>\
  //   <td>MSC</td>\
  //   <td><input type="button" class="btn" value = "Delete" \
  //     onClick="Javacsript:deleteListRow(this)"></td></tr>');
}
$( document ).ready(function() {
  //createAcctReqList();
  //createManageSchool();
  //createManageStudent();
  $(".edit-btn").click(function(){ 
  });
});
