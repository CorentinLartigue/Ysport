package YSport.YSport.Exceptions;

public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String className, Object identifier) {
        super("Can't find the ressource of type "+className+" with identifier "+identifier.toString());
    }

}
