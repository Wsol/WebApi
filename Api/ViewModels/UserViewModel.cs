using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api.ViewModels
{
    public class UserViewModel
    {
        public string Username { get; set; }
        public bool Enabled { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<Int32> UserRoles { get; set; }
    }
}