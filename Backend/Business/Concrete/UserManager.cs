using Business.Abstract;
using Core.Business;
using Core.Entities.Concrete;
using Core.Results;
using DataAccess.Abstract;

namespace Business.Concrete
{
    public class UserManager : IUserService
    {
        IUserDal _userDal;

        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
        }

        public List<OperationClaim> GetClaims(User user)
        {
            return _userDal.GetClaims(user);
        }

        public User GetByMail(string email)
        {
            return _userDal.Get(u => u.Email == email);
        }

        public IResult Add(User entity)
        {
            _userDal.Add(entity);
            return new SuccessResult("User Added");
        }
    }
}
