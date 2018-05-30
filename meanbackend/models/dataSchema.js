var mongoose = require('mongoose');
var employeeSchema = mongoose.Schema({
    name: { type: String },
    designation: { type: String }
});
module.exports = mongoose.model('employee', employeeSchema);