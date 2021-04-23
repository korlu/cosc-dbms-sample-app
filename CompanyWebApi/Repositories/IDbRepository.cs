using System.Threading.Tasks;

namespace CompanyWebApi.Repositories
{
    public interface IDbRepository
    {
         Task<object> ExecuteAsync(string sqlQuery);
    }
}