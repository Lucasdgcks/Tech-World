import "../Pages/stylesPages/Smartphone.css";
import smartphoneGif from "../assets/smartphone.gif"; // Importe a imagem corretamente


const Smartphone = () => {
  const smartphones = [
    {
      id: 1,
      nome: "TS Mini",
      descricao: "Tela HD de 6,1”, Chip TS-X1, Câmera 16MP.",
      preco: "R$ 1.799,00",
      imagem: iphoneImage,
      frete: "R$ 30,00"
    },
    {
      id: 2,
      nome: "TS Plus",
      descricao: "Tela OLED de 6,5”, Chip TS-X2, Câmera 32MP.",
      preco: "R$ 2.499,00",
      imagem: galaxyImage,
      frete: "R$ 40,00"
    },
    {
      id: 3,
      nome: "TS Pro Max",
      descricao: "Tela Super AMOLED 6,8”, Chip TS-X3, Câmera 50MP.",
      preco: "R$ 3.299,00",
      imagem: xiaomiImage,
      frete: "R$ 50,00"
    },
    {
      id: 4,
      nome: "TS Lite",
      descricao: "Tela LCD 6,0”, Chip TS-L1, Câmera 12MP.",
      preco: "R$ 1.199,00",
      imagem: iphoneImage,
      frete: "R$ 25,00"
    },
    {
      id: 5,
      nome: "TS Ultra",
      descricao: "Tela AMOLED 6,9”, Chip TS-U1, Câmera 108MP.",
      preco: "R$ 5.499,00",
      imagem: galaxyImage,
      frete: "R$ 60,00"
    },
    {
      id: 6,
      nome: "TS Max",
      descricao: "Tela OLED 6,7”, Chip TS-M1, Câmera 64MP.",
      preco: "R$ 4.199,00",
      imagem: xiaomiImage,
      frete: "R$ 50,00"
    },
    {
      id: 7,
      nome: "TS Edge",
      descricao: "Tela Curva 6,8”, Chip TS-E1, Câmera 48MP.",
      preco: "R$ 2.899,00",
      imagem: iphoneImage,
      frete: "R$ 45,00"
    },
    {
      id: 8,
      nome: "TS Neo",
      descricao: "Tela FHD+ 6,2”, Chip TS-N1, Câmera 20MP.",
      preco: "R$ 1.999,00",
      imagem: galaxyImage,
      frete: "R$ 35,00"
    },
    {
      id: 9,
      nome: "TS Vibe",
      descricao: "Tela AMOLED 6,4”, Chip TS-V1, Câmera 24MP.",
      preco: "R$ 2.199,00",
      imagem: xiaomiImage,
      frete: "R$ 30,00"
    },
    {
      id: 10,
      nome: "TS Zoom",
      descricao: "Tela 6,7” Full HD, Chip TS-Z1, Câmera 64MP.",
      preco: "R$ 3.599,00",
      imagem: iphoneImage,
      frete: "R$ 50,00"
    },
    {
      id: 11,
      nome: "TS Max Plus",
      descricao: "Tela OLED 6,8”, Chip TS-MX1, Câmera 72MP.",
      preco: "R$ 3.999,00",
      imagem: galaxyImage,
      frete: "R$ 60,00"
    },
    {
      id: 12,
      nome: "TS Air",
      descricao: "Tela LCD 6,0”, Chip TS-A1, Câmera 10MP.",
      preco: "R$ 999,00",
      imagem: xiaomiImage,
      frete: "R$ 20,00"
    },
    {
      id: 13,
      nome: "TS Max Ultra",
      descricao: "Tela AMOLED 7,0”, Chip TS-MX2, Câmera 120MP.",
      preco: "R$ 6.799,00",
      imagem: iphoneImage,
      frete: "R$ 70,00"
    },
    {
      id: 14,
      nome: "TS Flex",
      descricao: "Tela dobrável 7,2”, Chip TS-F1, Câmera 50MP.",
      preco: "R$ 5.199,00",
      imagem: galaxyImage,
      frete: "R$ 60,00"
    },
    {
      id: 15,
      nome: "TS Active",
      descricao: "Tela LCD 6,2”, Chip TS-A2, Câmera 16MP.",
      preco: "R$ 1.599,00",
      imagem: xiaomiImage,
      frete: "R$ 30,00"
    },
    {
      id: 16,
      nome: "TS Pro Ultra",
      descricao: "Tela AMOLED 6,9”, Chip TS-PX1, Câmera 90MP.",
      preco: "R$ 4.899,00",
      imagem: iphoneImage,
      frete: "R$ 55,00"
    },
    {
      id: 17,
      nome: "TS One",
      descricao: "Tela FHD 6,3”, Chip TS-O1, Câmera 32MP.",
      preco: "R$ 2.399,00",
      imagem: galaxyImage,
      frete: "R$ 40,00"
    },
    {
      id: 18,
      nome: "TS Fusion",
      descricao: "Tela AMOLED 6,5”, Chip TS-F2, Câmera 48MP.",
      preco: "R$ 3.199,00",
      imagem: xiaomiImage,
      frete: "R$ 50,00"
    },
    {
      id: 19,
      nome: "TS Pro Lite",
      descricao: "Tela HD 6,1”, Chip TS-PL1, Câmera 13MP.",
      preco: "R$ 1.699,00",
      imagem: iphoneImage,
      frete: "R$ 25,00"
    },
    {
      id: 20,
      nome: "TS Vision",
      descricao: "Tela 6,6” OLED, Chip TS-VX1, Câmera 60MP.",
      preco: "R$ 3.299,00",
      imagem: galaxyImage,
      frete: "R$ 45,00"
    }
  ];

  return (
    <section className="smartphone-page">
      <h1> Smartphones<img src={smartphoneGif} alt="smartphone gif" /></h1>
      <div className="smartphone-container">
        {smartphones.map((phone) => (
          <div key={phone.id} className="smartphone-card">
            <img src={phone.imagem} alt={phone.nome} />
            <h2>{phone.nome}</h2>
            <p>{phone.descricao}</p>
            <span>{phone.preco}</span>
            <p className="frete">Frete: {phone.frete}</p>
            <button className="comprar-button">Comprar</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Smartphone;
