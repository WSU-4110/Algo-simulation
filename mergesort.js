var array_size_input=document.getElementById('size_of_array');
array_size=array_size_input.value;
var create_random_array=document.getElementById("create_random_array");
var start_sorting=document.getElementById("start_sort");

var random_array_button=document.getElementById("random_array");
var user_array_button=document.getElementById("user_array");
var array_integer_field=document.getElementById("array_integer");
var add_integer_button=document.getElementById("add_integer");

var pseudocode_box=document.getElementById("pseudocode_box");

//for pseudocode box
var firstPseudoCodeBox=document.getElementById("first_pseudocode_box");
var secondPseudoCodeBox=document.getElementById("second_pseudocode_box");
var thirdPseudoCodeBox=document.getElementById("third_pseudocode_box");
var fourthPseudoCodeBox=document.getElementById("fourth_pseudocode_box");
var fifthPseudoCodeBox=document.getElementById("fifth_pseudocode_box");

//log and pseudocode objects
let pseudoCodeBox = new PseudoBox(firstPseudoCodeBox, secondPseudoCodeBox, thirdPseudoCodeBox, fourthPseudoCodeBox, fifthPseudoCodeBox);
let newArray = [];

var user_input_array_index = 0;
var user_input_int=document.getElementById("array_integer");
var user_int = 0;

var arrayBarSizes=[];
var arrayDivElements=[];

var arraySection=document.getElementById("array_section");
arraySection.style="flex-direction:row";

let sortingArray = new SortingArray(arrayBarSizes, arrayDivElements, array_size, arraySection);

array_integer_field.disabled=true;
add_integer_button.disabled=true;

add_integer_button.addEventListener('click', create_array_user);

random_array_button.addEventListener('change', function(e)
{
  if (this.checked) {
    newArray=[]
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
    newArray = [];
    array_section.innerHTML="";
    user_input_array_index = 0;
    array_size=0;
    array_integer_field.disabled=false;
    add_integer_button.disabled=false;
    array_size_input.disabled=true;
    create_random_array.disabled=true;
  }
});

create_random_array.addEventListener("click", create_array);
array_size_input.addEventListener("input", change_array_size);

function create_array()
{
  for(var i = 0; i < array_size; i++)
  {
    newArray[i]=Math.floor(Math.random() * 90) + 1;
  }

  sortingArray.setArraySize(array_size);
  sortingArray.setArrayBarSizes(newArray);
  sortingArray.generateArrayElements();
}


function create_array_user()
{  
array_integer_field=document.getElementById('array_integer');
  var userString = array_integer_field.value;
  var integer_array=userString.split(" ");

  array_for_sorting = [];
  var allIntegers = true;

//Allows the user to take multiple inputs at once
for(var i = 0; i < integer_array.length; i++)
{
  var number_to_be_added = parseInt(integer_array[i]);
  array_for_sorting[i] = number_to_be_added;
  if (Number.isNaN(number_to_be_added))
  {
    allIntegers = false;
  }
}

array_size = array_for_sorting.length;
  if (allIntegers)
  {
    sortingArray.setArraySize(array_for_sorting.length);
    sortingArray.setArrayBarSizes(array_for_sorting);
    sortingArray.generateArrayElements();
  } 
}

function change_array_size()
{
  array_size=array_size_input.value;
  create_array(sortingArray);
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

var delay=70;
var c_delay=0;

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

function Merge()
{
    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_partition(left, right) {
    if (left < right) {
        var mid = Math.floor((left + right) / 2);
        sortingArray.updateDivElement(mid, "yellow", c_delay+=delay);

        pseudoCodeBox.updatePseudoCode(1, c_delay+=delay);
        merge_partition(left, mid);
        pseudoCodeBox.updatePseudoCode(2, c_delay+=delay);
        merge_partition(mid+1, right);

        pseudoCodeBox.updatePseudoCode(3, c_delay+=delay);
        pseudoCodeBox.updatePseudoCode(6, c_delay+=delay);
        merge_sort(left, mid, right);
    }
}

function merge_sort(left, mid, right)
{
  var l = left;
  var m = mid + 1;

  var Arr = [];
  var k = 0;

  for (var i = left; i <= right; i++) {
    pseudoCodeBox.updatePseudoCode(4, c_delay+=delay);
    if (l > mid) {
      Arr[k++] = sortingArray.arrayBarSizes[m++];
      sortingArray.updateDivElement(m-1, "red", c_delay+=delay);
    }
    else if (m > right) {
      Arr[k++] = sortingArray.arrayBarSizes[l++];
      sortingArray.updateDivElement(l-1, "red", c_delay+=delay);
    }
    else if (sortingArray.arrayBarSizes[l] < sortingArray.arrayBarSizes[m]) {
      Arr[k++] = sortingArray.arrayBarSizes[l++];
      sortingArray.updateDivElement(l-1, "red", c_delay+=delay);
    }
    else {
      Arr[k++] = sortingArray.arrayBarSizes[m++];
      sortingArray.updateDivElement(m-1, "red", c_delay+=delay);
    }
  }

  for (var j = 0; j < k; j++) {
    pseudoCodeBox.updatePseudoCode(5, c_delay+=delay);
    sortingArray.arrayBarSizes[left++] = Arr[j];
    sortingArray.updateDivElement(left-1, "green", c_delay+=delay);
  }
}


function run_sorting_algorithm()
{
  disable_buttons();
  Merge();
}