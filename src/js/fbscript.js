export function mapAuthCodeToMessage(authCode) {
    switch (authCode) {
      case "auth/invalid-password":
        return "The provided value for the password is invalid. It must be a string with at least six characters.";
  
      case "auth/invalid-email":
        return "Email provided is invalid";
  
      case "auth/email-already-in-use":
        return "Email is already in use";

      case "auth/wrong-password":
        return "Incorrect password.";

      case "auth/email-already-exists":
        return "Email is already in use";
        
      case "auth/insufficient-permission":
        return "Insufficient Permission.";

      case "auth/internal-error":
        return "Internal Error.";
      
  
      default:
        return "Couldn't figure out what the issue is. Will add more error codes in the future. Send to ADMIN for more assistance";
    }
  }
  
