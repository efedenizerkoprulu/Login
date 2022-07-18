using Core.DataAccess.EntityFramework;
using Core.Entities.Concrete;
using DataAccess.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{

    public class EfUserDal : EfEntityRepositoryBase<User, IzmirTecnologyCompanyProjectContext>, IUserDal
    {
        public List<OperationClaim> GetClaims(User user)
        {
            using (var context = new IzmirTecnologyCompanyProjectContext())
            {
                var result = context.OperationClaims.Join(context.UserOperationClaims,
                    operationClaim => operationClaim.Id,
                    userOperationClaim => userOperationClaim.Id,
                    (operationClaim, userOperationClaim)
                    => new { operationClaim, userOperationClaim })
                    .Where(x => x.userOperationClaim.UserId == user.Id)
                    .Select(y => new OperationClaim
                    {
                        Id = y.operationClaim.Id,
                        Name = y.operationClaim.Name
                    });
                return result.ToList();
            }
        }
    }
}
