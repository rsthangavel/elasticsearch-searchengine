function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    filter.searchText(this.value, (arr) => {
      console.log(arr);
 /*create a DIV element that will contain the items (values):*/
 a = document.createElement("DIV");
 a.setAttribute("id", this.id + "autocomplete-list");
 a.setAttribute("class", "autocomplete-items");
 /*append the DIV element as a child of the autocomplete container:*/
 this.parentNode.appendChild(a);
 /*for each item in the array...*/
 for (i = 0; i < arr.length; i++) {
   console.log(arr[i]._source.firstname);
   /*check if the item starts with the same letters as the text field value:*/
   if (arr[i]._source.firstname.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
     /*create a DIV element for each matching element:*/
     b = document.createElement("DIV");
     /*make the matching letters bold:*/
     b.innerHTML = "<strong>" + arr[i]._source.firstname.substr(0, val.length) + "</strong>";
     b.innerHTML += arr[i]._source.firstname.substr(val.length);
     /*insert a input field that will hold the current array item's value:*/
     b.innerHTML += "<input type='hidden' value='" + arr[i]._source.firstname + "'>";
     /*execute a function when someone clicks on the item value (DIV element):*/
     b.addEventListener("click", function (e) {
       /*insert the value for the autocomplete text field:*/
       console.log(this.getElementsByTagName("input")[0].value);
       inp.value = this.getElementsByTagName("input")[0].value;
       /*close the list of autocompleted values,
       (or any other open lists of autocompleted values:*/
       closeAllLists();
     });
     a.appendChild(b);
   }
 }
    });
   
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
autocomplete(document.getElementById("search"), countries);


function renderCard(cartList) {
  document.getElementById("card-list").innerHTML = '';
  //Retrieve the template data from the HTML .
  var template = document.getElementById("handlebars-demo").innerHTML;
  if (cartList && Array.isArray(cartList) && cartList.length > 0) {
    generateSort(cartList[0]);
    for (let i = 0; i < cartList.length; i++) {
      //Compile the template data into a function
      var templateScript = Handlebars.compile(template);
      var element = document.createElement("DIV");
      var html = templateScript(cartList[i]._source);
      element.innerHTML = html;
      document.getElementById("card-list").appendChild(element);

    }
  }
}

function generateSort(sortObj) {
  for (let prop in sortObj._source) {
    var element = document.createElement("option");
    element.innerHTML = prop;
    element.setAttribute("value", prop);
    document.getElementById('filter').getElementsByClassName('sort')[0].appendChild(element);

  }


}

var filter = (function () {
  let size = 20;
  let sort = [];
  let query = {
    "match_all": {},
  };
  function sortFilter(event) {
    sort = [];
    let object = {};
    object[event.target.value] = "asc";
    sort.push(object);
    generateBody();
  }
  function limitFilter(event) {
    size = Number(event.target.value);
    generateBody();
  }
  function generateBody() {
    let body = {
      query: query,
      size: size,
      sort: sort
    }
    getList(body, function (res) {
      renderCard(res);
    });
  }
  function searchText(text, cb) {
    query = {
      "match": {
        "firstname": text
      }
    };
    let body = {
      query: query,
      size: size,
      sort: sort
    };
    getList(body, cb);
  }
  async function getList(body, cb) {

    let response = await fetch('/api/search', {
      method: 'post',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    if (response.ok) {
      let json = await response.json();
      cb(json.hits.hits);
    }
  }
  generateBody();
  return {
    sortFilter: sortFilter,
    generateBody: generateBody,
    limitFilter: limitFilter,
    searchText: searchText
  }
})();
document.getElementById('filter').getElementsByClassName('sort')[0].addEventListener('change', filter.sortFilter);
document.getElementById('filter').getElementsByClassName('limit')[0].addEventListener('change', filter.limitFilter);

