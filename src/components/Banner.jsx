import "../styles/Banner.css";
import videoWorld from "../assets/videoWorld.mp4"; // Importando o vídeo

const Banner = () => {
  return (
    <section className="banner">
      <video className="banner-video" autoPlay loop muted>
        <source src={videoWorld} type="video/mp4" /> {/* Usando o vídeo importado */}
        Seu navegador não suporta o vídeo.
      </video>
      <div className="banner-content">
        <h1>Bem-vindo a Tech World!</h1>
        <p>Encontre os melhores produtos do mundo com descontos especiais.</p>
        <a href="#produtos" className="cta-button">Confira Agora</a>
      </div>
    </section>
  );
};

export default Banner;