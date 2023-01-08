import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../services/AuthContext";

import Heading from "../../components/Heading/Heading";

export default function Admin() {
  const [auth] = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/", { replace: true });
    }
  });

  return <Heading>Admin</Heading>;
}
