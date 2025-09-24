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
      if (response && response.type === 'success') {
        return response.data;
      } else if (response && response.user) {
        return response;
      } else {
        return response;
      }
    } catch (error: any) {
      return null;
    }
  }

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
      return false;
    }
  }
}
