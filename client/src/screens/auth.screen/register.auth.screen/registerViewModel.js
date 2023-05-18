import { useState, useEffect, useContext } from "react";
import { useAlert } from "react-alert";
import { AuthRepository } from "../../../repository/auth.repository";
import { AuthContext } from "../../../context/auth.context";
export default function RegisterViewModel() {
  const authRepository = new AuthRepository();
  const alert = useAlert();
  const { setToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isFormValid, setIsFormValid] = useState({
    id: false,
    name: false,
    selectedOption: false,
    email: false,
    password: false,
  });

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDropdown = (e) => {
    setSelectedOption(e.target.value);
  };

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

    if (id === "" || id === null || id === undefined || id.length < 3) {
      oldValues = { ...oldValues, id: true };
    } else {
      oldValues = { ...oldValues, id: false };
    }
    if (name === "" || name === null || name === undefined || name.length < 3) {
      oldValues = { ...oldValues, name: true };
    } else {
      oldValues = { ...oldValues, name: false };
    }
    if (selectedOption === "") {
      oldValues = { ...oldValues, selectedOption: true };
    } else {
      oldValues = { ...oldValues, selectedOption: false };
    }
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
    if (
      oldValues.id === false &&
      oldValues.name === false &&
      oldValues.selectedOption === false &&
      oldValues.email === false &&
      oldValues.password === false
    ) {
      verfifyEmployeeId(id, selectedOption);
    }
  };
  const verfifyEmployeeId = async (employeeId, roles) => {
    try {
      setLoading(true);
      const data = await authRepository.verifyEmployeeId(employeeId, roles);
      updateProfile(data.companyId, { email, password, name , updateType:"register" });
    } catch (error) {
      alert.error(error.message);
      setLoading(false);
    }
  };
  const updateProfile = async (id, payload) => {
    try {
      const data = await authRepository.updateProfile(id, payload);
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
    handleId,
    handleName,
    handleEmail,
    handlePassword,
    show,
    handleShow,
    isFormValid,
    handleDropdown,
  };
}
