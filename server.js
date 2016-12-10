var express = require('express'),
    app = express(),
    useragent = require('useragent'),
    port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT;

app.get('/', (req, res) => {
  var agent = useragent.parse(req.headers['user-agent']);
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var lang = req.headers['accept-language'].substring(0,5);
  
  res.json({ ipaddress: ip, language: lang, software: agent.toString() });
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});