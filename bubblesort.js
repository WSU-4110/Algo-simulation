var array_size_input=document.getElementById('size_of_array');
array_size=array_size_input.value;
var create_random_array=document.getElementById("create_random_array");
var start_sorting=document.getElementById("start_sort");

var random_array_button=document.getElementById("random_array");
var user_array_button=document.getElementById("user_array");
var array_integer_field=document.getElementById("array_integer");
var add_integer_button=document.getElementById("add_integer");

var log_box=document.getElementById("log_box");
var pseudocode_box=document.getElementById("pseudocode_box");

var view_log_button=document.getElementById("view_log");
var view_pseudocode_button=document.getElementById("view_pseudocode");

//for log box
var firstLogBox=document.getElementById("first_box");
var secondLogBox=document.getElementById("second_box");
var thirdLogBox=document.getElementById("third_box");
var fourthLogBox=document.getElementById("fourth_box");
var fifthLogBox=document.getElementById("fifth_box");
//for pseudocode box
var firstPseudoCodeBox=document.getElementById("first_pseudocode_box");
var secondPseudoCodeBox=document.getElementById("second_pseudocode_box");
var thirdPseudoCodeBox=document.getElementById("third_pseudocode_box");
var fourthPseudoCodeBox=document.getElementById("fourth_pseudocode_box");

//log and pseudocode objects
let pseudoCodeBox = new PseudoBox(firstPseudoCodeBox, secondPseudoCodeBox, thirdPseudoCodeBox, fourthPseudoCodeBox);
let logBox = new LogBox(firstLogBox, secondLogBox, thirdLogBox, fourthLogBox, fifthLogBox);

var user_input_array_index = 0;
var user_input_int=document.getElementById("array_integer");
var user_int = 0;

var array_bar_sizes=[];
var array_divs=[];

array_integer_field.disabled=true;
add_integer_button.disabled=true;
pseudocode_box.style.display="none";

add_integer_button.addEventListener('click', create_array_user);

random_array_button.addEventListener('change', function(e)
{
  if (this.checked) {
    array_section.innerHTML="";
    array_size=array_size_input.value;
    array_size_input.disabled=false;
    create_random_array.disabled=false;
    array_integer_field.disabled=true;
    add_integer_button.disabled=true;

  }
});

user_array_button.addEventListener('change', function(e)
{
  if (this.checked) {
    array_section.innerHTML="";
    user_input_array_index = 0;
    array_size=0;
    array_integer_field.disabled=false;
    add_integer_button.disabled=false;
    array_size_input.disabled=true;
    create_random_array.disabled=true;
  }
});

view_log_button.addEventListener('change', function(e)
{
  if (this.checked) {
    pseudocode_box.style.display="none";
    log_box.style.display="block";
  }
});

view_pseudocode_button.addEventListener('change', function(e)
{
  if (this.checked) {
    log_box.style.display="none";
    pseudocode_box.style.display="block";
  }
});

var array_section=document.getElementById("array_section");
array_section.style="flex-direction:row";

create_random_array.addEventListener("click", create_array);
array_size_input.addEventListener("input", change_array_size);

function create_array()
{
  array_section.innerHTML="";

  for(var i = 0; i < array_size; i++)
  {
    array_bar_sizes[i]=Math.floor(Math.random() * 90) + 1;
    array_divs[i]=document.createElement("div");
    array_section.appendChild(array_divs[i]);
    array_divs[i].style=" margin: 0% 0.1%; background-color:blue; width:" + (100/array_size-0.2) + "%; height:" + (array_bar_sizes[i]) + "%;";
  }
}

function create_array_user()
{
  array_integer_field=document.getElementById("array_integer");

  user_int=parseInt(array_integer_field.value);

  if(Number.isInteger(user_int) && user_int > 0)
  {

    array_bar_sizes[user_input_array_index]=user_int;
    array_size++;
    user_input_array_index++;

    array_section.innerHTML="";
    for(var i = 0; i < array_size; i++)
    {
      array_divs[i]=document.createElement("div");
      array_section.appendChild(array_divs[i]);
      array_divs[i].style=" margin: 0% 0.1%; background-color:blue; width:" + (100/array_size-0.2) + "%; height:" + (array_bar_sizes[i]) + "%;";
    }
  }
}

function change_array_size()
{
  array_size=array_size_input.value;
  create_array();
}

window.onload=change_array_size();

start_sorting.addEventListener("click", run_sorting_algorithm);

function disable_buttons()
{
  array_size_input.disabled=true;
  create_random_array.disabled=true;
  start_sorting.disabled=true;
  array_integer_field.disabled=true;
  add_integer_button.disabled=true;
  random_array_button.disabled=true;
  user_array_button.disabled=true;

}

var delay=200;
var c_delay=0;

function update_div(section, height, color)
{
  setTimeout(function(){
    section.style=" margin:0% 0.1%; width:"+ (100/array_size-0.2) + "%; height:" + height + "%; background-color:" + color + ";";
  },c_delay+=delay);
}

function enable_buttons()
{
  setTimeout(function(){
    random_array_button.disabled=false;
    user_array_button.disabled=false;
    if(random_array_button.checked)
    {
    array_size_input.disabled=false;
    create_random_array.disabled=false;
    start_sorting.disabled=false;
  }
  else if(user_array_button.checked)
  {
    array_integer_field.disabled=false;
    add_integer_button.disabled=false;
    start_sorting.disabled=false;
  }
  },c_delay+=delay);
}

function bubble_sort(pseudoCodeBox, logBox)
{
  c_delay=0;
  for(var i=0; i<array_size-1; i++)
  {
    pseudoCodeBox.updatePseudoCode(1, c_delay+=delay);
    for(var j=0; j<array_size-i-1;j++)
    {
      pseudoCodeBox.updatePseudoCode(2, c_delay+=delay);
      update_div(array_divs[j],array_bar_sizes[j], "yellow");
      logBox.updateLogBox(array_bar_sizes[j], array_bar_sizes[j+1], "Comparing", c_delay+=delay);


      if(array_bar_sizes[j]>array_bar_sizes[j+1])
      {

        pseudoCodeBox.updatePseudoCode(3, c_delay+=delay);
        logBox.updateLogBox(array_bar_sizes[j], array_bar_sizes[j+1], "Swapping", c_delay+=delay);
        update_div(array_divs[j], array_bar_sizes[j], "red");
        update_div(array_divs[j+1],array_bar_sizes[j+1], "red");

        pseudoCodeBox.updatePseudoCode(4, c_delay+=delay);
        var temp=array_bar_sizes[j];
        array_bar_sizes[j]=array_bar_sizes[j+1];
        array_bar_sizes[j+1]=temp;

        update_div(array_divs[j], array_bar_sizes[j], "red");
        update_div(array_divs[j+1], array_bar_sizes[j+1], "red");


      }
      pseudoCodeBox.updatePseudoCode(2, c_delay+=delay);
      update_div(array_divs[j], array_bar_sizes[j], "blue");
    }
    pseudoCodeBox.updatePseudoCode(1, c_delay+=delay);
    update_div(array_divs[j], array_bar_sizes[j], "green");
  }

  update_div(array_divs[0], array_bar_sizes[0], "green");
  pseudoCodeBox.updatePseudoCode(1, c_delay+=delay);
  enable_buttons();
}


function run_sorting_algorithm()
{
  disable_buttons();
  bubble_sort(pseudoCodeBox, logBox);
}
