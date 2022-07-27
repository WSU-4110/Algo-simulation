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
pseudocode_box.style.display="none";

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

var delay=25;
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

function run_sorting_algorithm()
{
  disable_buttons();
  Quick();
}


function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}
c_delay += delay

function quick_partition(start, end)
{
    var i = start + 1;
    var piv = sortingArray.arrayBarSizes[start] ;//make the first element as pivot element.
    sortingArray.updateDivElement(start, "blue", c_delay += delay);//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (sortingArray.arrayBarSizes[ j ] < piv)
            {
                sortingArray.updateDivElement(j, "red", c_delay);
                sortingArray.updateDivElement(i, "yellow", c_delay);

                sortingArray.swapDivElements(i, j);

                sortingArray.updateDivElement(i, "blue", c_delay += delay);

                sortingArray.updateDivElement(i, "blue", c_delay += delay);
                sortingArray.updateDivElement(j, "blue", c_delay += delay);
                i += 1;
            }
    }
    sortingArray.updateDivElement(start, "blue", c_delay += delay);
    sortingArray.updateDivElement(i - 1, "blue", c_delay += delay);
    
    sortingArray.swapDivElements(start, i-1);


    for(var t=start;t<=i;t++)
    {

        sortingArray.updateDivElement(t, "green", c_delay += delay);
    }

    return i-1;//return the position of the pivot
}

function quick_sort(start, end)
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition(start, end) ;     
        quick_sort(start, piv_pos -1);//sorts the left side of pivot.
        quick_sort(piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }
