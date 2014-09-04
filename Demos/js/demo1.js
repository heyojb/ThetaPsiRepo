function populate ()
{
  var styleSet = document.getElementsByName ("demo1Style");
  var resultsContainer = document.getElementById ("demo1Results");
  var message = "So, ";
  var count, style;
  
  message += document.getElementById ("txtName").value;
  message += ", I wish you luck on your quest ";
  message += document.getElementById ("txtQuest").value;
  message += ". May the odds be ever in your favour.";
  
  resultsContainer.innerHTML = message;
  
  for (var count = 0; count < styleSet.length; count++)
  {
    if (styleSet [count].checked)
    {
      style = count;
    }
  }
  
  //I'm going to improve this at some point, but it gets the point across.
  switch (style)
  {
    case 0:
      resultsContainer.style.border = "1px solid Black";
      break;
    case 1:
      resultsContainer.style.border = "1px dotted Black";
      break;
    case 2:
      resultsContainer.style.border = "1px dashed Black";
      break;
    case 3:
      resultsContainer.style.border = "3px solid Blue";
      break;
    default:
      alert ("Somehow, no style was selected.");
  }
}

function demo1_clear ()
{
  document.getElementById ("txtName").value = "";
  document.getElementById ("txtName").classList.remove ("error");
  document.getElementById ("txtQuest").value = "";
  document.getElementById ("txtQuest").classList.remove ("error");
  document.getElementById ("demo1Results").innerHTML = "";
  document.getElementById ("demo1Results").style.border = "";
}

function demo1_validate ()
{
  var errorFound = false;
  var nameField = document.getElementById ("txtName");
  var questField = document.getElementById ("txtQuest");
  var resultsField = document.getElementById ("demo1Results");
  
  resultsField.innerHTML = "";
  
  if (nameField.value == "")
  {
    nameField.classList.add ("error");
    resultsField.innerHTML += "- You must specify your name<br />";
    errorFound = true;
  }
  else
  {
    nameField.classList.remove ("error");
  }
  
  if (questField.value == "")
  {
    questField.classList.add ("error");
    resultsField.innerHTML += "- You must specify your quest<br />";
    errorFound = true;
  }
  else
  {
    questField.classList.remove ("error");
  }
  
  if (!errorFound) populate ();
  else document.getElementById ("demo1Results").style.border = "";
}
