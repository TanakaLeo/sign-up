
import { useState } from "react";
import "../styles/signup.css";

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    team: ""
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    team: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = {
      fullName: !formData.fullName ? "Insira seu nome" : "",
      email: !formData.email ? "Insira um endereço de email válido" : "",
      password: !formData.password ? "A senha deve conter ao menos 8 caracteres" : 
               formData.password.length < 8 ? "A senha deve conter ao menos 8 caracteres" : "",
      team: !formData.team ? "Selecione uma equipe" : ""
    };
    
    setErrors(newErrors);
    
    // Check if there are no errors
    if (!Object.values(newErrors).some(error => error)) {
      console.log("Form submitted:", formData);
      // Here you would typically send data to your backend
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="overlay">
          <div className="logo-container">
            <img 
              src="/public/assets/img/healplanner.png" 
              alt="Logo" 
              className="logo" 
            />
            <h2 className="brand-name">HEALYTICS</h2>
          </div>
        </div>
      </div>
      <div className="signup-right">
        <div className="form-container">
          <div className="form-header">
            <h1>Crie sua conta</h1>
            <p></p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Nome</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Insira seu nome"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="error-message">{errors.fullName}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Insira seu email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Crie uma senha"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="Equipe">Time</label>
              <select
                id="team"
                name="team"
                value={formData.team}
                onChange={handleChange}
              >
                <option value="" disabled>Selecione sua equipe</option>
                <option value="Portfolio">Portfolio</option>
                <option value="Novos Produtos">Novos Produtos</option>
                <option value="team3">Team 3</option>
              </select>
              {errors.team && <p className="error-message">{errors.team}</p>}
            </div>
            
            <button type="submit" className="create-account-btn">
              Criar Conta
            </button>
          </form>
          
          <div className="login-link">
            <p>Já tem uma conta? <a href="#">Log in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
