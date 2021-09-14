import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import "./styles.css";
import imgRegister from "../../assets/register.svg";
import { Context } from "../../Context";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();
  const { setUser, user } = useContext(Context);

  function handleChange(event) {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  }

  function register(e) {
    e.preventDefault();

    if (!user.name && !user.email && !user.password)
      return alert("Preencha todos os campos!");

    history.push("/home");
  }

  return (
    <div className="register-container">
      <img src={imgRegister} alt="Image Register" />
      <section className="form">
        <form onSubmit={register}>
          <h1>Crie sua conta gratuita!</h1>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Seu nome completo"
          />
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <input type="password" placeholder="Confirme sua senha" />
          <button className="button" type="submit">
            Cadastrar
          </button>
          <Link className="back-link-register" to="/">
            <FiLogIn size={20} color="#111" />
            Entrar com uma conta
          </Link>
        </form>
      </section>
    </div>
  );
}
