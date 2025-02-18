import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import { setError, setUser, startLogin } from "../redux/auth_slice";
import { IAuthUser } from "../types/User";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

function LoginButton() {
  const dispatch: AppDispatch = useDispatch();

  const handleLoginSuccess = (response: CredentialResponse) => {
    dispatch(startLogin());
    const credential = response.credential;
    if (credential) {
      const decodeUser = jwtDecode<IAuthUser>(credential);
      dispatch(setUser(decodeUser));
    } else {
      dispatch(setError());
    }
  };
  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="1038283444648-4p0dkn0i4u8b1bnteilhmrjv5figj12k.apps.googleusercontent.com">
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
    </GoogleOAuthProvider>
  );
}

export default LoginButton;
