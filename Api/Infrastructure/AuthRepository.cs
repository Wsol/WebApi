using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Api.Models;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Api.Infrastructure
{
    public class AuthRepository : IDisposable
    {
        private dbAnalisisEntities _ctx;


        public AuthRepository()
        {
            _ctx = new dbAnalisisEntities();
        }

        //public async Task<IdentityResult> RegisterUser( UserModel userModel )
        //{
        //    IdentityUser user = new IdentityUser
        //    {
        //        UserName = userModel.UserName
        //    };

        //    var result = await _userManager.CreateAsync( user, userModel.Password );

        //    return result;
        //}

        public async Task<User> FindUser( string username, string password )
        {
            //IdentityUser user = await _userManager.FindAsync( userName, password );
            password=Helper.GetHash(password);
            User user = await _ctx.Users.FirstOrDefaultAsync( p => p.Username == username && p.PasswordHash == password && p.Enabled );

            return user;
        }

        public async Task<List<UserRole>> FindUserRoles(User user)
        {
            List<UserRole> roles=new List<UserRole>();
            if (user != null)
                roles = await _ctx.UserRoles.Where(p => p.User.Username == user.Username).ToListAsync();

            return roles;
        }

        public ApplicationClient FindClient( string clientId )
        {
            var client = _ctx.ApplicationClients.Find( clientId );

            return client;
        }

        public async Task<bool> AddRefreshToken( RefreshToken token )
        {

            var existingToken = _ctx.RefreshTokens.SingleOrDefault(r => r.Subject == token.Subject && r.ClientId == token.ClientId);

            if ( existingToken != null )
            {
                var result = await RemoveRefreshToken( existingToken );
            }

            _ctx.RefreshTokens.Add( token );

            return await _ctx.SaveChangesAsync() > 0;
        }

        public async Task<bool> RemoveRefreshToken( string refreshTokenId )
        {
            var refreshToken = await _ctx.RefreshTokens.FindAsync( refreshTokenId );

            if ( refreshToken != null )
            {
                _ctx.RefreshTokens.Remove( refreshToken );
                return await _ctx.SaveChangesAsync() > 0;
            }

            return false;
        }

        public async Task<bool> RemoveRefreshToken( RefreshToken refreshToken )
        {
            _ctx.RefreshTokens.Remove( refreshToken );
            return await _ctx.SaveChangesAsync() > 0;
        }

        public async Task<RefreshToken> FindRefreshToken( string refreshTokenId )
        {
            var refreshToken = await _ctx.RefreshTokens.FindAsync( refreshTokenId );

            return refreshToken;
        }

        public List<RefreshToken> GetAllRefreshTokens()
        {
            return _ctx.RefreshTokens.ToList();
        }


        public void Dispose()
        {
            _ctx.Dispose();
            //_userManager.Dispose();

        }
    }
}