var array_size_input=document.getElementById('size_of_array');
array_size=array_size_input.value;
var create_random_array=document.getElementById("create_random_array");
var start_sorting=document.getElementById("start_sort");

var random_array_button=document.getElementById("random_array");
var user_array_button=document.getElementById("user_array");
var array_integer_field=document.getElementById("array_integer");
var add_integer_button=document.getElementById("add_integer");


// var log_box=document.getElementById("log_box");
// var pseudocode_box=document.getElementById("pseudocode_box");

// var view_log_button=document.getElementById("view_log");
// var view_pseudocode_button=document.getElementById("view_pseudocode");


// var first_box=document.getElementById("first_box");
// var second_box=document.getElementById("second_box");
// var third_box=document.getElementById("third_box");
// var fourth_box=document.getElementById("fourth_box");
// var fifth_box=document.getElementById("fifth_box");

// var first_pseudocode_box=document.getElementById("first_pseudocode_box");
// var second_pseudocode_box=document.getElementById("second_pseudocode_box");
// var third_pseudocode_box=document.getElementById("third_pseudocode_box");
// var fourth_pseudocode_box=document.getElementById("fourth_pseudocode_box");

var user_input_array_index = 0;
var user_input_int=document.getElementById("array_integer");
var user_int = 0;

var array_bar_sizes=[];

function Element (size, div) {
  this.size = size;
  this.div = div;
}

array_integer_field.disabled=true;
add_integer_button.disabled=true;

// pseudocode_box.style.display="none";


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


// view_log_button.addEventListener('change', function(e)
// {
//   if (this.checked) {
//     pseudocode_box.style.display="none";
//     log_box.style.display="block";
//   }
// });

// view_pseudocode_button.addEventListener('change', function(e)
// {
//   if (this.checked) {
//     log_box.style.display="none";
//     pseudocode_box.style.display="block";
//   }
// });


var array_section=document.getElementById("array_section");
array_section.style="flex-direction:row";

create_random_array.addEventListener("click", create_array);
array_size_input.addEventListener("input", change_array_size);

function create_array()
{
  array_section.innerHTML="";

  for(var i = 0; i < array_size; i++)
  {

    array_bar_sizes[i] = new Element (
      Math.floor(Math.random() * 90) + 1,
      document.createElement("div")
    )

    array_section.appendChild(array_bar_sizes[i].div);
    array_bar_sizes[i].div.style=" margin: 0% 0.1%; background-color:blue; width:" + (100/array_size-0.2) + "%; height:" + (array_bar_sizes[i].size) + "%;";
  }
}

function create_array_user()
{
  array_integer_field=document.getElementById("array_integer");

  user_int=parseInt(array_integer_field.value);

  if(Number.isInteger(user_int) && user_int > 0)
  {

    array_bar_sizes[user_input_array_index] = new Element (
      user_int,
      document.createElement("div")
    )
    array_size++;
    user_input_array_index++;

    array_section.innerHTML="";
    for(var i = 0; i < array_size; i++)
    {
      array_section.appendChild(array_bar_sizes[i].div);
      array_bar_sizes[i].div.style=" margin: 0% 0.1%; background-color:blue; width:" + (100/array_size-0.2) + "%; height:" + (array_bar_sizes[i].size) + "%;";
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

function merge_sort_start()
{
    let array1 = merge_sort(array_bar_sizes);
    if (array_size == 1) {
      update_div(array_bar_sizes[0].div, array_bar_sizes[0].size, "green");
    }

    enable_buttons();

}

function merge_sort(unsortedArray)
{
    if (unsortedArray.length == 1) return unsortedArray;

    const middle_index = Math.floor(unsortedArray.length / 2);
    const left_array = unsortedArray.slice(0, middle_index);
    const right_array = unsortedArray.slice(middle_index, unsortedArray.length);

    return merge_sort_helper(merge_sort(left_array), merge_sort(right_array));

}

function merge_sort_helper(left_array, right_array)
{
    c_delay=0;

    let temp = [];

    while (left_array.length && right_array.length) {
      update_div(left_array[0].div, left_array[0].size, "yellow");
      if (left_array[0].size <= right_array[0].size){
        update_div(left_array[0].div, left_array[0].size, "blue");
        temp.push(left_array.shift());
      }
      else {
        update_div(left_array[0].div, left_array[0].size, "red");
        update_div(right_array[0].div, right_array[0].size, "red");

        tempDiv = left_array[0].div;
        left_array[0].div = right_array[0].div;
        right_array[0].div = tempDiv;

        update_div(left_array[0].div, left_array[0].size, "blue");
        update_div(right_array[0].div, right_array[0].size, "blue");

        temp.push(right_array.shift())
      }
    }

    while (left_array.length) {
      update_div(left_array[0].div, left_array[0].size, "yellow");
      update_div(left_array[0].div, left_array[0].size, "blue");
      temp.push(left_array.shift());
    }

    while (right_array.length) {
     update_div(right_array[0].div, right_array[0].size, "yellow");
     update_div(right_array[0].div, right_array[0].size, "blue");
     temp.push(right_array.shift());
    }

    console.log("TEMP ARRAY: ");
    for (var i = 0; i < temp.length-1; i++) {
      console.log(temp[i].size);
    }

    return temp;
}


// function update_log1(size1, size2)
// {
//   window.setTimeout(function(){
//     step_log();
//     first_box.innerHTML="Comparing size " + size1 + " with size " + size2 + ".";


//   },c_delay+=delay);
// }

// function update_log2(size1, size2)
// {
//   window.setTimeout(function(){
//     step_log();
//     first_box.innerHTML="Swapping size " + size1 + " with size " + size2 + ".";


//   },c_delay+=delay);
// }

// function reset_pseudocode()
// {

//  first_pseudocode_box.style="background-color:#f5ef4e;";
//  second_pseudocode_box.style="background-color:#f5ef4e;";
//  third_pseudocode_box.style="background-color:#f5ef4e;";
//  fourth_pseudocode_box.style="background-color:#f5ef4e;";

// }

// function update_pseudocode1()
// {
//   window.setTimeout(function(){
//     reset_pseudocode();
//     first_pseudocode_box.style="background-color:#ffff66;";
//   },c_delay+=delay);
// }

// function update_pseudocode2()
// {
//   window.setTimeout(function(){
//     reset_pseudocode();

//     second_pseudocode_box.style="background-color:#ffff66;";
//   },c_delay+=delay);
// }

// function update_pseudocode3()
// {
//   window.setTimeout(function(){
//     reset_pseudocode();
//     third_pseudocode_box.style="background-color:#ffff66;";
//   },c_delay+=delay);
// }

// function update_pseudocode4()
// {
//   window.setTimeout(function(){
//     reset_pseudocode();
//     fourth_pseudocode_box.style="background-color:#ffff66;";
//   },c_delay+=delay);
// }

// function finish_pseudocode()
// {
//   window.setTimeout(function(){
//     reset_pseudocode();
//     first_pseudocode_box.style="background-color:#f5ef4e;";
//   },c_delay+=delay);
// }


// function step_log()
// {
//   fifth_box.innerHTML=fourth_box.innerHTML;
//   fourth_box.innerHTML=third_box.innerHTML;
//   third_box.innerHTML=second_box.innerHTML;
//   second_box.innerHTML=first_box.innerHTML;
// }

function run_sorting_algorithm()
{
  disable_buttons();
  merge_sort_start();
}
