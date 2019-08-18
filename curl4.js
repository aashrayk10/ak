// const { spawn } = require('child_process');
// const ls = spawn('curl -v  -X POST -d 'user[email]=avijit.ghosh@truringsoftek.com' -d 'user[password]=K4Mobility' https://incontrol2.peplink.com/r/api/login ');

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// })
var util = require('util');
var exec = require('child_process').exec;

var command = 'curl -v  -X POST -d user[email]=avijit.ghosh@truringsoftek.com-d user[password]=K4Mobility https://incontrol2.peplink.com/r/api/login  '

child = exec(command, function(error, stdout, stderr){

// console.log('stdout: ' + stdout);
// console.log('stderr: ' + stderr);

if(error !== null)
{
    console.log('exec error: ' + error);
}

});