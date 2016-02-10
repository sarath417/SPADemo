using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SPADemo.Controllers
{
    public class ManageEmployeeInfoController : Controller
    {
        // GET: ManageEmployeeInfo
        public ActionResult Index()
        {
            return View();

        }
        public ActionResult AddNewEmployee()
        {
            return PartialView("AddEmployee");
        }

        public ActionResult ShowEmployees()
        {
            return PartialView("ShowAllEmployees");
        }

        public ActionResult EditEmployee()
        {
            return PartialView("EditEmployee");
        }

        public ActionResult DeleteEmployee()
        {
            return PartialView("DeleteEmployee");
        }
    }
}  
 
