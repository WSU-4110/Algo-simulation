var array_size_input=document.getElementById('size_of_array');
array_size=array_size_input.value;
var create_random_array=document.getElementById("create_random_array");
var start_sorting=document.getElementById("start_sort");

var first_box=document.getElementById("first_box");
var second_box=document.getElementById("second_box");
var third_box=document.getElementById("third_box");
var fourth_box=document.getElementById("fourth_box");
var fifth_box=document.getElementById("fifth_box");

var first_pseudocode_box=document.getElementById("first_pseudocode_box");
var second_pseudocode_box=document.getElementById("second_pseudocode_box");
var third_pseudocode_box=document.getElementById("third_pseudocode_box");
var fourth_pseudocode_box=document.getElementById("fourth_pseudocode_box");



var array_bar_sizes=[];
var array_divs=[];

var teststring="test1";
var teststring2="test2";


var first_string="";
var second_string="";
var third_string="";
var fourth_string="";
var fifth_string="";


var array_section=document.getElementById("array_section");
array_section.style="flex-direction:row";

create_random_array.addEventListener("click", create_array);
array_size_input.addEventListener("input", change_array_size);

function create_array()
{
  array_section.innerHTML="";

  for(var i = 0; i < array_size; i++)
  {
    array_bar_sizes[i]=Math.floor(Math.random() * 0.5 *(30)) + 10;
    array_divs[i]=document.createElement("div");
    array_section.appendChild(array_divs[i]);
    array_divs[i].style=" margin: 0% 0.1%; background-color:blue; width:" + (100/array_size-0.2) + "%; height:" + (array_bar_sizes[i]) + "%;";
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
}

var delay=100
var c_delay=0;

function update_div(section, height, color)
{
  window.setTimeout(function(){
    section.style=" margin:0% 0.1%; width:"+ (100/array_size-0.2) + "%; height:" + height + "%; background-color:" + color + ";";
  },c_delay+=delay);
}

function enable_buttons()
{
  window.setTimeout(function(){
    array_size_input.disabled=false;
    create_random_array.disabled=false;
    start_sorting.disabled=false;
  },c_delay+=delay);
}

function bubble_sort()
{
  c_delay=0;
  for(var i=0; i<array_size-1; i++)
  {
    update_pseudocode1();
    for(var j=0; j<array_size-i-1;j++)
    {
      update_pseudocode2();
      update_div(array_divs[j],array_bar_sizes[j], "yellow");//Color updated
      update_log1(array_bar_sizes[j], array_bar_sizes[j+1]);

      //write_output1(div_sizes[j], div_sizes[j+1]);
      if(array_bar_sizes[j]>array_bar_sizes[j+1])
      {

        update_pseudocode3();
        update_log2(array_bar_sizes[j], array_bar_sizes[j+1]);
        update_div(array_divs[j], array_bar_sizes[j], "red");
        update_div(array_divs[j+1],array_bar_sizes[j+1], "red");

        update_pseudocode4();
        var temp=array_bar_sizes[j];
        array_bar_sizes[j]=array_bar_sizes[j+1];
        array_bar_sizes[j+1]=temp;

        update_div(array_divs[j], array_bar_sizes[j], "red");
        update_div(array_divs[j+1], array_bar_sizes[j+1], "red");
        //write_output2("2", "2");

      }
      update_pseudocode2();
      update_div(array_divs[j], array_bar_sizes[j], "blue");
    }
    update_pseudocode1();
    update_div(array_divs[j], array_bar_sizes[j], "green");
  }
  update_div(array_divs[0], array_bar_sizes[0], "green");

  enable_buttons();
}


function update_log1(size1, size2)
{
  window.setTimeout(function(){
    update_log_strings();
    fifth_box.innerHTML=fourth_box.innerHTML;
    fourth_box.innerHTML=third_box.innerHTML;
    third_box.innerHTML=second_box.innerHTML;
    second_box.innerHTML=first_box.innerHTML;
    first_box.innerHTML="Comparing size " + size1 + " with size " + size2 + ".";


  },c_delay+=delay);
}

function update_log2(size1, size2)
{
  window.setTimeout(function(){
    update_log_strings();
    fifth_box.innerHTML=fourth_box.innerHTML;
    fourth_box.innerHTML=third_box.innerHTML;
    third_box.innerHTML=second_box.innerHTML;
    second_box.innerHTML=first_box.innerHTML;
    first_box.innerHTML="Swapping size " + size1 + " with size " + size2 + ".";


  },c_delay+=delay);
}

function update_log_strings()
{
  fifth_string=fourth_string;
  fourth_string=third_string;
  third_string=second_string;
  second_string=first_string;

}
function reset_pseudocode()
{
 first_psuedocode_box.style="background-color:white;";
 second_psuedocode_box.style="background-color:white;";
 third_psuedocode_box.style="background-color:white;";
 fourth_psuedocode_box.style="background-color:white;";

}

function update_pseudocode1()
{
  window.setTimeout(function(){
    reset_pseudocode();
    first_psuedocode_box.style="background-color:green;";
  },c_delay+=delay);
}

function update_pseudocode2()
{
  window.setTimeout(function(){
    reset_pseudocode();
    second_psuedocode_box.style="background-color:green;";
  },c_delay+=delay);
}

function update_pseudocode3()
{
  window.setTimeout(function(){
    reset_pseudocode();
    third_psuedocode_box.style="background-color:green;";
  },c_delay+=delay);
}

function update_pseudocode4()
{
  window.setTimeout(function(){
    reset_pseudocode();
    fourth_psuedocode_box.style="background-color:green;";
  },c_delay+=delay);
}

function clear_log()
{
  first_box.innerHTMl="";
  second_box.innerHTMl="";
  third_box.innerHTMl="";
  fourth_box.innerHTMl="";
  fifth_box.innerHTMl="";
}
function run_sorting_algorithm()
{
  disable_buttons();
  bubble_sort();
}
