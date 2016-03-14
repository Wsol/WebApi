using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Api.Models;

namespace Api.Controllers
{
    public class AvailableSchedulesController : ApiController
    {
        private dbAnalisisEntities db = new dbAnalisisEntities();

        // GET: api/AvailableSchedules
        public IQueryable<AvailableSchedule> GetAvailableSchedules()
        {
            return db.AvailableSchedules;
        }

        // GET: api/AvailableSchedules/5
        [ResponseType(typeof(AvailableSchedule))]
        public async Task<IHttpActionResult> GetAvailableSchedule(int id)
        {
            AvailableSchedule availableSchedule = await db.AvailableSchedules.FindAsync(id);
            if (availableSchedule == null)
            {
                return NotFound();
            }

            return Ok(availableSchedule);
        }

        // PUT: api/AvailableSchedules/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAvailableSchedule(int id, AvailableSchedule availableSchedule)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != availableSchedule.Id)
            {
                return BadRequest();
            }

            db.Entry(availableSchedule).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AvailableScheduleExists(id))
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

        // POST: api/AvailableSchedules
        [ResponseType(typeof(AvailableSchedule))]
        public async Task<IHttpActionResult> PostAvailableSchedule(AvailableSchedule availableSchedule)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AvailableSchedules.Add(availableSchedule);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AvailableScheduleExists(availableSchedule.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = availableSchedule.Id }, availableSchedule);
        }

        // DELETE: api/AvailableSchedules/5
        [ResponseType(typeof(AvailableSchedule))]
        public async Task<IHttpActionResult> DeleteAvailableSchedule(int id)
        {
            AvailableSchedule availableSchedule = await db.AvailableSchedules.FindAsync(id);
            if (availableSchedule == null)
            {
                return NotFound();
            }

            db.AvailableSchedules.Remove(availableSchedule);
            await db.SaveChangesAsync();

            return Ok(availableSchedule);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AvailableScheduleExists(int id)
        {
            return db.AvailableSchedules.Count(e => e.Id == id) > 0;
        }
    }
}