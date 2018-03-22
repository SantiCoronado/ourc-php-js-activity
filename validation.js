
function validateRunnerEventPosition(id) /**number between 1 and 99999 */
/**The same function is used for validating Runner ID, Event ID and Position as the range is the same in the three elements, range 1-99999.*/
  {
    var element=document.getElementById(id).value;
    var fieldName=document.getElementById(id).name;/**This variable is used to store the name of the element that is being validated*/
    var patt=/^[1-9]{1}$|^[1-9]{1}[0-9]{1}/; /** Pattern to validate inputs in the range 1-99999*/
    var result=patt.test(element);
    if (element.length == 0)
    {
  	return fieldName + ' must be given a value\n'; /** Returns this if it's empty input*/
    }
    else 
    {
      if (!result)
      {
        return fieldName + ' must be between 1 and 99999\n'; /** Returns this if it doesn't match the pattern*/
      }
      else return "";/** Returns this if it matches the pattern*/
    }
  }

function validateDate() /**A date has the format YYYY-MM-DD*/
  {
    var element=document.getElementById('date').value;
    var patt=/^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/; /**The pattern validates MM (months) to a range 1-12 and DD (days) to a range 1-31*/
    var result=patt.test(element);
    if (element.length == 0)
    {
      return 'Date must be given a value\n'; /** Returns this if it's empty input*/
    }
    else 
    {
      if (!result)
      {
        return 'Date must be in YYYY-MM-DD format\n'; /** Returns this if it doesn't match the pattern*/
      }
      else return "";/** Returns this if it matches the pattern*/
    }
    
  }

function validateTime() /**A time has the format HH:MM:SS*/
  {
    var element=document.getElementById('time').value;
    var patt=/^[0-5][0-9]:[0-5][0-9]:[0-5][0-9]$/;/**The pattern validates HH (hours),MM (minutes) and SS (seconds) to a range 0-59*/
    var result=patt.test(element);
    if (element.length == 0)
    {
      return 'Finish time must be given a value\n'; /** Returns this if it's empty input*/
    }
    else 
    {
      if (!result)
      {
        return 'Time must be in HH:MM:SS format\n'; /** Returns this if it doesn't match the pattern*/
      }
      else return "";/** Returns this if it matches the pattern*/
    }
    
  }

function validateCategory() /**A category number in the range 1-100*/
  {
    var element=document.getElementById('categoryId').value;
    var patt=/(^[1-9]{1}$|^[1-9]{1}[0-9]{1}$|^100$)/;
    var result=patt.test(element);
    if (element.length == 0)
    {
      return 'Category ID must be given a value\n'; /** Returns this if it's empty input*/
    }
    else 
    {
      if (!result)
      {
        return 'Category must be in the range 1-100\n'; /** Returns this if it doesn't match the pattern*/
      }
      else return "";/** Returns this if it matches the pattern*/
    }
  }

function validateAgegrade() /**A percentage number in the range 0.00-99.99*/
  {
    var element=document.getElementById('ageGrade').value;
    var patt= /^[0-9][0-9].[0-9][0-9]|^[0-9].[0-9][0-9]$/   /**The pattern validates percentages with two decimal places. The pattern either accepts 0.45, 4.87 or 06.89 for percentages less than 10.00*/
    var result=patt.test(element);
    if (element.length == 0)
    {
      return 'Age grade must be given a value\n'; /** Returns this if it's empty input*/
    }
    else 
    {
      if (!result)
      {
        return 'Age grade must be in the range 0.00-99.99\n'; /** Returns this if it doesn't match the pattern*/
      }
      else return "";/** Returns this if it matches the pattern*/
    }
  }

function validatePersBest() /**A number either ‘1’ or ‘0’ */
  {
    var element=document.getElementById('persBest').value;
    var patt= /[01]/   /**The pattern validates the format ‘1’ or ‘0’ */
    var result=patt.test(element);
    if (element.length == 0)
    {
      document.getElementById('persBest').value='0'; /** if the field is empty, then it should be entered as '0' */
      var element=document.getElementById('persBest').value; /** updates element to the new value*/
      var result=patt.test(element); /** updates result comparing the updated element to the pattern*/
    }
    if (!result)
    {
      return 'Personal best must be either 1 or 0\n'; /** Returns this if it doesn't match the pattern*/
    }
    else return "";/** Returns this if it matches the pattern*/
  }

function validate()
  {
    var result = validateRunnerEventPosition('runnerId') + validateRunnerEventPosition('eventId') + validateRunnerEventPosition('position') + validateDate() + validateTime() + validateCategory() + validateAgegrade() + validatePersBest();
    if ( result == "" ) // result should be an empty string if fields validate
    { 
      return true; 
    }
    else 
    {
      alert(result);
      return false;
    }
  }




/** Method to validate the sort options from the request form*/
function validateSort()
  {
    var sortIn = document.getElementById('sortIn').value;
    var sortOn = document.getElementById('sortOn').value;
    if (sortIn == "Please Choose" | sortOn == "Please Choose")
    {
      alert("Please choose how to sort the table");
      return false; /*it won't submit if either sort option's value is "Please Choose"*/ 
    }
    else return true;
  }
