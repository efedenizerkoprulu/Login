using Castle.DynamicProxy;
using Core.Utilities.Interceptors;
using System.Reflection;

public abstract partial class MethodInterception
{
    /// <summary>
    ///  read method and class attribute, 
    ///  add them to the list only sort the working order by priority work order
    /// </summary>

    public class AspectInterceptorSelector : IInterceptorSelector
    {
        public IInterceptor[] SelectInterceptors(Type type, MethodInfo method, IInterceptor[] interceptors)
        {
            var classAttributes = type.GetCustomAttributes<MethodInterceptionBaseAttribute>
                (true).ToList();
            var methodAttributes = type.GetMethod(method.Name)
                .GetCustomAttributes<MethodInterceptionBaseAttribute>(true);
            classAttributes.AddRange(methodAttributes);

            return classAttributes.OrderBy(x => x.Priority).ToArray();
        }
    }
}
