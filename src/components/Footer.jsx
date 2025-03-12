import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h3>📞 Contato</h3>
          <p>Telefone: (84) 98765-4321</p>
          <p>WhatsApp: (84) 91234-5678</p>
        </div>

        <div className="footer-section">
          <h3>📧 Suporte</h3>
          <p>Email: suporte@techworld.com</p>
          <p>Atendimento: Seg - Sex, 08h - 18h</p>
        </div>

        <div className="footer-section">
          <h3>📍 Endereço</h3>
          <p>Rua Adeodato José, 123</p>
          <p>Natal - RN, 59152-010</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Tech World. Todos os direitos reservados.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
