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
    public class ApplicationClientsController : ApiController
    {
        private dbAnalisisEntities db = new dbAnalisisEntities();

        // GET: api/ApplicationClients
        public IQueryable<ApplicationClient> GetApplicationClients()
        {
            return db.ApplicationClients;
        }

        // GET: api/ApplicationClients/5
        [ResponseType(typeof(ApplicationClient))]
        public async Task<IHttpActionResult> GetApplicationClient(string id)
        {
            ApplicationClient applicationClient = await db.ApplicationClients.FindAsync(id);
            if (applicationClient == null)
            {
                return NotFound();
            }

            return Ok(applicationClient);
        }

        // PUT: api/ApplicationClients/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutApplicationClient(string id, ApplicationClient applicationClient)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != applicationClient.Id)
            {
                return BadRequest();
            }

            db.Entry(applicationClient).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplicationClientExists(id))
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

        // POST: api/ApplicationClients
        [ResponseType(typeof(ApplicationClient))]
        public async Task<IHttpActionResult> PostApplicationClient(ApplicationClient applicationClient)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ApplicationClients.Add(applicationClient);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ApplicationClientExists(applicationClient.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = applicationClient.Id }, applicationClient);
        }

        // DELETE: api/ApplicationClients/5
        [ResponseType(typeof(ApplicationClient))]
        public async Task<IHttpActionResult> DeleteApplicationClient(string id)
        {
            ApplicationClient applicationClient = await db.ApplicationClients.FindAsync(id);
            if (applicationClient == null)
            {
                return NotFound();
            }

            db.ApplicationClients.Remove(applicationClient);
            await db.SaveChangesAsync();

            return Ok(applicationClient);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ApplicationClientExists(string id)
        {
            return db.ApplicationClients.Count(e => e.Id == id) > 0;
        }
    }
}