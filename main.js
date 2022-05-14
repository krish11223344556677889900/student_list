name_of_the_student_array=[];

function submit()
{
    var display_student_array=[];
for(var j=1; j <=4;j++ )
{
   var name_of_the_student = document.getElementById("student_"+j).value;
   console.log(name_of_the_student);
   name_of_the_student_array.push(name_of_the_student);
}


console.log("name_of_the_student_array");

document.getElementById("Display_name_with_commas").innerHTML= name_of_the_student_array;

var length_name_of_the_students= name_of_the_student_array.length;
console.log(length_name_of_the_students);

for(var k=0; k < length_name_of_the_students;k++ )
{
   display_student_array.push("<h4>Name-" +name_of_the_student_array[k] + "</h4>");
   console.log(display_student_array);
}

console.log(display_student_array);
document.getElementById("Display_name_with_commas").innerHTML= display_student_array;

var remove_commas = display_student_array.join(" "); 
 console.log(remove_commas);
 document.getElementById("Display_name_without_commas").innerHTML = remove_commas;

 document.getElementById("submit_button").style.display="none";
}

function sorting()
{
 name_of_the_student_array.sort();
 console.log(name_of_the_student_array);

 var display_student_array_sorting=[""];

 var length_of_name_of_the_students_array=name_of_the_student_array.length;
 console.log(length_of_name_of_the_students_array);

 for(var n=0; n < length_of_name_of_the_students_array;n++ )
 {
    display_student_array_sorting.push("<h4>Name-" +name_of_the_student_array[n] + "</h4>");
    console.log(display_student_array_sorting);

    var remove_commas = display_student_array_sorting.join(" "); 
 console.log(remove_commas);
 
 document.getElementById("Display_name_without_commas").innerHTML = remove_commas;
 } 
}

function new_update_function()
{
   document.getElementById("Display_array").innerHTML="<h1>"+"Names-"+name_of_the_student_array+"</h1>"
}