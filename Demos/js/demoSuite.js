var selectedDemo = 0;

function fireDemo ()
{
  var demoList = document.getElementsByName ("demoSelection");
  var delay = 0, count = 0;
  var containerName, container;
  
  if (selectedDemo != 0)
  {
    delay = 1000;
    
    containerName = "demo" + selectedDemo + "Container";
    container = document.getElementById (containerName);
    container.classList.remove ("demoContainer_visible");
  }
  
  //This is telling the given function to activate after the delay period (in ms)
  setTimeout (function () {
    if (selectedDemo != 0)
    {
      var functionName = "demo" + selectedDemo + "_clear";
      window[functionName] ();
      container.classList.remove ("demoContainer_expand");
    }
    
    for (count = 0; count < demoList.length; count++)
    {
      if (demoList [count].checked)
      {
        selectedDemo = count + 1;
        break
      }
      
      selectedDemo = 0;
    }
    
    containerName = "demo" + selectedDemo + "Container";
    container = document.getElementById (containerName);
    container.classList.add ("demoContainer_expand");
    container.classList.add ("demoContainer_visible");
  }, delay);
}
