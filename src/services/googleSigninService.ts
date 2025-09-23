import { CLIENT_ID } from '@env';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';

export class GoogleSignInService {
  static configure() {
    GoogleSignin.configure({
      webClientId: CLIENT_ID,
      offlineAccess: true,
      hostedDomain: '',
      iosClientId: CLIENT_ID,
      forceCodeForRefreshToken: true,
      profileImageSize: 120,
    });
  }

  static async signIn(): Promise<User | null> {
    try {
      await GoogleSignin.hasPlayServices();
      const response: any = await GoogleSignin.signIn();

      // Handle different possible response structures
      if (response && response.type === 'success') {
        // If it's wrapped in a response object
        return response.data;
      } else if (response && response.user) {
        // If it's already a User object
        return response;
      } else {
        // If it's the direct response
        return response;
      }
    } catch (error: any) {
      console.log('Sign-in error:', error);
      return null;
    }
  }

  //   static async signIn(): Promise<{
  //     success: boolean;
  //     data?: User
  //     error?: string;
  //   }> {
  //     try {
  //       const hasPlayServices = await GoogleSignin.hasPlayServices();
  //       if (!hasPlayServices) {
  //         return {
  //           success: false,
  //           error: 'Google Play Services not available',
  //         };
  //       }

  //       // GoogleSignin.signIn() returns User directly
  //       const userInfo: User = await GoogleSignin.signIn();

  //       return {
  //         success: true,
  //         data: userInfo, // This is already a User object
  //       };
  //     } catch (error: any) {
  //       let errorMessage = 'Unknown error occurred';

  //       switch (error.code) {
  //         case statusCodes.SIGN_IN_CANCELLED:
  //           errorMessage = 'User cancelled the login flow';
  //           break;
  //         case statusCodes.IN_PROGRESS:
  //           errorMessage = 'Sign-in already in progress';
  //           break;
  //         case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
  //           errorMessage = 'Play services not available or outdated';
  //           break;
  //         default:
  //           errorMessage = error.message || 'Sign-in failed';
  //       }

  //       console.log('Sign-in error:', errorMessage);
  //       return {
  //         success: false,
  //         error: errorMessage,
  //       };
  //     }
  //   }

  static async signOut(): Promise<{ success: boolean; error?: string }> {
    try {
      await GoogleSignin.signOut();
      return { success: true };
    } catch (error: any) {
      console.error('Sign out error:', error);
      return {
        success: false,
        error: error.message || 'Sign-out failed',
      };
    }
  }

  static async revokeAccess(): Promise<{ success: boolean; error?: string }> {
    try {
      await GoogleSignin.revokeAccess();
      return { success: true };
    } catch (error: any) {
      console.error('Revoke access error:', error);
      return {
        success: false,
        error: error.message || 'Revoke access failed',
      };
    }
  }

  static async getCurrentUser(): Promise<{
    success: boolean;
    user?: User;
    error?: string;
  }> {
    try {
      const currentUser = await GoogleSignin.getCurrentUser();
      if (currentUser) {
        return {
          success: true,
          user: currentUser,
        };
      } else {
        return {
          success: false,
          error: 'No current user',
        };
      }
    } catch (error: any) {
      console.log('Get current user error:', error);
      return {
        success: false,
        error: error.message || 'Failed to get current user',
      };
    }
  }

  static async isUserSignedIn(): Promise<boolean> {
    try {
      const tokens = await GoogleSignin.getTokens();
      return tokens && tokens.accessToken ? true : false;
    } catch (error) {
      console.log('No tokens found, user not signed in');
      return false;
    }
  }
}
