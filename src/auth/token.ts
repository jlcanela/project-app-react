import { useAuth0 } from '@auth0/auth0-react';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  app_metadata?: {
    project?: {
      user_id?: string;
    };
  };
  // Add other expected properties here
}

export const useFetchUserIdFromToken = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getUserId = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      const decodedToken: DecodedToken = jwtDecode<DecodedToken>(accessToken);
      const userId = decodedToken.app_metadata?.project?.user_id;
      return userId;
    } catch (error) {
      console.error('Error getting user ID from token:', error);
      return null;
    }
  };

  return getUserId;
};
