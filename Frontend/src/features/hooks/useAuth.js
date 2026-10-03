import { Registerservice,Loginservice } from "../services/auth.service";
import { setUser,setLoading,setError } from "../state/auth.slice";
import { useDispatch, useSelector } from 'react-redux';

export function useAuth() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  async function handleRegister({ email, password, Username, username }) {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      const data = await Registerservice({
        email,
        password,
        Username: Username || username
      });
      dispatch(setUser(data.user));
      return data;
    } catch (err) {
      const errorMsg =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.msg ||
        err.message ||
        "Registration failed";
      dispatch(setError(errorMsg));
      return null;
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function handleLogin({ email, password }) {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      const data = await Loginservice({ email, password });
      dispatch(setUser(data.user));
      return data;
    } catch (err) {
      const errorMsg =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.msg ||
        err.message ||
        "Login failed";
      dispatch(setError(errorMsg));
      return null;
    } finally {
      dispatch(setLoading(false));
    }
  }

  return {
    handleRegister,
    handleLogin,
    user,
    loading,
    error,
    setError: (msg) => dispatch(setError(msg)),
    clearError: () => dispatch(setError(null))
  };
}

export default useAuth;