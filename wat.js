var page = require('webpage').create(),
  system = require('system'),
  t, address;

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>');
  phantom.exit();
}

page.onConsoleMessage = function(msg) {
  console.log(msg);
};


t = Date.now();
address = system.args[1];


page.open(address, function(status) {
  if (status !== 'success') {
    console.log('FAIL to load the address');
  } else {
  
  var title = page.evaluate(function(){
    console.log('Title:' + document.title);
  });

    t = Date.now() - t;
    console.log('Loading ' + system.args[1]);
    console.log('Loading time ' + t + ' msec');

    var filename = "screenshots/" + Date.now() + '.png';
    console.log("Taking screenshot " + filename)
    page.render(filename);

    // Use jQuery Libraries
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
    page.evaluate(function() {
      $("#loginBtn").click();
      var filename = "screenshots/" + Date.now() + '.png';
      console.log("Taking screenshot " + filename)
      page.render(filename);
    });
    
    });

   


  }

});

phantom.exit();


 


