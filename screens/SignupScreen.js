import { useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';

import { createUser } from '../util/auth';

function SignupScreen() {

  const [isAuthneticating, setIsAuthneticating] = useState(false);
  
  async function signupHandler({email, password}){
    setIsAuthneticating(true);
    await createUser(email, password);
    setIsAuthneticating(false);
  }

  if (isAuthneticating){
    return <LoadingOverlay message="Creating user..." />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;