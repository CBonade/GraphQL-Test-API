"use strict";

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require("express-graphql");

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.use('/graphql', (0, _expressGraphql2.default)({
  schema: _schema2.default,
  graphiql: true
}));

console.log('Starting server..');
app.listen(4000);