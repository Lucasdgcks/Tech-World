import { motion } from "framer-motion";
import "../styles/Artigo01.css";
import imagemArtigo from "../assets/artigo-01.png"; // Importando a imagem

const Artigo01 = () => {
  return (
    <article className="artigo01">
      <img src={imagemArtigo} alt="techworld" /> {/* Usando a imagem importada */}
      
      <motion.div 
        className="artigo-texto01"
        initial={{ opacity: 0, x: 100 }} // Começa invisível e deslocado para a direita
        whileInView={{ opacity: 1, x: 0 }} // Aparece e desliza para a esquerda
        transition={{ duration: 1, ease: "easeOut" }} // Suaviza a animação
      >
        <h2>Tech World – Onde Inovação Encontra a Praticidade!</h2>
        <p>
        Na Tech World, acreditamos que a tecnologia deve ser acessível, prática e transformadora. Nosso objetivo é oferecer produtos que facilitam a sua vida, combinando qualidade, design moderno e funcionalidade. Com uma linha exclusiva de itens criados por nossa própria fábrica, garantimos que cada produto seja testado e aprovado para entregar o melhor desempenho.
        </p>
        <p>
        Seja para melhorar sua rotina, otimizar tarefas ou simplesmente trazer mais diversão ao seu dia, temos as soluções ideais para você. Além disso, nosso compromisso vai além dos produtos oferecemos um atendimento personalizado e um processo de compra simples e seguro.
        </p>
        <p>
        Explore nossa loja e descubra como a tecnologia pode ser sua aliada para conquistar ainda mais resultados no seu dia a dia.
        </p>
      </motion.div>
    </article>
  );
};

export default Artigo01;

