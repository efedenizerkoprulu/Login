namespace Core.Entities.Concrete
{
    public class UserOperationClaim :ManageID,IEntity
    {
        public int UserId { get; set; }
        public int OperationClaimId { get; set; }
    }
}
