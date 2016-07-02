var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser');

app.use(express.static('public'));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//to fake a database
var lists = [{
  name: 'personal', tasks: ['sleep', 'eat']
}, {
  name: 'school', tasks: ['homework', 'study for the test']
}, {
  name: 'work', tasks: ['get rich', 'get that promotion', 'slap the CEO in the face']
}];

// app.get('/api/hello-world', function(req, res) {
//   res.send('hello worldly');
// })

// app.post('/api/task', function(req, res) {
//   console.log(req.body);
//   res.send(req.body);
// })

app.get('/api/data', function(req, res) {
  // console.log(lists);
  res.send(lists);
})

app.put('/api/list/:listIndex', function(req, res) {
  var listIndex = req.params.listIndex;
  // console.log(lists[listIndex], req.body);
  lists[listIndex].tasks.push(req.body.text);
  // console.log(lists);
  res.send(req.body.text);
})

// app.get('/', function (req, res) {
//   res.send('hellow world!'));
// });


var portNum = 3000
app.listen(portNum, function() {
  console.log('listening via port:', portNum)
});
