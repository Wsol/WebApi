﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Api.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class dbAnalisisEntities : DbContext
    {
        public dbAnalisisEntities()
            : base("name=dbAnalisisEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AvailableSchedule> AvailableSchedules { get; set; }
        public virtual DbSet<Class> Classes { get; set; }
        public virtual DbSet<Hour> Hours { get; set; }
        public virtual DbSet<Person> People { get; set; }
        public virtual DbSet<Section> Sections { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<SectionStudent> SectionStudents { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<UserRole> UserRoles { get; set; }
        public virtual DbSet<ApplicationClient> ApplicationClients { get; set; }
        public virtual DbSet<RefreshToken> RefreshTokens { get; set; }
    }
}