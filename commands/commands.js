if (annyang) {
  // Let's define a command.
  var commands = {
    'ugly': function() { alert('jelai!'); }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}