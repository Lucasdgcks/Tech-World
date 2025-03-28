import { motion } from "framer-motion";
import "../styles/Artigo02.css";
import imagemArtigo from "../assets/artigo-02.png"; // Importando a imagem do artigo
import fogueteIcon from "../assets/icons8-foguete-lançado.gif"; // Importando o ícone do foguete

const Artigo02 = () => {
  return (
    <article className="artigo">
      
      <motion.div 
        className="artigo-texto"
        initial={{ opacity: 0, x: -100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }} 
      >
        <h2>
          Tecnologias de Alta Qualidade na Nossa Loja 
          <img id="icon-foguete" src={fogueteIcon} alt="Foguete" /> {/* Usando o ícone importado */}
        </h2>
        <p>
          Na nossa loja, você encontra produtos de alta tecnologia desenvolvidos com os mais modernos padrões de qualidade. 
          Oferecemos eletrônicos de última geração, gadgets inovadores e acessórios de alto desempenho, garantindo durabilidade, eficiência e segurança.
        </p>
        <p>
          Trabalhamos apenas com marcas renomadas e tecnologia de ponta, para que você tenha a melhor experiência em cada compra. 
          Seja para o seu dia a dia ou para potencializar sua produtividade, temos as melhores opções para você!
        </p>
        <p className="destaque">✨ Qualidade e inovação sempre ao seu alcance! ✨</p>
      </motion.div>
      
      <img src={imagemArtigo} alt="Tecnologia de Alta Qualidade" /> {/* Usando a imagem importada */}
    </article>
  );
};

export default Artigo02;