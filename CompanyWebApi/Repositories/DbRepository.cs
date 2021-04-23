using Dapper;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace CompanyWebApi.Repositories
{
    public class DbRepository : IDbRepository
    {
        private readonly IDbConnection connection;

        public DbRepository(IDbConnection connection)
        {
            this.connection = connection;
        }

        public async Task<object> ExecuteAsync(string sqlQuery)
        {
            using (IDbConnection db = connection)
            {                
                var res = await db.QueryAsync(sqlQuery);
                return res;
            }
        }
    }
}