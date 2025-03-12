import "../styles/Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <video className="banner-video" autoPlay loop muted>
        <source src="/src/assets/videoWorld.mp4" type="video/mp4" />
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
