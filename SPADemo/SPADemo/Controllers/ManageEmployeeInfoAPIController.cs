using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using SPADemo.Models;

namespace SPADemo.Controllers
{
    public class ManageEmployeeInfoAPIController : ApiController
    {
        private EmployeeEntities db = new EmployeeEntities();

        // GET: api/ManageEmployeeInfoAPI
        public IQueryable<EmployeeTable> GetEmployeeTable()
        {
            return db.EmployeeTable;
        }

        // GET: api/ManageEmployeeInfoAPI/5
        [ResponseType(typeof(EmployeeTable))]
        public IHttpActionResult GetEmployeeTable(int id)
        {
            EmployeeTable employeeTable = db.EmployeeTable.Find(id);
            if (employeeTable == null)
            {
                return NotFound();
            }

            return Ok(employeeTable);
        }

        // PUT: api/ManageEmployeeInfoAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployeeTable(int id, EmployeeTable employeeTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employeeTable.EmployeeID)
            {
                return BadRequest();
            }

            db.Entry(employeeTable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeTableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ManageEmployeeInfoAPI
        [ResponseType(typeof(EmployeeTable))]
        public IHttpActionResult PostEmployeeTable(EmployeeTable employeeTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EmployeeTable.Add(employeeTable);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (EmployeeTableExists(employeeTable.EmployeeID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = employeeTable.EmployeeID }, employeeTable);
        }

        // DELETE: api/ManageEmployeeInfoAPI/5
        [ResponseType(typeof(EmployeeTable))]
        public IHttpActionResult DeleteEmployeeTable(int id)
        {
            EmployeeTable employeeTable = db.EmployeeTable.Find(id);
            if (employeeTable == null)
            {
                return NotFound();
            }

            db.EmployeeTable.Remove(employeeTable);
            db.SaveChanges();

            return Ok(employeeTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeTableExists(int id)
        {
            return db.EmployeeTable.Count(e => e.EmployeeID == id) > 0;
        }
    }
}