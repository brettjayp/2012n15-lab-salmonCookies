'use strict';

// setting up some global variables
var hoursOfOps = [];
for (var i = 6; i <= 20; i++){
  var hour = i + '00';
  hoursOfOps.push(hour);
}

console.log(hoursOfOps);


// this is just here for a bit of self teaching
var el = document.getElementById('spicy');
el.textContent = 'Spicy jalapeno bacon ipsum dolor amet drumstick pork loin beef ribs, tail meatloaf porchetta burgdoggen ground round landjaeger swine bacon chicken venison. Corned beef rump tenderloin ground round salami prosciutto venison. Cow venison pork hamburger rump capicola. Drumstick filet mignon turducken shoulder ham. Capicola drumstick corned beef tail, cupim meatloaf filet mignon turkey ball tip fatback biltong leberkas. Turkey pig alcatra cupim, frankfurter landjaeger boudin porchetta ball tip. Hamburger pork loin jowl, short ribs jerky leberkas salami turkey drumstick corned beef.';
var beef = 'Beef ground round venison, porchetta hamburger meatball cupim jerky ham hock pancetta pastrami turkey kevin spare ribs. Rump jerky burgdoggen hamburger. Turkey pork belly andouille sirloin, meatloaf bresaola filet mignon biltong burgdoggen strip steak. Short ribs tenderloin cupim, pig beef ribs jowl shank ball tip.';
var el = document.getElementById('beef');
el.textContent = beef;
// end self teach section
