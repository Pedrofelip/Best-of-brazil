"use client";

import { createContext, useState } from "react";

const CartContext = createContext({} as any);
export default CartContext;

export function CartProvider(props: any) {
  const [cartItems, setCartItems] = useState([]);

  const [products, setProducts] = useState([
    {
      id: 1,
      image: [
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      ],
      name: "Queijo Minas Artesanal",
      description:
        "Queijo minas artesanal, curado por 6 meses, com sabor suave e textura cremosa.",
      origin: "Minas Gerais",
      category: "Queijos",
      producedBy: "Queijaria São João",
      weight: "300g",
    },
    {
      id: 2,
      image: [
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      ],
      name: "Mel de Abelha Orgânico",
      description:
        "Mel puro e orgânico, extraído de abelhas cuidadas de forma sustentável.",
      origin: "São Paulo",
      category: "Mel",
      producedBy: "Mel Natural",
      weight: "500g",
    },
    {
      id: 3,
      image: [
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      ],
      name: "Pão de Queijo Congelado",
      description:
        "Delicioso pão de queijo, pronto para assar e saborear no seu café da manhã.",
      origin: "Minas Gerais",
      category: "Pães",
      producedBy: "Pão de Queijo Artesanal",
      weight: "400g",
    },
    {
      id: 4,
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      ],
      name: "Chocolates Finos",
      description:
        "Chocolate gourmet, elaborado com cacau de alta qualidade, disponível em várias versões.",
      origin: "São Paulo",
      category: "Doces",
      producedBy: "Chocolates Finos",
      weight: "250g",
    },
    {
      id: 5,
      image: [
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      ],
      name: "Vinho Varietal",
      description:
        "Vinho de qualidade, produzido com uvas selecionadas, oferecendo um sabor único.",
      origin: "Vale dos Vinhedos",
      category: "Vinhos",
      producedBy: "Vinícola Varietal",
      weight: "750ml",
    },
    {
      id: 6,
      image: [
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      ],
      name: "Salgadinhos Artesanais",
      description:
        "Salgadinhos feitos à mão com ingredientes frescos e selecionados, ideais para petiscar.",
      origin: "Campinas",
      category: "Salgados",
      producedBy: "Salgados de Festa",
      weight: "500g",
    },
    {
      id: 7,
      image: [
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      ],
      name: "Geleia de Morango Caseira",
      description:
        "Geleia feita com morangos frescos e açúcar mascavo, 100% natural e sem conservantes.",
      origin: "São Paulo",
      category: "Geleias",
      producedBy: "Geleias Caseiras",
      weight: "250g",
    },
    {
      id: 8,
      image: [
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      ],
      name: "Mel de Laranjeira",
      description:
        "Mel de laranjeira, com um sabor delicado e suave, ideal para adoçar bebidas e sobremesas.",
      origin: "Espírito Santo",
      category: "Mel",
      producedBy: "Mel Laranjeira",
      weight: "500g",
    },
    {
      id: 9,
      image: [
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      ],
      name: "Queijo Brie",
      description:
        "Queijo brie suave e cremoso, perfeito para entradas e acompanhamento de vinhos.",
      origin: "França",
      category: "Queijos",
      producedBy: "Queijaria Brie",
      weight: "200g",
    },
    {
      id: 10,
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      ],
      name: "Pasta de Amendoim",
      description:
        "Pasta de amendoim cremosa, rica em proteínas, ideal para lanches rápidos e saudáveis.",
      origin: "São Paulo",
      category: "Pasta",
      producedBy: "Pasta Natural",
      weight: "300g",
    },
    {
      id: 11,
      image: [
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      ],
      name: "Vinho Tinto",
      description:
        "Vinho tinto encorpado, perfeito para acompanhar pratos com carnes vermelhas.",
      origin: "Vale dos Vinhedos",
      category: "Vinhos",
      producedBy: "Vinícola Tinto",
      weight: "750ml",
    },
    {
      id: 12,
      image: [
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      ],
      name: "Pipoca Gourmet",
      description:
        "Pipoca gourmet feita com ingredientes especiais e uma pitada de sabor refinado.",
      origin: "São Paulo",
      category: "Petiscos",
      producedBy: "Pipoca Gourmet",
      weight: "200g",
    },
    {
      id: 13,
      image: [
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      ],
      name: "Café Orgânico",
      description:
        "Café orgânico de alta qualidade, com sabor encorpado e aroma intenso.",
      origin: "Minas Gerais",
      category: "Cafés",
      producedBy: "Café Minas",
      weight: "250g",
    },
    {
      id: 14,
      image: [
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      ],
      name: "Mel com Própolis",
      description:
        "Mel misturado com própolis, ideal para fortalecer o sistema imunológico.",
      origin: "São Paulo",
      category: "Mel",
      producedBy: "Mel Saúde",
      weight: "400g",
    },
    {
      id: 15,
      image: [
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
        "https://rocacapital.com.br/cdn/shop/files/b6c092a68be11295a55c4d1cc0006f0f_35cee7b6-9c48-4c78-9b3f-e045c5b20efd.jpg?v=1721223970&width=1500",
      ],
      name: "Presunto Defumado",
      description:
        "Presunto defumado de qualidade, perfeito para sanduíches e lanches rápidos.",
      origin: "Santa Catarina",
      category: "Carnes",
      producedBy: "Carnes Defumadas",
      weight: "300g",
    },
    {
      id: 16,
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXupWpnG7dsZqsfdH7IvKrYB07J_wwAeIgA&s",
      ],
      name: "Chá Verde Orgânico",
      description:
        "Chá verde orgânico, perfeito para momentos de relaxamento e bem-estar.",
      origin: "Minas Gerais",
      category: "Chás",
      producedBy: "Chá Verde",
      weight: "100g",
    },
    {
      id: 17,
      image: [
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
        "https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg",
      ],
      name: "Vinho Branco",
      description:
        "Vinho branco refrescante, ideal para acompanhar pratos leves como frutos do mar.",
      origin: "Vale dos Vinhedos",
      category: "Vinhos",
      producedBy: "Vinícola Branco",
      weight: "750ml",
    },
    {
      id: 18,
      image: [
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
        "https://horacampinas.com.br/wp-content/uploads/2022/05/SABORES-DO-CURRUPIRA-7-scaled.jpg",
      ],
      name: "Salgados de Festa",
      description:
        "Salgadinhos variados, ideais para festas e eventos, preparados com muito sabor.",
      origin: "Campinas",
      category: "Salgados",
      producedBy: "Salgados de Festa",
      weight: "600g",
    },
    {
      id: 19,
      image: [
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
        "https://cdn.awsli.com.br/2500x2500/312/312579/produto/232022655/design-sem-nome--29--w0lj5xpmum.png",
      ],
      name: "Arroz Integral Orgânico",
      description:
        "Arroz integral orgânico, ideal para uma alimentação mais saudável e equilibrada.",
      origin: "São Paulo",
      category: "Grãos",
      producedBy: "Arroz Natural",
      weight: "1kg",
    },
    {
      id: 20,
      image: [
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
        "https://loja.mel.com.br/wp-content/uploads/2022/08/mel-puro-cru-vidro-mel-mel-mel-delivery-sp-1-e1661358845515.jpeg",
      ],
      name: "Mel de Eucalipto",
      description:
        "Mel de eucalipto, com sabor marcante e diversas propriedades terapêuticas.",
      origin: "Minas Gerais",
      category: "Mel",
      producedBy: "Mel de Eucalipto",
      weight: "500g",
    },
  ]);

  function getRandomIndexes(array, n) {
      const indexes = new Set();
      while (indexes.size < n) {
        const randomIndex = Math.floor(Math.random() * array.length);
        indexes.add(randomIndex);
      }
      return [...indexes];
    }
  
    // Pegar 10 índices aleatórios
    const randomIndex = getRandomIndexes(products, 10);
  
    // Selecionar os itens do array pelos índices aleatórios
    const randomProducts = randomIndex.map((index) => products[index]);

  // Função para adicionar um produto ao carrinho
  const addProductToCart = (product: any) => {
    setCartItems((prevCartItems: any) => {
      const isProductInCart = prevCartItems.some((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCartItems; // Se já estiver no carrinho, não adiciona
      }
      return [...prevCartItems, product]; // Caso contrário, adiciona o produto
    });
    alert(`produto ${product.name}`)
  };

  // Função para remover um produto do carrinho
  const removeProductFromCart = (productId) => {
    setCartItems((prevCartItems) => 
      prevCartItems.filter((item) => item.id !== productId)
    );
  };
  return (
    <CartContext.Provider value={{ cartItems, products, randomProducts, addProductToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
