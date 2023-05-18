import { useState, useEffect, useContext } from "react";
import { useAlert } from "react-alert";
import { AuthContext } from "../../../context/auth.context";
import { AuthRepository } from "../../../repository/auth.repository";

export default function SigninViewModel() {
  const authRepository = new AuthRepository();
  const { setToken } = useContext(AuthContext);
  const alert = useAlert();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isFormValid, setIsFormValid] = useState({
    email: false,
    password: false,
  });

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleSubmit = (e) => {
    let oldValues = isFormValid;

    if (!email) {
      oldValues = { ...oldValues, email: true };
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      oldValues = { ...oldValues, email: true };
    } else {
      oldValues = { ...oldValues, email: false };
    }

    if (!password) {
      oldValues = { ...oldValues, password: true };
    } else if (password.length < 8) {
      oldValues = { ...oldValues, password: true };
    } else {
      oldValues = { ...oldValues, password: false };
    }
    setIsFormValid(oldValues);

    if (oldValues.email === false && oldValues.password === false) {
      login({ email, password });
    }
  };
  const login = async (payload) => {
    try {
      setLoading(true);
      const data = await authRepository.login(payload);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem("userToken", data.token);
      setToken(data.token);
      setLoading(false);
    } catch (error) {
      alert.error(error.message);
      setLoading(false);
    }
  };
  return {
    handleSubmit,
    loading,
    handleEmail,
    handlePassword,
    isFormValid,
    handleShow,
    show,
  };
}
