/*
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

function whatCentury(year)
{
  let century = String(Math.ceil(year/100))
  if(century < 10){
  //first ten centuries
  if(century.split('').pop() == '1'){
    return century + 'st'
  }
  else if(century.split('').pop() == '2'){
    return century + 'nd'
  }
  else if(century.split('').pop() == '3'){
    return century + 'rd'
  }
  else{
    return century + 'th'
  }}
  //centuries 10-20
  else if(century >= 10 && century <= 20){
    return century + 'th'
  }
  //centuries 20+
  else if(century > 20){
    if(century.split('').pop() == '1'){
    return century + 'st'
  }
  else if(century.split('').pop() == '2'){
    return century + 'nd'
  }
  else if(century.split('').pop() == '3'){
    return century + 'rd'
  }
  else{
    return century + 'th'
  }}
}

//More efficient solution

function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}