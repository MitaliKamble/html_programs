const Empolyee = require("../model/Empolyee");
const Employee = require("../model/Empolyee");

//post or import
const createEmployee = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const employee = new Employee({
      name,
      email,
      phone,
    });
    await employee.save();
    res.status(201).json({ message: "Employee document inserted succesfully" });
  } catch (error) {
    console.log(error);
    res.status(201).json({ message: "Server Error" });
  }
};

//get or fetch
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(201).json(employees);
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: "Server issue error" });
  }
};

const getEmployee=async(request,response)=>{
  try{
      const employee=await Employee.findById(request.params.id);
      if(!employee){
          return response.status(401).json({message:"Employee document is not exist"})
      }
      response.status(201).json(employee);
  }
  catch(error){
      console.log(error)
      response.status(501).json({message:"Server related issue"})
  }
}

module.exports = { createEmployee, getEmployees, getEmployee };
