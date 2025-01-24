const express = require('express');
const router = express.Router();
const employeeController = require('../controller/EmployeeController');

router.post("/add-emp", employeeController.createEmployee);
router.get("/getemployees", employeeController.getEmployees)
router.get("/getemp/:id",employeeController.getEmployee);
module.exports = router;