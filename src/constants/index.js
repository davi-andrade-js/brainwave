import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../../public/assets";

export const navigation = [
  {
    id: "0",
    title: "Ferramentas",
    url: "#features",
  },
  {
    id: "1",
    title: "Como usar",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Preços",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Criar conta",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Entrar",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Geração de fotos",
  "Melhoria de resolução",
  "Integração perfeita",
];

export const brainwaveServicesIcons = [recording03, recording01, disc02, chromecast, sliders04];

export const roadmap = [
  {
    id: "0",
    title: "Reconhecimento de voz",
    text: "Ative o chatbot para processar comandos de voz em qualquer língua, tornando mais fácil a interação do usuário.",
    date: "Maio 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamificação",
    text: "Adicione elementos semelhante a jogos, como conquistas e rankings, para incentivar o engajamento do usuário com o chatbot.",
    date: "Maio 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Customização do chatbot",
    text: "Permite usúrios a personalizar a aparencia e comportamento do chatbot, tornando-o mais engajado e divertido para se interagir.",
    date: "Maio 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integração com API's",
    text: "Permita que o chatbot acesse dados externos, como API's de clima ou de notícias, para prover mais informações relevantes",
    date: "Maio 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Com automação inteligente e segurança, esta é a solução perfeita para equipes que buscam melhorar a produtividade.";

export const collabContent = [
  {
    id: "0",
    title: "Integração perfeita",
    text: collabText,
  },
  {
    id: "1",
    title: "Automação inteligente",
  },
  {
    id: "2",
    title: "Segurança de alto nível",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Básico",
    description: "Chatbot de IA, recomendações personalizadas",
    price: "0",
    features: [
      "Um chatbot de IA que pode entender seus pedidos",
      "Recomendações personalizadas baseadas nas suas preferências",
      "Possibilidade de explorar o aplicativo e suas ferramentas sem custos",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Chatbot de IA avançado, suporte prioritário, painel de análise",
    price: "9.99",
    features: [
      "Um chatbot de IA que pode entender pedidos complexos",
      "Um painel de anaálise para visualizar as suas conversações",
      "Prioridade de suporte para resolver problemas rapidamente",
    ],
  },
  {
    id: "2",
    title: "Empresa",
    description: "Chatbot de IA personalizado, análises avançadas e conta personalizada",
    price: null,
    features: [
      "Um chatbot de IA que pode entender seus pedidos",
      "Recomendações personalizadas baseadas nas suas preferências",
      "Possibilidade de explorar o aplicativo e suas ferramentas sem custos",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Pergunte qualquer coisa",
    text: "Permite que os usuários encontrem respostas para suas perguntas rapidamente, sem precisar pesquisar em várias fontes.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Evolui todos os dias",
    text: "O aplicativo usa processamento de linguagem natural para entender as perguntas dos usuários e fornecer respostas precisas e relevantes.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Conecte-se em qualquer lugar",
    text: "Conecte-se com o chatbot de IA de qualquer lugar, em qualquer dispositivo, tornando-o mais acessível e conveniente.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Resposta rápida",
    text: "Permite que os usuários encontrem respostas para suas perguntas rapidamente, sem precisar pesquisar em várias fontes.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Pergunte qualquer coisa",
    text: "Permite que os usuários encontrem respostas para suas perguntas rapidamente, sem precisar pesquisar em várias fontes.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Evolui todos os dias",
    text: "O aplicativo usa processamento de linguagem natural para entender as perguntas dos usuários e fornecer respostas precisas e relevantes.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
