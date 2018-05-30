var express = require('express');
var router = express.Router();
var Employee = require('../models/dataSchema');
router.post('/create', (req, res, next) => {

    var newEmployee = new Employee({
        name: req.body.name,
        designation: req.body.designation
    });
    newEmployee.save((err, employee) => {
        if (err)
            res.status(500).json({ msg: err });
        res.status(200).json({ msg: employee });
    });
});
router.get('/read', (req, res, next) => {
    Employee.find({}, (err, employees) => {

        if (err)
            res.status(500).json({ msg: err });
        res.status(200).json({ msg: employees });
    });
});

router.put('/update', (req, res, next) => {
    Employee.findById(req.body._id, (err, employee) => {
        if (err)
            res.status(500).json({ errmsg: err });
        employee.name = req.body.name;
        employee.designation = req.body.designation;


        employee.save((err, employee) => {
            if (err)
                res.status(500).json({ errmsg: err });

            res.status(200).json({ msg: employee });
        });
    });
});
router.delete('/delete/:id', (req, res, next) => {
    Employee.findOneAndRemove({ _id: req.params.id }, (err, employee) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: employee });
    });

});
module.exports = router;