import { motion } from "framer-motion";
import "../styles/Suporte.css";
import telefoneGif from "../assets/telefone.gif"; // Importe a imagem corretamente
import suporteImage from "../assets/suporte.png"; // Importe a imagem corretamente

const Suporte = () => {
  return (
    <section className="suporte">
      
      <motion.div 
        className="suporte-texto"
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }} 
      >
        <h2>
          Suporte de Qualidade para Você
          <img id="icon-telefone" src={telefoneGif} alt="Telefone" />
        </h2>
        <p>
          Nosso compromisso vai além da venda. Oferecemos um suporte técnico especializado para garantir que você tenha a melhor experiência com nossos produtos.  
        </p>
        <p>
          Nossa equipe está disponível para tirar dúvidas, auxiliar na configuração e resolver qualquer problema com atendimento rápido e eficiente.  
        </p>
        <p>
          Contamos com múltiplos canais de atendimento, incluindo chat online, e-mail e suporte telefônico, sempre prontos para te ajudar!  
        </p>
        <p className="destaque">💡 Sua satisfação é a nossa prioridade! 💡</p>
      </motion.div>
      
      <img src={suporteImage} alt="Suporte ao Cliente" />
    </section>
  );
};

export default Suporte;
