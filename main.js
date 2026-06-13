import './style.css';

// ===== CONSTANTES =====
const STORAGE_PREFIX = 'finapp_';
const CATEGORIAS = {
  alimentacao: {
    nome: 'Alimentação',
    emoji: '🍽️',
    subcategorias: ['Alimentos e bebidas', 'Delivery de alimentos', 'Restaurantes, bares e lanchonetes', 'Supermercado']
  },
  compras: {
    nome: 'Compras',
    emoji: '🛍️',
    subcategorias: ['Artigos esportivos', 'Artigos infantis', 'Cashback', 'Compras', 'Compras online', 'Eletrônicos', 'Livraria', 'Papelaria', 'Pet Shops e veterinários', 'Vestiário']
  },
  saude: {
    nome: 'Saúde e bem-estar',
    emoji: '💊',
    subcategorias: ['Academia e centros de lazer', 'Bem-estar', 'Dentista', 'Farmácia', 'Hospitais, clínicas e laboratórios', 'Ótica', 'Prática de esportes', 'Saúde', 'Saúde e bem-estar']
  },
  servicos_digitais: {
    nome: 'Serviços digitais',
    emoji: '💻',
    subcategorias: ['Jogos e videogames', 'Serviços digitais', 'Streaming de música', 'Streaming de vídeo']
  },
  transporte: {
    nome: 'Transporte',
    emoji: '🚗',
    subcategorias: ['Aluguel de bicicletas', 'Aluguel de veículos', 'Estacionamentos', 'Manutenção de veículos', 'Multas de trânsito', 'Pedágios e pagamentos no veículo', 'Postos de gasolina', 'Serviços automotivos', 'Taxas e impostos sobre veículos', 'Táxi e transporte privado urbano', 'Transporte', 'Transporte público']
  },
  moradia: {
    nome: 'Moradia',
    emoji: '🏠',
    subcategorias: ['Água', 'Aluguel', 'Celular', 'Eletricidade', 'Gás', 'Impostos sobre moradia', 'Internet', 'Moradia', 'Serviços de utilidade pública', 'Telecomunicação', 'TV', 'Utensílios para casa']
  },
  lazer: {
    nome: 'Lazer e entretenimento',
    emoji: '🎬',
    subcategorias: ['Aeroportos e cias. aéreas', 'Bilhetes', 'Cinema, Teatro e Concertos', 'Estádios e arenas', 'Hospedagem', 'Lazer', 'Museus e pontos turísticos', 'Passagem de ônibus', 'Programas de milhagem', 'Viagens']
  },
  financas: {
    nome: 'Finanças',
    emoji: '💰',
    subcategorias: ['Ajuste de margem', 'Atraso no pagamento e custos de cheque especial', 'Empréstimo estudantil', 'Empréstimos', 'Empréstimos e financiamento', 'Financiamento', 'Financiamento de veículos', 'Financiamento imobiliário', 'Fundos multimercado', 'Investimento automático', 'Investimentos', 'Juros cobrados', 'Juros de rendimentos de dividendos', 'Obrigações legais', 'Pagamento de cartão de crédito', 'Parcelamento de fatura', 'Pensão', 'Pensão alimentícia', 'Renda fixa', 'Renda variável', 'Saldo bloqueado', 'Transferência - Boleto bancário', 'Transferência - Câmbio', 'Transferência - Cheque', 'Transferência - Dinheiro', 'Transferência - Mesma instituição', 'Transferência - PIX', 'Transferência - TED', 'Transferência mesma titularidade', 'Transferência mesma titularidade - Dinheiro', 'Transferência mesma titularidade - PIX', 'Transferência mesma titularidade - TED', 'Transferência para terceiros - Boleto bancário', 'Transferência para terceiros - Débito', 'Transferência para terceiros - DOC', 'Transferência para terceiros - PIX', 'Transferência para terceiros - TED', 'Transferências', 'Transferências para terceiros', 'Transferências - DOC']
  },
  renda: {
    nome: 'Renda',
    emoji: '💵',
    subcategorias: ['Aposentadoria', 'Atividades de empreendedorismo', 'Auxílio do governo', 'Renda', 'Renda não-recorrente', 'Salário']
  },
  educacao: {
    nome: 'Educação',
    emoji: '📚',
    subcategorias: ['Creche', 'Cursos online', 'Educação', 'Escola', 'Universidade']
  },
  impostos: {
    nome: 'Impostos e taxas',
    emoji: '📋',
    subcategorias: ['Imposto de renda', 'Imposto sobre investimentos', 'Impostos', 'Impostos sobre operações financeiras', 'Taxas bancárias', 'Taxas de cartão de crédito', 'Taxas de conta corrente']
  },
  seguros: {
    nome: 'Seguros',
    emoji: '🛡️',
    subcategorias: ['Seguro de veículos', 'Seguro de vida', 'Seguro residencial', 'Seguro saúde', 'Seguros']
  },
  doacoes: {
    nome: 'Doações',
    emoji: '🎁',
    subcategorias: ['Doações']
  },
  outros: {
    nome: 'Outros',
    emoji: '📦',
    subcategorias: ['Outros', 'Serviços']
  }
};

const BANCOS = {
  nubank: { nome: 'Nubank', cor: '#8B5CF6', logo: 'N' },
  inter: { nome: 'Inter', cor: '#FF7A00', logo: 'I' },
  itau: { nome: 'Itaú', cor: '#FF5C00', logo: 'I' },
  bradesco: { nome: 'Bradesco', cor: '#CC092E', logo: 'B' },
  bb: { nome: 'Banco do Brasil', cor: '#FFCC00', logo: 'BB' },
  santander: { nome: 'Santander', cor: '#EC0000', logo: 'S' },
  picpay: { nome: 'PicPay', cor: '#00C95B', logo: 'P' },
  original: { nome: 'Outro', cor: '#666666', logo: '?' }
};

const BANDEIRAS = {
  visa: { nome: 'Visa', logo: 'VISA' },
  mastercard: { nome: 'Mastercard', logo: 'MC' },
  elo: { nome: 'Elo', logo: 'ELO' },
  amex: { nome: 'American Express', logo: 'AMEX' },
  hipercard: { nome: 'Hipercard', logo: 'HC' }
};

const CATEGORIA_CORES = {
  alimentacao:      '#FF9500',
  compras:          '#FF2D78',
  saude:            '#FF453A',
  servicos_digitais:'#FFD60A',
  transporte:       '#0A84FF',
  moradia:          '#BF5AF2',
  lazer:            '#5AC8FA',
  financas:         '#30D158',
  renda:            '#34C759',
  educacao:         '#5E5CE6',
  impostos:         '#FF6B00',
  seguros:          '#64D2FF',
  doacoes:          '#FF375F',
  outros:           '#8E8E93'
};

// ===== ESTADO =====
let usuarioAtual = null;
let telaAtual = 'dashboard';
let offsetMesCategorias = 0; // 0 = mês atual, -1 = mês anterior, etc.

// ===== UTILIDADES =====
function $(seletor) { return document.querySelector(seletor); }
function $$(seletor) { return document.querySelectorAll(seletor); }

function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

function formatarData(data) {
  return new Date(data).toLocaleDateString('pt-BR');
}

function formatarDataCabecalho(data) {
  const d = new Date(data);
  const dias = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
  const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
  return `${dias[d.getDay()]}, ${meses[d.getMonth()]}/${String(d.getDate()).padStart(2, '0')}`;
}

function obterIniciais(nome) {
  return nome.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
}

function gerarId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ===== ARMAZENAMENTO =====
function obterChaveUsuario(chave) {
  return `${STORAGE_PREFIX}${usuarioAtual.email}_${chave}`;
}

function salvarDados(chave, dados) {
  localStorage.setItem(obterChaveUsuario(chave), JSON.stringify(dados));
}

function carregarDados(chave, valorPadrao = null) {
  const dados = localStorage.getItem(obterChaveUsuario(chave));
  return dados ? JSON.parse(dados) : valorPadrao;
}

// ===== DADOS DEMO =====
const DEMO_EMAIL = 'vitor@demo.com';
const DEMO_SENHA = '123456';
const DEMO_NOME = 'Vitor';

function initDemoUser() {
  const demoUserKey = `${STORAGE_PREFIX}${DEMO_EMAIL}_inicializado`;

  // Se já foi inicializado, não faz nada
  if (localStorage.getItem(demoUserKey)) return;

  // Criar usuário demo se não existir
  const usuarios = obterUsuarios();
  if (!usuarios.find(u => u.email === DEMO_EMAIL)) {
    usuarios.push({ nome: DEMO_NOME, email: DEMO_EMAIL, senha: DEMO_SENHA });
    salvarUsuarios(usuarios);
  }

  // Criar dados mock diretamente no localStorage
  const userPrefix = `${STORAGE_PREFIX}${DEMO_EMAIL}_`;

  const contas = [
    { id: gerarId(), banco: 'nubank', nome: 'Conta corrente', tipo: 'Conta corrente', saldo: 2112.27 },
    { id: gerarId(), banco: 'nubank', nome: 'Conta poupança', tipo: 'Poupança', saldo: 13.27 }
  ];

  const cartoes = [{
    id: gerarId(), nome: 'Nubank Mastercard', bandeira: 'mastercard', banco: 'nubank',
    limite: 3000, usado: 856.10, ultimosDigitos: '4582', diaFechamento: 25, diaVencimento: 8
  }];

  const agora = new Date();
  const transacoes = [
    { id: gerarId(), descricao: 'Supermercado Extra', categoria: 'alimentacao', subcategoria: 'Supermercado', valor: 347.89, tipo: 'despesa', data: new Date(agora - 1 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Uber', categoria: 'transporte', subcategoria: 'Táxi e transporte privado urbano', valor: 32.50, tipo: 'despesa', data: new Date(agora - 1 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Spotify', categoria: 'servicos_digitais', subcategoria: 'Streaming de música', valor: 21.90, tipo: 'despesa', data: new Date(agora - 2 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Netflix', categoria: 'servicos_digitais', subcategoria: 'Streaming de vídeo', valor: 55.90, tipo: 'despesa', data: new Date(agora - 3 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Salário', categoria: 'renda', subcategoria: 'Salário', valor: 5500.00, tipo: 'receita', data: new Date(agora - 5 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Restaurante', categoria: 'alimentacao', subcategoria: 'Restaurantes, bares e lanchonetes', valor: 89.90, tipo: 'despesa', data: new Date(agora - 5 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'iFood', categoria: 'alimentacao', subcategoria: 'Delivery de alimentos', valor: 67.50, tipo: 'despesa', data: new Date(agora - 6 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Farmácia Drogasil', categoria: 'saude', subcategoria: 'Farmácia', valor: 156.30, tipo: 'despesa', data: new Date(agora - 7 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Gasolina', categoria: 'transporte', subcategoria: 'Postos de gasolina', valor: 280.00, tipo: 'despesa', data: new Date(agora - 8 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Amazon.com', categoria: 'compras', subcategoria: 'Compras online', valor: 199.00, tipo: 'despesa', data: new Date(agora - 9 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Aluguel', categoria: 'moradia', subcategoria: 'Aluguel', valor: 1800.00, tipo: 'despesa', data: new Date(agora - 10 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Internet', categoria: 'moradia', subcategoria: 'Internet', valor: 120.00, tipo: 'despesa', data: new Date(agora - 11 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Academia', categoria: 'saude', subcategoria: 'Academia e centros de lazer', valor: 89.90, tipo: 'despesa', data: new Date(agora - 12 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Cinema', categoria: 'lazer', subcategoria: 'Cinema, Teatro e Concertos', valor: 45.00, tipo: 'despesa', data: new Date(agora - 13 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Pet Shop', categoria: 'compras', subcategoria: 'Pet Shops e veterinários', valor: 234.00, tipo: 'despesa', data: new Date(agora - 14 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id }
  ];

  const assinaturas = [
    { id: gerarId(), nome: 'Max (HBO Max)', valor: 24.00, diaRenovacao: 15, contaId: contas[0].id, categoria: 'servicos_digitais', pagamentos: 8 },
    { id: gerarId(), nome: 'Spotify Premium', valor: 21.90, diaRenovacao: 20, contaId: contas[0].id, categoria: 'servicos_digitais', pagamentos: 12 }
  ];

  const parcelamentos = [
    { id: gerarId(), descricao: 'iPhone 15 Pro', valorTotal: 8999.00, valorParcela: 1499.83, totalParcelas: 6, parcelaAtual: 3, primeiraData: new Date(agora - 2 * 30 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id, categoria: 'compras' },
    { id: gerarId(), descricao: 'Roupas Shopping', valorTotal: 449.70, valorParcela: 149.90, totalParcelas: 3, parcelaAtual: 2, primeiraData: new Date(agora - 1 * 30 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id, categoria: 'compras' }
  ];

  // Salvar todos os dados
  localStorage.setItem(`${userPrefix}contas`, JSON.stringify(contas));
  localStorage.setItem(`${userPrefix}cartoes`, JSON.stringify(cartoes));
  localStorage.setItem(`${userPrefix}transacoes`, JSON.stringify(transacoes));
  localStorage.setItem(`${userPrefix}assinaturas`, JSON.stringify(assinaturas));
  localStorage.setItem(`${userPrefix}parcelamentos`, JSON.stringify(parcelamentos));
  localStorage.setItem(demoUserKey, 'true');
}

function initDadosDemo() {
  if (carregarDados('inicializado')) return;

  const contas = [
    { id: gerarId(), banco: 'nubank', nome: 'Conta corrente', tipo: 'Conta corrente', saldo: 2112.27 },
    { id: gerarId(), banco: 'nubank', nome: 'Conta poupança', tipo: 'Poupança', saldo: 13.27 }
  ];
  salvarDados('contas', contas);

  const cartoes = [{
    id: gerarId(), nome: 'Nubank Mastercard', bandeira: 'mastercard', banco: 'nubank',
    limite: 3000, usado: 856.10, ultimosDigitos: '4582', diaFechamento: 25, diaVencimento: 8
  }];
  salvarDados('cartoes', cartoes);

  const agora = new Date();
  const transacoes = [
    { id: gerarId(), descricao: 'Supermercado Extra', categoria: 'alimentacao', subcategoria: 'Supermercado', valor: 347.89, tipo: 'despesa', data: new Date(agora - 1 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Uber', categoria: 'transporte', subcategoria: 'Táxi e transporte privado urbano', valor: 32.50, tipo: 'despesa', data: new Date(agora - 1 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Spotify', categoria: 'servicos_digitais', subcategoria: 'Streaming de música', valor: 21.90, tipo: 'despesa', data: new Date(agora - 2 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Netflix', categoria: 'servicos_digitais', subcategoria: 'Streaming de vídeo', valor: 55.90, tipo: 'despesa', data: new Date(agora - 3 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Salário', categoria: 'renda', subcategoria: 'Salário', valor: 5500.00, tipo: 'receita', data: new Date(agora - 5 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Restaurante', categoria: 'alimentacao', subcategoria: 'Restaurantes, bares e lanchonetes', valor: 89.90, tipo: 'despesa', data: new Date(agora - 5 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'iFood', categoria: 'alimentacao', subcategoria: 'Delivery de alimentos', valor: 67.50, tipo: 'despesa', data: new Date(agora - 6 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Farmácia Drogasil', categoria: 'saude', subcategoria: 'Farmácia', valor: 156.30, tipo: 'despesa', data: new Date(agora - 7 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Gasolina', categoria: 'transporte', subcategoria: 'Postos de gasolina', valor: 280.00, tipo: 'despesa', data: new Date(agora - 8 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Amazon.com', categoria: 'compras', subcategoria: 'Compras online', valor: 199.00, tipo: 'despesa', data: new Date(agora - 9 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Aluguel', categoria: 'moradia', subcategoria: 'Aluguel', valor: 1800.00, tipo: 'despesa', data: new Date(agora - 10 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Internet', categoria: 'moradia', subcategoria: 'Internet', valor: 120.00, tipo: 'despesa', data: new Date(agora - 11 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Academia', categoria: 'saude', subcategoria: 'Academia e centros de lazer', valor: 89.90, tipo: 'despesa', data: new Date(agora - 12 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Cinema', categoria: 'lazer', subcategoria: 'Cinema, Teatro e Concertos', valor: 45.00, tipo: 'despesa', data: new Date(agora - 13 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id },
    { id: gerarId(), descricao: 'Pet Shop', categoria: 'compras', subcategoria: 'Pet Shops e veterinários', valor: 234.00, tipo: 'despesa', data: new Date(agora - 14 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id }
  ];
  salvarDados('transacoes', transacoes);

  const assinaturas = [
    { id: gerarId(), nome: 'Max (HBO Max)', valor: 24.00, diaRenovacao: 15, contaId: contas[0].id, categoria: 'servicos_digitais', pagamentos: 8 },
    { id: gerarId(), nome: 'Spotify Premium', valor: 21.90, diaRenovacao: 20, contaId: contas[0].id, categoria: 'servicos_digitais', pagamentos: 12 }
  ];
  salvarDados('assinaturas', assinaturas);

  const parcelamentos = [
    { id: gerarId(), descricao: 'iPhone 15 Pro', valorTotal: 8999.00, valorParcela: 1499.83, totalParcelas: 6, parcelaAtual: 3, primeiraData: new Date(agora - 2 * 30 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id, categoria: 'compras' },
    { id: gerarId(), descricao: 'Roupas Shopping', valorTotal: 449.70, valorParcela: 149.90, totalParcelas: 3, parcelaAtual: 2, primeiraData: new Date(agora - 1 * 30 * 24 * 60 * 60 * 1000).toISOString(), contaId: contas[0].id, categoria: 'compras' }
  ];
  salvarDados('parcelamentos', parcelamentos);

  salvarDados('inicializado', true);
}

// ===== AUTENTICACAO =====
function obterUsuarios() {
  return JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}usuarios`) || '[]');
}

function salvarUsuarios(usuarios) {
  localStorage.setItem(`${STORAGE_PREFIX}usuarios`, JSON.stringify(usuarios));
}

function login(email, senha) {
  const usuario = obterUsuarios().find(u => u.email === email && u.senha === senha);
  if (usuario) {
    usuarioAtual = { email: usuario.email, nome: usuario.nome };
    localStorage.setItem(`${STORAGE_PREFIX}sessao`, JSON.stringify(usuarioAtual));
    return true;
  }
  return false;
}

function cadastro(nome, email, senha) {
  const usuarios = obterUsuarios();
  if (usuarios.find(u => u.email === email)) return { sucesso: false, erro: 'E-mail já cadastrado' };
  usuarios.push({ nome, email, senha });
  salvarUsuarios(usuarios);
  usuarioAtual = { email, nome };
  localStorage.setItem(`${STORAGE_PREFIX}sessao`, JSON.stringify(usuarioAtual));
  return { sucesso: true };
}

function logout() {
  usuarioAtual = null;
  localStorage.removeItem(`${STORAGE_PREFIX}sessao`);
}

function verificarSessao() {
  const sessao = localStorage.getItem(`${STORAGE_PREFIX}sessao`);
  if (sessao) {
    usuarioAtual = JSON.parse(sessao);
    return true;
  }
  return false;
}

// ===== RENDERIZACAO =====
function renderizarApp() {
  const app = $('#app');
  if (!usuarioAtual) { renderizarTelaAuth(); return; }
  initDadosDemo();

  app.innerHTML = `
    <header class="header">
      <div class="header-logo">💰 <span>Finanças</span></div>
      <div class="header-user">
        <button class="header-user-btn" id="btnMenuUsuario">
          <div class="header-avatar">${obterIniciais(usuarioAtual.nome)}</div>
          <span>${usuarioAtual.nome.split(' ')[0]}</span><span>▼</span>
        </button>
        <div class="header-dropdown" id="dropdownUsuario">
          <button class="header-dropdown-item" data-acao="perfil">👤 Perfil</button>
          <div class="header-dropdown-divider"></div>
          <button class="header-dropdown-item danger" data-acao="logout">🚪 Sair</button>
        </div>
      </div>
    </header>
    <nav class="nav-tabs">
      <div class="nav-tabs-list">
        <button class="nav-tab active" data-tela="dashboard">📊 Visão geral</button>
        <button class="nav-tab" data-tela="transacoes">🔄 Transações</button>
        <button class="nav-tab" data-tela="parcelamentos">📦 Parcelamentos</button>
        <button class="nav-tab" data-tela="assinaturas">📺 Assinaturas</button>
        <button class="nav-tab" data-tela="categorias">🏷️ Categorias</button>
        <button class="nav-tab" data-tela="cartoes">💳 Cartões</button>
      </div>
    </nav>
    <main class="main-content" id="conteudoPrincipal"></main>
    <div class="modal-overlay" id="overlayModal"><div class="modal" id="conteudoModal"></div></div>
    <div class="toast-container" id="containerToast"></div>
  `;

  configurarEventos();
  navegarPara('dashboard');
}

function renderizarTelaAuth() {
  $('#app').innerHTML = `<div class="auth-container"><div class="auth-card" id="cartaoAuth"></div></div>`;
  renderizarFormLogin();
}

function renderizarFormLogin() {
  $('#cartaoAuth').innerHTML = `
    <div class="auth-logo">💰 <span>Finanças</span></div>
    <h1 class="auth-title">Entrar</h1>
    <p class="auth-subtitle">Acesse sua conta para gerenciar suas finanças</p>
    <form class="auth-form" id="formLogin">
      <div class="form-group"><label class="form-label">E-mail</label>
        <input type="email" class="form-input" name="email" placeholder="seu@email.com" required></div>
      <div class="form-group"><label class="form-label">Senha</label>
        <div class="form-input-wrapper">
          <input type="password" class="form-input" name="senha" placeholder="Sua senha" required>
          <button type="button" class="form-input-action" data-toggle-senha>👁️</button></div></div>
      <button type="submit" class="btn btn-primary btn-full">Entrar</button>
      <button type="button" class="btn btn-secondary btn-full" style="margin-top: var(--space-sm)" onclick="loginDemo()">🚀 Entrar como demo</button>
    </form>
    <p class="auth-footer">Não tem conta? <a href="#" data-acao="cadastro">Criar conta</a></p>
  `;
  configurarEventosAuth();
}

function loginDemo() {
  // Garantir que o usuário demo e dados existam
  initDemoUser();

  // Definir sessão diretamente (sem validação de senha)
  usuarioAtual = { email: DEMO_EMAIL, nome: DEMO_NOME };
  localStorage.setItem(`${STORAGE_PREFIX}sessao`, JSON.stringify(usuarioAtual));

  // Renderizar o app
  renderizarApp();
}

function renderizarFormCadastro() {
  $('#cartaoAuth').innerHTML = `
    <div class="auth-logo">💰 <span>Finanças</span></div>
    <h1 class="auth-title">Criar conta</h1>
    <p class="auth-subtitle">Comece a organizar suas finanças hoje</p>
    <form class="auth-form" id="formCadastro">
      <div class="form-group"><label class="form-label">Nome completo</label>
        <input type="text" class="form-input" name="nome" placeholder="Seu nome" required></div>
      <div class="form-group"><label class="form-label">E-mail</label>
        <input type="email" class="form-input" name="email" placeholder="seu@email.com" required></div>
      <div class="form-group"><label class="form-label">Senha</label>
        <div class="form-input-wrapper">
          <input type="password" class="form-input" name="senha" placeholder="Mínimo 6 caracteres" required minlength="6">
          <button type="button" class="form-input-action" data-toggle-senha>👁️</button></div></div>
      <div class="form-group"><label class="form-label">Confirmar senha</label>
        <div class="form-input-wrapper">
          <input type="password" class="form-input" name="confirmarSenha" placeholder="Repita a senha" required>
          <button type="button" class="form-input-action" data-toggle-senha>👁️</button></div></div>
      <button type="submit" class="btn btn-primary btn-full">Criar conta</button>
    </form>
    <p class="auth-footer">Já tem conta? <a href="#" data-acao="login">Entrar</a></p>
  `;
  configurarEventosAuth();
}

function configurarEventosAuth() {
  $$('[data-toggle-senha]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const input = e.target.parentElement.querySelector('input');
      input.type = input.type === 'password' ? 'text' : 'password';
      e.target.textContent = input.type === 'password' ? '👁️' : '🙈';
    });
  });

  $('#formLogin')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (login(e.target.email.value, e.target.senha.value)) renderizarApp();
    else mostrarToast('E-mail ou senha incorretos', 'erro');
  });

  $('#formCadastro')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.senha.value !== e.target.confirmarSenha.value) {
      mostrarToast('As senhas não coincidem', 'erro'); return;
    }
    const resultado = cadastro(e.target.nome.value, e.target.email.value, e.target.senha.value);
    if (resultado.sucesso) renderizarApp();
    else mostrarToast(resultado.erro, 'erro');
  });

  $$('[data-acao]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.dataset.acao === 'cadastro') renderizarFormCadastro();
      else if (e.target.dataset.acao === 'login') renderizarFormLogin();
    });
  });
}

function configurarEventos() {
  $('#btnMenuUsuario')?.addEventListener('click', () => $('#dropdownUsuario')?.classList.toggle('active'));
  document.addEventListener('click', (e) => { if (!e.target.closest('.header-user')) $('#dropdownUsuario')?.classList.remove('active'); });
  $$('[data-acao]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target.dataset.acao === 'logout') { logout(); renderizarApp(); }
      else if (e.target.dataset.acao === 'perfil') navegarPara('perfil');
    });
  });
  $$('.nav-tab').forEach(tab => tab.addEventListener('click', () => navegarPara(tab.dataset.tela)));
  $('#overlayModal')?.addEventListener('click', (e) => { if (e.target === $('#overlayModal')) fecharModal(); });
}

function navegarPara(tela) {
  telaAtual = tela;
  $$('.nav-tab').forEach(tab => tab.classList.toggle('active', tab.dataset.tela === tela));
  const main = $('#conteudoPrincipal');
  if (!main) return;
  switch (tela) {
    case 'dashboard': renderizarDashboard(); break;
    case 'transacoes': renderizarTransacoes(); break;
    case 'parcelamentos': renderizarParcelamentos(); break;
    case 'assinaturas': renderizarAssinaturas(); break;
    case 'categorias': renderizarCategorias(); break;
    case 'cartoes': renderizarCartoes(); break;
    case 'perfil': renderizarPerfil(); break;
    default: renderizarDashboard();
  }
}

// ===== DASHBOARD =====
// ===== DASHBOARD V2 =====

function gerarInsightHero(despesas, variacao, topCatKey, nome) {
  const m = NOMES_MESES[new Date().getMonth()];
  if (despesas === 0) return `Tudo certo, ${nome}! Sem gastos em ${m} ainda.`;
  if (variacao > 30) return `Atenção! Gastos ${Math.abs(variacao).toFixed(0)}% acima de ${m} passado.`;
  if (variacao < -15) return `Parabéns! Você economizou ${Math.abs(variacao).toFixed(0)}% vs mês passado.`;
  const cat = CATEGORIAS[topCatKey];
  if (cat) return `${cat.emoji} ${cat.nome} lidera seus gastos em ${m}.`;
  return `${nome}, aqui está seu resumo de ${m}.`;
}

function nivelCalorDash(valor, maxCalor) {
  if (valor === 0) return 0;
  const p = valor / maxCalor;
  if (p <= 0.15) return 1;
  if (p <= 0.35) return 2;
  if (p <= 0.60) return 3;
  if (p <= 0.85) return 4;
  return 5;
}

function corCalorDash(nivel) {
  return ['#1E1E1E','#4A0B0B','#7A1515','#B52020','#E03232','#FF5050'][nivel] || '#1E1E1E';
}

function escalaYDash(maxVal) {
  if (maxVal <= 0) return { ticks: [0, 250, 500, 750, 1000], max: 1000 };
  const steps = [50,100,200,250,500,1000,2000,2500,5000,10000];
  const step = steps.find(s => s >= maxVal / 4) || Math.ceil(maxVal / 400) * 100;
  const max = step * 4;
  return { ticks: [0, step, step*2, step*3, max], max };
}

function formatTickYDash(v) {
  if (v >= 1000) return `R$${(v/1000) % 1 === 0 ? v/1000 : (v/1000).toFixed(1)}k`;
  return `R$${v}`;
}

function gerarSvgRitmo(txAtual, txAnterior, mesAtual, anoAtual) {
  const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
  const isCurrentMonth = new Date().getMonth() === mesAtual && new Date().getFullYear() === anoAtual;
  const diaMax = isCurrentMonth ? new Date().getDate() : diasNoMes;

  const dAtual = Array(diasNoMes + 1).fill(0);
  const dAnterior = Array(diasNoMes + 1).fill(0);
  txAtual.filter(tx => tx.tipo === 'despesa').forEach(tx => { const d = new Date(tx.data).getDate(); if (d >= 1 && d <= diasNoMes) dAtual[d] += tx.valor; });
  txAnterior.filter(tx => tx.tipo === 'despesa').forEach(tx => { const d = new Date(tx.data).getDate(); if (d >= 1 && d <= diasNoMes) dAnterior[d] += tx.valor; });

  const cumA = Array(diasNoMes + 1).fill(0), cumB = Array(diasNoMes + 1).fill(0);
  for (let d = 1; d <= diasNoMes; d++) { cumA[d] = cumA[d-1] + dAtual[d]; cumB[d] = cumB[d-1] + dAnterior[d]; }

  const maxRaw = Math.max(cumA[diaMax], cumB[diasNoMes], 1);
  const { ticks, max } = escalaYDash(maxRaw);

  const W = 560, H = 180, PL = 48, PR = 8, PT = 8, PB = 24;
  const cW = W - PL - PR, cH = H - PT - PB;
  const xOf = d => PL + ((d - 1) / Math.max(diasNoMes - 1, 1)) * cW;
  const yOf = v => PT + cH - (v / max) * cH;

  let grid = '', xLbls = '';
  ticks.forEach(t => {
    const y = yOf(t);
    grid += `<line x1="${PL}" y1="${y.toFixed(1)}" x2="${W-PR}" y2="${y.toFixed(1)}" stroke="#222" stroke-width="1"/>`;
    grid += `<text x="${PL-4}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="9" fill="#555">${formatTickYDash(t)}</text>`;
  });
  [1, 5, 10, 15, 20, 25, diasNoMes].forEach(d => {
    xLbls += `<text x="${xOf(d).toFixed(1)}" y="${H-4}" text-anchor="middle" font-size="9" fill="#555">${d}</text>`;
  });

  const ptB = Array.from({length: diasNoMes}, (_, i) => `${xOf(i+1).toFixed(1)},${yOf(cumB[i+1]).toFixed(1)}`).join(' ');
  const ptA = Array.from({length: diaMax}, (_, i) => `${xOf(i+1).toFixed(1)},${yOf(cumA[i+1]).toFixed(1)}`).join(' ');
  const areaPath = diaMax > 0 ? `${ptA} ${xOf(diaMax).toFixed(1)},${yOf(0).toFixed(1)} ${xOf(1).toFixed(1)},${yOf(0).toFixed(1)}` : '';

  let lastDayData = 0;
  for (let d = 1; d <= diaMax; d++) if (cumA[d] > 0) lastDayData = d;
  const dot = lastDayData > 0
    ? `<circle cx="${xOf(lastDayData).toFixed(1)}" cy="${yOf(cumA[lastDayData]).toFixed(1)}" r="4" fill="#FF6B6B" stroke="#111" stroke-width="2"/>`
    : '';

  return `<svg width="100%" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" style="display:block">
    <defs><linearGradient id="dgAtual" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF6B6B" stop-opacity="0.25"/><stop offset="100%" stop-color="#FF6B6B" stop-opacity="0"/></linearGradient></defs>
    ${grid}${xLbls}
    ${areaPath ? `<polygon points="${areaPath}" fill="url(#dgAtual)"/>` : ''}
    ${diasNoMes > 1 ? `<polyline points="${ptB}" fill="none" stroke="#3A3A3A" stroke-width="1.5" stroke-dasharray="5,3"/>` : ''}
    ${diaMax > 1 ? `<polyline points="${ptA}" fill="none" stroke="#FF6B6B" stroke-width="2"/>` : ''}
    ${dot}
  </svg>`;
}

function gerarHeatmapDash(dadosCalor, mesAtual, anoAtual) {
  const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
  const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();
  const maxCalor = Math.max(...Object.values(dadosCalor), 1);
  const numWeeks = Math.ceil((primeiroDia + diasNoMes) / 7);
  const wdLabels = ['D','S','T','Q','Q','S','S'];

  return wdLabels.map((lbl, wd) => {
    const cells = Array.from({length: numWeeks}, (_, w) => {
      const day = w * 7 + wd - primeiroDia + 1;
      return (day >= 1 && day <= diasNoMes) ? day : null;
    });
    return `<div class="dash-hm-row">
      <span class="dash-hm-wd">${lbl}</span>
      ${cells.map(day => {
        if (day === null) return `<div class="dash-hm-cell dash-hm-empty"></div>`;
        const v = dadosCalor[day] || 0;
        const cor = corCalorDash(nivelCalorDash(v, maxCalor));
        return `<div class="dash-hm-cell" style="background:${cor}" title="${formatarMoeda(v)}"><span class="dash-hm-day">${day}</span></div>`;
      }).join('')}
    </div>`;
  }).join('');
}

function formatDataDash(dataStr) {
  const d = new Date(dataStr + 'T12:00:00');
  const ds = ['DOM','SEG','TER','QUA','QUI','SEX','SÁB'];
  const ms = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
  return `${ds[d.getDay()]}, ${ms[d.getMonth()]} ${d.getDate()}`;
}

function renderizarDashboard() {
  const transacoes = carregarDados('transacoes', []);
  const contas     = carregarDados('contas', []);
  const assinaturas= carregarDados('assinaturas', []);
  const cartoes    = carregarDados('cartoes', []);
  const agora = new Date();
  const mesAtual = agora.getMonth(), anoAtual = agora.getFullYear();
  const mesAnt = mesAtual === 0 ? 11 : mesAtual - 1;
  const anoAnt = mesAtual === 0 ? anoAtual - 1 : anoAtual;

  const txA = transacoes.filter(tx => { const d = new Date(tx.data); return d.getMonth() === mesAtual && d.getFullYear() === anoAtual; });
  const txB = transacoes.filter(tx => { const d = new Date(tx.data); return d.getMonth() === mesAnt   && d.getFullYear() === anoAnt;   });

  const despA = txA.filter(t => t.tipo==='despesa').reduce((s,t)=>s+t.valor,0);
  const recA  = txA.filter(t => t.tipo==='receita').reduce((s,t)=>s+t.valor,0);
  const despB = txB.filter(t => t.tipo==='despesa').reduce((s,t)=>s+t.valor,0);
  const varPct = despB > 0 ? (despA - despB) / despB * 100 : 0;
  const saldoTotal = contas.reduce((s,c)=>s+c.saldo,0);
  const totalAsn   = assinaturas.reduce((s,a)=>s+a.valor,0);

  const statA = {}, statB = {};
  txA.filter(t=>t.tipo==='despesa').forEach(t=>{ statA[t.categoria]=(statA[t.categoria]||0)+t.valor; });
  txB.filter(t=>t.tipo==='despesa').forEach(t=>{ statB[t.categoria]=(statB[t.categoria]||0)+t.valor; });
  const topCats = Object.entries(statA).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const topKey  = topCats[0]?.[0];

  const dadosCalor = {};
  txA.filter(t=>t.tipo==='despesa').forEach(t=>{ const d=new Date(t.data).getDate(); dadosCalor[d]=(dadosCalor[d]||0)+t.valor; });
  const diaMaior = Object.entries(dadosCalor).sort((a,b)=>b[1]-a[1])[0];
  const mediaDia = Object.keys(dadosCalor).length > 0 ? despA / Object.keys(dadosCalor).length : 0;

  const txRecentes = [...transacoes].sort((a,b)=>new Date(b.data)-new Date(a.data)).slice(0,8);
  const nomeMes = NOMES_MESES[mesAtual];
  const nome    = usuarioAtual?.nome?.split(' ')[0] || 'Usuário';
  const insight = gerarInsightHero(despA, varPct, topKey, nome);
  const topCat  = CATEGORIAS[topKey];
  const varUp   = varPct > 0;
  const svgRitmo = gerarSvgRitmo(txA, txB, mesAtual, anoAtual);
  const heatGrid = gerarHeatmapDash(dadosCalor, mesAtual, anoAtual);
  const coresLeg = ['#1E1E1E','#4A0B0B','#7A1515','#B52020','#E03232','#FF5050'];
  const maxCatV  = topCats[0]?.[1] || 1;
  const msAbrev  = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

  // Grouped recent transactions
  const txGrupos = {};
  txRecentes.forEach(tx => { const k=tx.data.split('T')[0]; if(!txGrupos[k]) txGrupos[k]=[]; txGrupos[k].push(tx); });

  $('#conteudoPrincipal').innerHTML = `<div class="dash-grid">

    <!-- CARD 1: HERO -->
    <div class="dash-card dash-card-hero">
      <div class="dash-label">VISÃO GERAL — ${nomeMes.toUpperCase()} ${anoAtual}</div>
      <div class="dash-hero-insight">${insight}</div>
      <div class="dash-hero-sub">Olá, <strong>${nome}</strong>. Aqui está seu resumo financeiro.</div>
      <div class="dash-hero-minis">
        <div class="dash-hero-mini">
          <span class="dash-label-xs">GASTO EM ${nomeMes.toUpperCase()}</span>
          <span class="dash-hero-mini-val">${formatarMoeda(despA)}</span>
        </div>
        <div class="dash-hero-mini">
          <span class="dash-label-xs">VS. MÊS ANTERIOR</span>
          <span class="dash-hero-mini-val dash-var ${varUp ? 'dash-red' : 'dash-green'}">${varUp ? '↘' : '↗'} ${Math.abs(varPct).toFixed(1)}%</span>
        </div>
        <div class="dash-hero-mini">
          <span class="dash-label-xs">MAIOR GASTO</span>
          <span class="dash-hero-mini-val">${topCat ? `${topCat.emoji} ${topCat.nome}` : '— —'}</span>
        </div>
      </div>
      <div class="dash-hero-foot">
        <div class="dash-hero-user">
          <div class="dash-avatar">${obterIniciais(usuarioAtual?.nome||'U')}</div>
          <span class="dash-muted-sm">${nome}</span>
        </div>
        <div class="dash-hero-date">
          <span>🕐</span>
          <span class="dash-muted-sm">${agora.toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'})}</span>
        </div>
      </div>
    </div>

    <!-- CARD 2: RITMO DE GASTOS -->
    <div class="dash-card">
      <div class="dash-card-hdr">
        <span class="dash-label">RITMO DE GASTOS</span>
        <button class="dash-link-btn" onclick="navegarPara('transacoes')">ver todas ↗</button>
      </div>
      <div class="dash-ritmo-top">
        <span class="dash-val-xl">${formatarMoeda(despA)}</span>
        <span class="dash-muted-sm">${varUp ? 'acima' : 'abaixo'}</span>
      </div>
      ${despB > 0 ? `<div class="dash-ritmo-badge-row">
        <span class="dash-badge-red">${varUp?'↗':'↙'} ${varUp?'+':''}${varPct.toFixed(1)}%</span>
        <span class="dash-muted-sm">vs ${formatarMoeda(despB)} mês anterior</span>
      </div>` : ''}
      <div class="dash-chart-wrap">${svgRitmo}</div>
      <div class="dash-ritmo-legend">
        <div class="dash-leg-item"><span class="dash-leg-red">—</span><span class="dash-muted-sm">Este mês</span></div>
        <div class="dash-leg-item"><span class="dash-leg-gray">—</span><span class="dash-muted-sm">Mês passado</span></div>
      </div>
    </div>

    <!-- CARD 3: CONTAS CORRENTES -->
    <div class="dash-card">
      <div class="dash-card-hdr">
        <span class="dash-label">CONTAS CORRENTES</span>
        <span style="font-size:1.1rem">👜</span>
      </div>
      <div class="dash-acc-top">
        <span class="dash-val-xl">${formatarMoeda(saldoTotal)}</span>
        <span class="dash-muted-sm">saldo total</span>
      </div>
      <div class="dash-acc-list">
        ${contas.length === 0 ? `<div class="dash-empty-sm">Nenhuma conta cadastrada</div>` :
          contas.map(c => {
            const bk = BANCOS[c.banco]||{};
            return `<div class="dash-acc-item">
              <div class="dash-acc-logo" style="background:${bk.cor||'#444'}22;color:${bk.cor||'#aaa'}">${bk.logo||'?'}</div>
              <div class="dash-acc-info">
                <div class="dash-acc-name">${bk.nome||c.banco} — ${c.nome}</div>
                <div class="dash-acc-type">${c.tipo||'Conta corrente'}</div>
              </div>
              <div class="dash-acc-bal">${formatarMoeda(c.saldo)}</div>
            </div>`;
          }).join('')}
      </div>
      <div class="dash-acc-foot dash-muted-sm">${contas.length} conta${contas.length!==1?'s':''}</div>
    </div>

    <!-- CARD 4: CARTÕES -->
    <div class="dash-card">
      <div class="dash-card-hdr"><span class="dash-label">CARTÕES</span></div>
      ${cartoes.length === 0 ? `
        <div class="dash-cartoes-empty">
          <div class="dash-cartoes-empty-icon">💳</div>
          <div class="dash-cartoes-empty-txt">Nenhum cartão conectado</div>
        </div>` :
        `<div class="dash-acc-list">
          ${cartoes.map(c => {
            const bk = BANCOS[c.banco]||{}, bf = BANDEIRAS[c.bandeira]||{};
            return `<div class="dash-acc-item">
              <div class="dash-acc-logo" style="background:${bk.cor||'#444'}22;color:${bk.cor||'#aaa'}">${bf.logo||bk.logo||'CC'}</div>
              <div class="dash-acc-info">
                <div class="dash-acc-name">${c.nome}</div>
                <div class="dash-acc-type">${bf.nome||''} •••• ${c.ultimosDigitos||'****'}</div>
              </div>
              <div class="dash-acc-bal dash-red">${formatarMoeda(c.usado||0)}</div>
            </div>`;
          }).join('')}
        </div>`}
    </div>

    <!-- CARD 5: MAPA DE CALOR -->
    <div class="dash-card">
      <div class="dash-card-hdr">
        <span class="dash-label">MAPA DE CALOR</span>
        <button class="dash-link-btn" onclick="navegarPara('transacoes')">ver mais ↗</button>
      </div>
      <div class="dash-hm-top">
        <span class="dash-val-xl">${formatarMoeda(despA)}</span>
      </div>
      <div class="dash-muted-sm" style="margin-bottom:14px">Média diária: ${formatarMoeda(mediaDia)}</div>
      <div class="dash-hm-grid">${heatGrid}</div>
      <div class="dash-hm-legend">
        <span class="dash-muted-sm">Menos</span>
        ${coresLeg.map(c=>`<div class="dash-hm-dot" style="background:${c}"></div>`).join('')}
        <span class="dash-muted-sm">Mais</span>
      </div>
      <div class="dash-hm-sep"></div>
      <div class="dash-hm-foot">
        <span class="dash-muted-sm">Maior gasto</span>
        <span>${diaMaior
          ? `<span class="dash-red" style="font-weight:600">${formatarMoeda(diaMaior[1])}</span> <span class="dash-muted-sm">dia ${diaMaior[0]}</span>`
          : '<span class="dash-muted-sm">—</span>'}</span>
      </div>
    </div>

    <!-- CARD 6: PRINCIPAIS CATEGORIAS -->
    <div class="dash-card">
      <div class="dash-card-hdr">
        <span class="dash-label">PRINCIPAIS CATEGORIAS</span>
        <button class="dash-link-btn" onclick="navegarPara('categorias')">ver mais ↗</button>
      </div>
      <div class="dash-cats">
        ${topCats.length === 0 ? `<div class="dash-empty-sm">Sem gastos este mês</div>` :
          topCats.map(([chave, valor]) => {
            const cat = CATEGORIAS[chave];
            const cor = CATEGORIA_CORES[chave] || '#888';
            const valB = statB[chave] || 0;
            const varC = valB > 0 ? (valor - valB) / valB * 100 : null;
            const prog = Math.min((valor / maxCatV) * 100, 100);
            return `<div class="dash-cat-card">
              <div class="dash-cat-top">
                <div class="dash-cat-lft">
                  <span class="dash-cat-em">${cat?.emoji||'📦'}</span>
                  <span class="dash-cat-nm">${cat?.nome||chave}</span>
                </div>
                <span class="dash-cat-vl">${formatarMoeda(valor)}</span>
              </div>
              <div class="dash-cat-bar-bg"><div class="dash-cat-bar-fg" style="width:${prog}%;background:${cor}"></div></div>
              <div class="dash-cat-bot">
                ${varC !== null
                  ? `<span class="dash-vbadge ${varC<=0?'dash-vbadge-g':'dash-vbadge-r'}">${varC<=0?'↘':'↗'} ${Math.abs(varC).toFixed(0)}%</span>
                     <span class="dash-muted-sm">Anterior: ${formatarMoeda(valB)}</span>`
                  : `<span class="dash-vbadge dash-vbadge-g">novo</span>
                     <span class="dash-muted-sm">— —</span>`}
              </div>
            </div>`;
          }).join('')}
      </div>
    </div>

    <!-- CARD 7: TRANSAÇÕES RECENTES -->
    <div class="dash-card">
      <div class="dash-card-hdr">
        <span class="dash-label">TRANSAÇÕES RECENTES</span>
        <button class="dash-link-btn" onclick="navegarPara('transacoes')">ver todas ↗</button>
      </div>
      ${txRecentes.length === 0 ? `<div class="dash-empty-sm">Nenhuma transação registrada</div>` :
        Object.entries(txGrupos).sort((a,b)=>b[0].localeCompare(a[0])).map(([ds, txs]) => `
          <div class="dash-tx-date">${formatDataDash(ds)}</div>
          ${txs.map(tx => {
            const cat = CATEGORIAS[tx.categoria];
            const cor = CATEGORIA_CORES[tx.categoria]||'#888';
            return `<div class="dash-tx-item" onclick="navegarPara('transacoes')">
              <div class="dash-tx-ic" style="background:${cor}18">${cat?.emoji||'📦'}</div>
              <div class="dash-tx-desc">${tx.descricao}</div>
              <div class="dash-tx-val ${tx.tipo==='receita'?'dash-green':''}">${tx.tipo==='despesa'?'−':'+'}${formatarMoeda(tx.valor)}</div>
            </div>`;
          }).join('')}
          <div class="dash-sep"></div>
        `).join('')}
      <div class="dash-tx-foot">
        <span class="dash-muted-sm">+${Math.max(transacoes.length-8,0)} transaç${transacoes.length-8===1?'ão':'ões'}</span>
        <button class="dash-link-btn" onclick="navegarPara('transacoes')">ver todas ↗</button>
      </div>
    </div>

    <!-- CARD 8: ASSINATURAS -->
    <div class="dash-card">
      <div class="dash-card-hdr">
        <span class="dash-label">ASSINATURAS</span>
        <button class="dash-link-btn" onclick="navegarPara('assinaturas')">ver todas ↗</button>
      </div>
      <div class="dash-asn-top">
        <span class="dash-val-xl">${formatarMoeda(totalAsn)}</span>
        <span class="dash-muted-sm">/mês • ${assinaturas.length} ativa${assinaturas.length!==1?'s':''}</span>
      </div>
      ${assinaturas.length === 0 ? `<div class="dash-empty-sm">Nenhuma assinatura ativa</div>` :
        assinaturas.map(a => `
          <div class="dash-acc-item">
            <div class="dash-acc-logo">${a.nome[0].toUpperCase()}</div>
            <div class="dash-acc-info">
              <div class="dash-acc-name">${a.nome}</div>
              <div class="dash-acc-type">📅 Próximo: ${a.diaRenovacao} ${msAbrev[(agora.getMonth()+1)%12]}</div>
            </div>
            <div class="dash-acc-bal">${formatarMoeda(a.valor)}</div>
          </div>`).join('')}
    </div>

  </div>`;
}

function renderizarGraficoRitmo() {}

function formatarDataGrupo(dataStr) {
  const d = new Date(dataStr + 'T12:00:00');
  return d.toLocaleDateString('pt-BR');
}

function renderizarListaTransacoes(transacoes, contas) {
  if (transacoes.length === 0) return `<div class="empty-state" style="padding: var(--space-2xl)"><div class="empty-state-icon">📝</div><div class="empty-state-title">Nenhuma transação encontrada</div></div>`;
  const agrupado = {};
  transacoes.forEach(tx => { const chave = tx.data.split('T')[0]; if (!agrupado[chave]) agrupado[chave] = []; agrupado[chave].push(tx); });
  return Object.entries(agrupado).sort((a, b) => b[0].localeCompare(a[0])).map(([chaveData, listaTx]) => `
    <div class="tx-group">
      <div class="tx-group-header">
        <span class="tx-group-date">${formatarDataGrupo(chaveData)}</span>
        <button class="tx-group-menu">⋮</button>
      </div>
      ${listaTx.map(tx => {
        const cat = CATEGORIAS[tx.categoria];
        const conta = contas.find(c => c.id === tx.contaId);
        const cor = CATEGORIA_CORES[tx.categoria] || '#8E8E93';
        const banco = BANCOS[conta?.banco];
        return `<div class="tx-item" onclick="abrirModalEditarTransacao('${tx.id}')">
          <div class="tx-item-icon" style="background:${cor}22">
            <span>${cat?.emoji || '📦'}</span>
          </div>
          <div class="tx-item-body">
            <div class="tx-item-desc">${tx.descricao}</div>
            <div class="tx-item-tags">
              <span class="tx-tag" style="background:${cor}22; color:${cor}">${cat?.nome || tx.categoria}</span>
              <span class="tx-tag tx-tag-account">
                <span style="color:${banco?.cor || '#888'}">${banco?.logo || '?'}</span>
                ${conta?.nome || 'Conta'}
              </span>
            </div>
          </div>
          <div class="tx-item-amount ${tx.tipo === 'receita' ? 'tx-income' : 'tx-expense'}">
            ${tx.tipo === 'despesa' ? '-' : '+'}${formatarMoeda(tx.valor)}
          </div>
        </div>`;
      }).join('')}
    </div>
  `).join('');
}

function renderizarStatsTx(filtradas) {
  const despesas = filtradas.filter(tx => tx.tipo === 'despesa').reduce((s, tx) => s + tx.valor, 0);
  const receitas = filtradas.filter(tx => tx.tipo === 'receita').reduce((s, tx) => s + tx.valor, 0);
  const saldo = receitas - despesas;
  return `
    <div class="tx-stat-card">
      <div class="tx-stat-icon tx-stat-icon-total">#</div>
      <div>
        <div class="tx-stat-label">Total</div>
        <div class="tx-stat-value">${filtradas.length}</div>
      </div>
    </div>
    <div class="tx-stat-card">
      <div class="tx-stat-icon tx-stat-icon-expense">↘</div>
      <div>
        <div class="tx-stat-label">Despesas</div>
        <div class="tx-stat-value tx-expense">${formatarMoeda(despesas)}</div>
      </div>
    </div>
    <div class="tx-stat-card">
      <div class="tx-stat-icon tx-stat-icon-income">↗</div>
      <div>
        <div class="tx-stat-label">Receitas</div>
        <div class="tx-stat-value tx-income">${formatarMoeda(receitas)}</div>
      </div>
    </div>
    <div class="tx-stat-card">
      <div class="tx-stat-icon tx-stat-icon-balance">◎</div>
      <div>
        <div class="tx-stat-label">Saldo</div>
        <div class="tx-stat-value ${saldo >= 0 ? 'tx-income' : 'tx-expense'}">${formatarMoeda(Math.abs(saldo))}</div>
      </div>
    </div>
  `;
}

// ===== FILTROS STATE =====
const FILTROS_PADRAO = { periodo: 'mes', conta: 'todas', tipo: 'todos', categoria: 'todas', ordenacao: 'data-desc' };
let filtrosAplicados = { ...FILTROS_PADRAO };
let filtrosPendentes = { ...FILTROS_PADRAO };
let filtrosCatExpandido = false;

function contarFiltrosAtivos() {
  let count = 0;
  if (filtrosAplicados.periodo !== FILTROS_PADRAO.periodo) count++;
  if (filtrosAplicados.conta !== FILTROS_PADRAO.conta) count++;
  if (filtrosAplicados.tipo !== FILTROS_PADRAO.tipo) count++;
  if (filtrosAplicados.categoria !== FILTROS_PADRAO.categoria) count++;
  if (filtrosAplicados.ordenacao !== FILTROS_PADRAO.ordenacao) count++;
  return count;
}

function sincronizarBadgeFiltros() {
  const badgeEl = $('#txFiltrosBadge');
  if (!badgeEl) return;
  const count = contarFiltrosAtivos();
  badgeEl.textContent = count;
  badgeEl.style.display = count > 0 ? 'flex' : 'none';
}

// ===== MODAL FILTROS =====
const PERIODOS_OPCOES = [
  { value: '7',         label: 'Últimos 7 dias' },
  { value: '30',        label: 'Últimos 30 dias' },
  { value: '90',        label: 'Últimos 90 dias' },
  { value: 'mes',       label: 'Este mês' },
  { value: 'mesAnterior', label: 'Mês passado' },
  { value: '6meses',    label: 'Últimos 6 meses' },
  { value: 'ano',       label: 'Este ano' },
  { value: 'anoPassado',label: 'Ano passado' },
  { value: 'todos',     label: 'Todo período' },
];

function abrirModalFiltros() {
  filtrosPendentes = { ...filtrosAplicados };
  filtrosCatExpandido = false;
  document.body.insertAdjacentHTML('beforeend', gerarModalFiltrosHTML());
  requestAnimationFrame(() => {
    const sheet = $('#filtrosSheet');
    if (sheet) sheet.classList.add('filtros-sheet-open');
  });
}

function fecharModalFiltros(ev) {
  if (ev && ev.target !== $('#filtrosOverlay')) return;
  _fecharModalFiltros();
}

function _fecharModalFiltros() {
  const overlay = $('#filtrosOverlay');
  if (!overlay) return;
  const sheet = $('#filtrosSheet');
  if (sheet) sheet.classList.remove('filtros-sheet-open');
  setTimeout(() => overlay.remove(), 280);
}

function limparFiltrosPendentes() {
  filtrosPendentes = { ...FILTROS_PADRAO };
  const sheet = $('#filtrosSheet');
  if (sheet) {
    const contas = carregarDados('contas', []);
    sheet.querySelector('.filtros-body').innerHTML = gerarCorpoFiltros(contas);
  }
}

function aplicarFiltros() {
  filtrosAplicados = { ...filtrosPendentes };
  _fecharModalFiltros();
  atualizarListaTransacoes();
}

function gerarCorpoFiltros(contas) {
  const transacoes = carregarDados('transacoes', []);

  // Period options
  const periodoOptions = PERIODOS_OPCOES;
  const periodoDD = gerarCustomDropdownHTML('filtro-periodo', periodoOptions, filtrosPendentes.periodo, 'onDropdownPeriodoChange');

  // Type options
  const tipoOptions = [
    { value: 'todos', label: 'Todas as Transações' },
    { value: 'despesa', label: 'Saídas' },
    { value: 'receita', label: 'Entradas' },
  ];
  const tipoDD = gerarCustomDropdownHTML('filtro-tipo', tipoOptions, filtrosPendentes.tipo, 'onDropdownTipoChange');

  // Account options
  const contaOptions = [
    { value: 'todas', label: 'Todas as Contas' },
    ...contas.map(c => {
      const banco = BANCOS[c.banco] || {};
      return { value: c.id, label: `${banco.nome || c.banco} - ${c.nome}` };
    })
  ];
  const contaDD = gerarCustomDropdownHTML('filtro-conta', contaOptions, filtrosPendentes.conta, 'onDropdownContaChange');

  // Category options
  const catsUsadas = new Set(transacoes.map(t => t.categoria));
  const catOptions = [
    { value: 'todas', label: 'Todas as Categorias' },
    ...Object.entries(CATEGORIAS)
      .filter(([k]) => catsUsadas.has(k))
      .map(([k, v]) => ({ value: k, label: `${v.emoji} ${v.nome}` }))
  ];
  const categoriaDD = gerarCustomDropdownHTML('filtro-categoria', catOptions, filtrosPendentes.categoria, 'onDropdownCategoriaChange');

  // Sort options
  const ordenacaoOptions = [
    { value: 'data-desc', label: 'Data (mais recentes)' },
    { value: 'data-asc', label: 'Data (mais antigas)' },
    { value: 'valor-desc', label: 'Valor (maior primeiro)' },
    { value: 'valor-asc', label: 'Valor (menor primeiro)' },
  ];
  const ordenacaoDD = gerarCustomDropdownHTML('filtro-ordenacao', ordenacaoOptions, filtrosPendentes.ordenacao, 'onDropdownOrdenacaoChange');

  return `
    <div class="filtros-section">
      <div class="filtros-section-title">Período</div>
      ${periodoDD}
    </div>
    <div class="filtros-section">
      <div class="filtros-section-title">Tipo de Transação</div>
      ${tipoDD}
    </div>
    <div class="filtros-section">
      <div class="filtros-section-title">Conta</div>
      ${contaDD}
    </div>
    <div class="filtros-section">
      <div class="filtros-section-title">Categorias</div>
      ${categoriaDD}
    </div>
    <div class="filtros-section">
      <div class="filtros-section-title">Ordenar por</div>
      ${ordenacaoDD}
    </div>
  `;
}

// ===== CUSTOM DROPDOWN LOGIC =====
let currentOpenDropdown = null;

function gerarCustomDropdownHTML(id, options, selectedValue, onchangeFn) {
  const selectedOpt = options.find(o => o.value === selectedValue) || options[0];
  return `
    <div class="cdropdown-wrap" data-dropdown-id="${id}">
      <button type="button" class="cdropdown-btn" onclick="toggleDropdownMenu('${id}')">
        <span class="cdropdown-btn-label">${selectedOpt.label}</span>
        <span class="cdropdown-arrow">▼</span>
      </button>
      <div class="cdropdown-menu" id="menu-${id}">
        ${options.map(opt => `
          <div class="cdropdown-opt${opt.value === selectedValue ? ' cdropdown-opt-selected' : ''}"
               data-value="${opt.value}"
               onclick="selecionarDropdownOption('${id}', '${opt.value}', '${onchangeFn}')">
            <span class="cdropdown-opt-check">✓</span>
            <span>${opt.label}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function toggleDropdownMenu(dropdownId) {
  const wrap = $(`[data-dropdown-id="${dropdownId}"]`);
  const btn = wrap?.querySelector('.cdropdown-btn');
  const menu = wrap?.querySelector('.cdropdown-menu');
  if (!wrap || !btn || !menu) return;

  const isOpen = menu.classList.contains('cdropdown-menu-open');

  // Close any other open dropdown
  if (currentOpenDropdown && currentOpenDropdown !== dropdownId) {
    const prevWrap = $(`[data-dropdown-id="${currentOpenDropdown}"]`);
    prevWrap?.querySelector('.cdropdown-btn')?.classList.remove('cdropdown-btn-open');
    prevWrap?.querySelector('.cdropdown-menu')?.classList.remove('cdropdown-menu-open');
  }

  if (isOpen) {
    btn.classList.remove('cdropdown-btn-open');
    menu.classList.remove('cdropdown-menu-open');
    currentOpenDropdown = null;
  } else {
    btn.classList.add('cdropdown-btn-open');
    menu.classList.add('cdropdown-menu-open');
    currentOpenDropdown = dropdownId;
  }
}

function selecionarDropdownOption(dropdownId, value, onchangeFn) {
  const wrap = $(`[data-dropdown-id="${dropdownId}"]`);
  const btn = wrap?.querySelector('.cdropdown-btn');
  const menu = wrap?.querySelector('.cdropdown-menu');
  const label = btn?.querySelector('.cdropdown-btn-label');
  const opts = menu?.querySelectorAll('.cdropdown-opt');

  // Update selection state
  opts?.forEach(opt => {
    const isSelected = opt.dataset.value === value;
    opt.classList.toggle('cdropdown-opt-selected', isSelected);
  });

  // Find selected label
  const selectedOpt = Array.from(opts || []).find(o => o.dataset.value === value);
  if (label && selectedOpt) {
    label.textContent = selectedOpt.querySelector('span:last-child').textContent;
  }

  // Close dropdown
  btn?.classList.remove('cdropdown-btn-open');
  menu?.classList.remove('cdropdown-menu-open');
  currentOpenDropdown = null;

  // Execute callback
  if (onchangeFn) {
    try { window[onchangeFn](value, dropdownId); } catch (e) {}
  }
}

function closeAllDropdowns() {
  if (!currentOpenDropdown) return;
  const wrap = $(`[data-dropdown-id="${currentOpenDropdown}"]`);
  wrap?.querySelector('.cdropdown-btn')?.classList.remove('cdropdown-btn-open');
  wrap?.querySelector('.cdropdown-menu')?.classList.remove('cdropdown-menu-open');
  currentOpenDropdown = null;
}

// Close dropdown on click outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.cdropdown-wrap')) {
    closeAllDropdowns();
  }
});

// Custom dropdown change handlers for filters
function onDropdownPeriodoChange(value) {
  filtrosPendentes.periodo = value;
}

function onDropdownTipoChange(value) {
  filtrosPendentes.tipo = value;
}

function onDropdownContaChange(value) {
  filtrosPendentes.conta = value;
}

function onDropdownCategoriaChange(value) {
  filtrosPendentes.categoria = value;
}

function onDropdownOrdenacaoChange(value) {
  filtrosPendentes.ordenacao = value;
}

function gerarModalFiltrosHTML() {
  const contas = carregarDados('contas', []);
  return `
    <div class="filtros-overlay" id="filtrosOverlay" onclick="fecharModalFiltros(event)">
      <div class="filtros-sheet" id="filtrosSheet">
        <div class="filtros-drag-handle"></div>
        <div class="filtros-header">
          <span class="filtros-title">Filtros</span>
          <button class="filtros-limpar-btn" onclick="limparFiltrosPendentes()">Limpar todos</button>
        </div>
        <div class="filtros-body">${gerarCorpoFiltros(contas)}</div>
        <div class="filtros-footer">
          <button class="filtros-cancelar-btn" onclick="_fecharModalFiltros()">Cancelar</button>
          <button class="filtros-aplicar-btn" onclick="aplicarFiltros()">Aplicar filtros</button>
        </div>
      </div>
    </div>`;
}

// ===== TRANSACOES =====
function renderizarTransacoes() {
  const transacoes = carregarDados('transacoes', []);
  const contas = carregarDados('contas', []);
  const filtradas = filtrarTransacoes(transacoes);
  const badgeCount = contarFiltrosAtivos();

  $('#conteudoPrincipal').innerHTML = `
    <div class="tx-toolbar">
      <div class="tx-search-row">
        <div class="tx-search-wrapper">
          <span class="tx-search-icon">🔍</span>
          <input type="text" class="tx-search-input" placeholder="Buscar transações..." id="inputBusca">
        </div>
        <button class="tx-add-btn" onclick="abrirModalNovaTransacao()">+</button>
      </div>
      <button class="tx-filtros-btn" id="txFiltrosBtn" onclick="abrirModalFiltros()">
        <span class="tx-filtros-icon">⚙</span>
        Filtros
        <span class="tx-filtros-badge" id="txFiltrosBadge" style="display:${badgeCount > 0 ? 'flex' : 'none'}">${badgeCount}</span>
      </button>
    </div>
    <div class="tx-stats-grid" id="txStatsGrid">${renderizarStatsTx(filtradas)}</div>
    <div class="tx-list-card" id="txListCard">${renderizarListaTransacoes(filtradas, contas)}</div>
  `;

  $('#inputBusca')?.addEventListener('input', atualizarListaTransacoes);
}

function atualizarListaTransacoes() {
  const transacoes = carregarDados('transacoes', []);
  const contas = carregarDados('contas', []);
  const filtradas = filtrarTransacoes(transacoes);
  const statsEl = $('#txStatsGrid');
  const listEl = $('#txListCard');
  if (statsEl) statsEl.innerHTML = renderizarStatsTx(filtradas);
  if (listEl) listEl.innerHTML = renderizarListaTransacoes(filtradas, contas);
  sincronizarBadgeFiltros();
}

function filtrarTransacoes(transacoes) {
  let filtradas = [...transacoes];
  const periodo = filtrosAplicados.periodo;
  if (periodo && periodo !== 'todos') {
    const agora = new Date(); let dataInicio = new Date();
    switch (periodo) {
      case '7':  dataInicio.setDate(agora.getDate() - 7); break;
      case '30': dataInicio.setDate(agora.getDate() - 30); break;
      case '90': dataInicio.setDate(agora.getDate() - 90); break;
      case 'mes': dataInicio = new Date(agora.getFullYear(), agora.getMonth(), 1); break;
      case 'mesAnterior': {
        dataInicio = new Date(agora.getFullYear(), agora.getMonth() - 1, 1);
        const fim = new Date(agora.getFullYear(), agora.getMonth(), 0);
        filtradas = filtradas.filter(tx => { const d = new Date(tx.data); return d >= dataInicio && d <= fim; });
        return aplicarOutrosFiltros(filtradas);
      }
      case '6meses': dataInicio.setMonth(agora.getMonth() - 6); break;
      case 'ano': dataInicio = new Date(agora.getFullYear(), 0, 1); break;
      case 'anoPassado': {
        dataInicio = new Date(agora.getFullYear() - 1, 0, 1);
        const fim = new Date(agora.getFullYear() - 1, 11, 31);
        filtradas = filtradas.filter(tx => { const d = new Date(tx.data); return d >= dataInicio && d <= fim; });
        return aplicarOutrosFiltros(filtradas);
      }
    }
    filtradas = filtradas.filter(tx => new Date(tx.data) >= dataInicio);
  }
  return aplicarOutrosFiltros(filtradas);
}

function aplicarOutrosFiltros(transacoes) {
  let filtradas = [...transacoes];
  if (filtrosAplicados.conta !== 'todas') filtradas = filtradas.filter(tx => tx.contaId === filtrosAplicados.conta);
  if (filtrosAplicados.tipo !== 'todos') filtradas = filtradas.filter(tx => tx.tipo === filtrosAplicados.tipo);
  if (filtrosAplicados.categoria !== 'todas') filtradas = filtradas.filter(tx => tx.categoria === filtrosAplicados.categoria);
  filtradas.sort((a, b) => {
    switch (filtrosAplicados.ordenacao) {
      case 'data-asc':   return new Date(a.data) - new Date(b.data);
      case 'data-desc':  return new Date(b.data) - new Date(a.data);
      case 'valor-asc':  return a.valor - b.valor;
      case 'valor-desc': return b.valor - a.valor;
      default:           return 0;
    }
  });
  const busca = $('#inputBusca')?.value?.toLowerCase();
  if (busca) filtradas = filtradas.filter(tx => tx.descricao.toLowerCase().includes(busca) || (CATEGORIAS[tx.categoria]?.nome || '').toLowerCase().includes(busca));
  return filtradas;
}

// ===== PARCELAMENTOS =====
function renderizarParcelamentos() {
  const parcelamentos = carregarDados('parcelamentos', []);
  const contas = carregarDados('contas', []);
  const totalMensal = parcelamentos.reduce((s, p) => s + p.valorParcela, 0);
  const totalRestante = parcelamentos.reduce((s, p) => s + (p.totalParcelas - p.parcelaAtual + 1) * p.valorParcela, 0);

  $('#conteudoPrincipal').innerHTML = `
    <div class="installments-summary">
      <div class="card"><div class="summary-card-label">Parcelamentos ativos</div><div class="card-value">${parcelamentos.length}</div></div>
      <div class="card"><div class="summary-card-label">Valor mensal comprometido</div><div class="card-value">${formatarMoeda(totalMensal)}</div></div>
      <div class="card"><div class="summary-card-label">Total restante a pagar</div><div class="card-value text-accent">${formatarMoeda(totalRestante)}</div></div>
    </div>
    <div class="search-bar" style="margin-top: var(--space-lg)"><div style="flex:1"></div><button class="btn btn-primary" onclick="abrirModalNovoParcelamento()">+ Adicionar Parcelamento</button></div>
    <div class="installments-list">${parcelamentos.length === 0 ? `<div class="card"><div class="empty-state"><div class="empty-state-icon">📦</div><div class="empty-state-title">Nenhum parcelamento</div></div></div>` :
      parcelamentos.map(p => {
        const cat = CATEGORIAS[p.categoria];
        const conta = contas.find(c => c.id === p.contaId);
        const progresso = (p.parcelaAtual / p.totalParcelas) * 100;
        const proxData = new Date(p.primeiraData); proxData.setMonth(proxData.getMonth() + p.parcelaAtual);
        return `<div class="installment-item"><div class="installment-header"><div><span class="installment-icon">${cat?.emoji || '📦'}</span><span class="installment-description">${p.descricao}</span></div>
          <button class="menu-btn" onclick="event.stopPropagation(); menuContexto('parcelamento', '${p.id}')">⋮</button></div>
          <div class="installment-progress"><div class="progress-bar"><div class="progress-fill" style="width: ${progresso}%"></div></div>
            <div class="progress-text"><span>Parcela ${p.parcelaAtual} de ${p.totalParcelas}</span><span>${formatarMoeda(p.valorParcela)}/mês</span></div></div>
          <div class="installment-details"><span>Total: ${formatarMoeda(p.valorTotal)}</span><span>Próxima: ${formatarData(proxData)}</span><span>${BANCOS[conta?.banco]?.logo || '?'} ${conta?.nome || 'Conta'}</span></div></div>`;
      }).join('')}</div>
  `;
}

// ===== ASSINATURAS =====
function renderizarAssinaturas() {
  const assinaturas = carregarDados('assinaturas', []);
  const contas = carregarDados('contas', []);
  const totalMensal = assinaturas.reduce((s, a) => s + a.valor, 0);
  const totalAnual = totalMensal * 12;
  const media = assinaturas.length > 0 ? totalMensal / assinaturas.length : 0;

  $('#conteudoPrincipal').innerHTML = `
    <div class="card"><div class="subscriptions-summary">
      <div class="subscription-stat"><div class="subscription-stat-value">${assinaturas.length}</div><div class="subscription-stat-label">Assinaturas</div></div>
      <div class="subscription-stat"><div class="subscription-stat-value">${formatarMoeda(totalMensal)}</div><div class="subscription-stat-label">Gasto mensal</div></div>
      <div class="subscription-stat"><div class="subscription-stat-value text-accent">${formatarMoeda(totalAnual)}</div><div class="subscription-stat-label">Projeção anual</div></div>
      <div class="subscription-stat"><div class="subscription-stat-value text-success">${formatarMoeda(media)}</div><div class="subscription-stat-label">Média/serviço</div></div>
    </div></div>
    <div class="search-bar" style="margin-top: var(--space-lg)"><select class="filter-select"><option value="todas">Todas as contas</option>${contas.map(c => `<option value="${c.id}">${BANCOS[c.banco]?.nome || c.banco} - ${c.nome}</option>`).join('')}</select>
      <button class="btn btn-primary" onclick="abrirModalNovaAssinatura()">+ Adicionar</button></div>
    <div class="subscriptions-list">${assinaturas.length === 0 ? `<div class="card"><div class="empty-state"><div class="empty-state-icon">📺</div><div class="empty-state-title">Nenhuma assinatura</div></div></div>` :
      assinaturas.map(a => {
        const conta = contas.find(c => c.id === a.contaId);
        return `<div class="subscription-item"><div class="subscription-logo">${a.nome[0]}</div><div class="subscription-info"><div class="subscription-name">${a.nome}</div>
          <div class="subscription-meta">📅 Dia ${a.diaRenovacao} • ${a.pagamentos} pagamentos • ${BANCOS[conta?.banco]?.nome || conta?.nome || 'Conta'}</div></div>
          <div class="subscription-value">${formatarMoeda(a.valor)}</div><button class="menu-btn" onclick="event.stopPropagation(); menuContexto('assinatura', '${a.id}')">⋮</button></div>`;
      }).join('')}</div>
  `;
}

// ===== CATEGORIAS =====
const NOMES_MESES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

function calcularMesCategoria() {
  const agora = new Date();
  const total = agora.getMonth() + offsetMesCategorias;
  const mes = ((total % 12) + 12) % 12;
  const anosDeslocados = Math.floor(total / 12);
  const ano = agora.getFullYear() + anosDeslocados;
  return { mes, ano };
}

function renderizarCategorias() {
  const transacoes = carregarDados('transacoes', []);
  const { mes, ano } = calcularMesCategoria();

  const txMes = transacoes.filter(tx => {
    const d = new Date(tx.data);
    return d.getMonth() === mes && d.getFullYear() === ano && tx.tipo === 'despesa';
  });

  // Agrupar por categoria
  const statsCat = {};
  txMes.forEach(tx => {
    if (!statsCat[tx.categoria]) statsCat[tx.categoria] = { total: 0, subs: {} };
    statsCat[tx.categoria].total += tx.valor;
    const sub = tx.subcategoria || 'Outros';
    statsCat[tx.categoria].subs[sub] = (statsCat[tx.categoria].subs[sub] || 0) + tx.valor;
  });

  const totalGasto = Object.values(statsCat).reduce((s, c) => s + c.total, 0);
  const maxCat = Math.max(...Object.values(statsCat).map(c => c.total), 1);

  // Ordenar categorias por total (maior primeiro), apenas as que têm gastos
  const catsOrdenadas = Object.entries(statsCat)
    .sort((a, b) => b[1].total - a[1].total);

  const nomeMes = `${NOMES_MESES[mes]} De ${ano}`;

  $('#conteudoPrincipal').innerHTML = `
    <div class="cat-top-card">
      <div class="cat-top-left">
        <div class="cat-total-value">${formatarMoeda(totalGasto)}</div>
        <div class="cat-total-label">gasto em ${nomeMes}</div>
      </div>
      <div class="cat-donut-wrapper">
        ${gerarDonutChart(catsOrdenadas, totalGasto)}
      </div>
      <div class="cat-nav">
        <button class="cat-nav-btn" onclick="navegarMesCategorias(-1)">&#8249;</button>
        <span class="cat-nav-label">${nomeMes}</span>
        <button class="cat-nav-btn" onclick="navegarMesCategorias(1)">&#8250;</button>
      </div>
    </div>
    <div class="cat-list-card">
      <div class="cat-list-header">CATEGORIAS</div>
      <div class="cat-accordion-list">
        ${catsOrdenadas.length === 0
          ? `<div class="empty-state" style="padding: var(--space-2xl)"><div class="empty-state-icon">🏷️</div><div class="empty-state-title">Nenhum gasto em ${nomeMes}</div></div>`
          : catsOrdenadas.map(([chave, dados]) => renderizarCategoriasItem(chave, dados, maxCat)).join('')
        }
      </div>
    </div>
  `;
}

function gerarDonutChart(catsOrdenadas, total) {
  const r = 52, cx = 70, cy = 70;
  const circunferencia = 2 * Math.PI * r;
  const espaco = 0; // sem espaçamento entre segmentos

  if (total === 0) {
    return `<svg viewBox="0 0 140 140" class="cat-donut-svg">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#2A2A2A" stroke-width="18"/>
    </svg>`;
  }

  let offset = -(circunferencia * 0.25); // start from top
  const segmentos = catsOrdenadas.map(([chave, dados]) => {
    const cor = CATEGORIA_CORES[chave] || '#8E8E93';
    const porcao = dados.total / total;
    const comprimento = porcao * circunferencia - espaco;
    const seg = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none"
      stroke="${cor}" stroke-width="18"
      stroke-dasharray="${comprimento} ${circunferencia}"
      stroke-dashoffset="${offset}"
      stroke-linecap="butt"/>`;
    offset -= comprimento + espaco;
    return seg;
  });

  return `<svg viewBox="0 0 140 140" class="cat-donut-svg">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#1A1A1A" stroke-width="18"/>
    ${segmentos.join('')}
  </svg>`;
}

function renderizarCategoriasItem(chave, dados, maxCat) {
  const cat = CATEGORIAS[chave];
  const cor = CATEGORIA_CORES[chave] || '#8E8E93';
  const porcatCat = Math.min((dados.total / maxCat) * 100, 100);
  const subsAtivas = Object.keys(dados.subs).length;

  const subcategorias = Object.entries(dados.subs)
    .sort((a, b) => b[1] - a[1])
    .map(([nome, valor]) => {
      const porcSub = Math.min((valor / dados.total) * 100, 100);
      return `<div class="cat-sub-item">
        <div class="cat-sub-icon" style="background: ${cor}22">${cat?.emoji || '📦'}</div>
        <div class="cat-sub-name">${nome}</div>
        <div class="cat-sub-right">
          <span class="cat-sub-valor">${formatarMoeda(valor)}</span>
          <div class="cat-sub-bar"><div class="cat-sub-bar-fill" style="width:${porcSub}%; background:${cor}"></div></div>
        </div>
      </div>`;
    }).join('');

  return `<div class="cat-accordion-item" id="catItem_${chave}">
    <div class="cat-accordion-header" onclick="toggleCategoria('${chave}')">
      <div class="cat-accordion-left">
        <span class="cat-chevron" id="chevron_${chave}">&#8964;</span>
        <div class="cat-icon-wrapper" style="background: ${cor}22">
          <span class="cat-icon-emoji">${cat?.emoji || '📦'}</span>
          <span class="cat-badge" style="background: ${cor}">${subsAtivas}</span>
        </div>
        <span class="cat-nome">${cat?.nome || chave}</span>
      </div>
      <div class="cat-accordion-right">
        <span class="cat-valor">${formatarMoeda(dados.total)}</span>
        <div class="cat-main-bar">
          <div class="cat-main-bar-fill" style="width:${porcatCat}%; background:${cor}"></div>
        </div>
      </div>
    </div>
    <div class="cat-sub-list" id="catSubs_${chave}" style="display:none">
      ${subcategorias}
    </div>
  </div>`;
}

function toggleCategoria(chave) {
  const subs = $(`#catSubs_${chave}`);
  const chevron = $(`#chevron_${chave}`);
  if (!subs) return;
  const aberto = subs.style.display !== 'none';
  subs.style.display = aberto ? 'none' : 'block';
  if (chevron) chevron.style.transform = aberto ? '' : 'rotate(180deg)';
}

function navegarMesCategorias(direcao) {
  const agora = new Date();
  const novoOffset = offsetMesCategorias + direcao;
  // Não permitir meses futuros
  const { mes, ano } = (() => {
    const total = agora.getMonth() + novoOffset;
    const m = ((total % 12) + 12) % 12;
    const a = agora.getFullYear() + Math.floor(total / 12);
    return { mes: m, ano: a };
  })();
  const dataAlvo = new Date(ano, mes, 1);
  const dataAtual = new Date(agora.getFullYear(), agora.getMonth(), 1);
  if (dataAlvo > dataAtual) return;
  offsetMesCategorias = novoOffset;
  renderizarCategorias();
}

function alternarCartaoCategoria(cartao) { cartao.classList.toggle('expanded'); }

// ===== CARTOES =====
function renderizarCartoes() {
  const cartoes = carregarDados('cartoes', []);
  $('#conteudoPrincipal').innerHTML = `
    <div class="search-bar"><div style="flex:1"></div><button class="btn btn-primary" onclick="abrirModalAdicionarCartao()">+ Adicionar Cartão</button></div>
    <div class="credit-cards-list">${cartoes.length === 0 ? `<div class="card" style="grid-column: 1 / -1"><div class="empty-state"><div class="empty-state-icon">💳</div><div class="empty-state-title">Nenhum cartão cadastrado</div></div></div>` :
      cartoes.map(c => {
        const disponivel = c.limite - c.usado;
        const percUso = (c.usado / c.limite) * 100;
        return `<div class="credit-card"><div class="credit-card-header"><div class="credit-card-brand">${BANDEIRAS[c.bandeira]?.logo || 'CC'}</div>
          <button class="menu-btn" onclick="event.stopPropagation(); menuContexto('cartao', '${c.id}')">⋮</button></div>
          <div class="credit-card-number">•••• ${c.ultimosDigitos}</div>
          <div class="credit-card-limits"><div class="credit-card-limit-text"><span>Limite disponível</span><span style="font-weight: 600">${formatarMoeda(disponivel)}</span></div>
            <div class="credit-card-limit-bar"><div class="progress-bar"><div class="progress-fill" style="width: ${100 - percUso}%; background: ${percUso > 80 ? 'var(--danger)' : 'var(--success)'}"></div></div></div>
            <div class="credit-card-limit-text" style="font-size: 0.8125rem; color: var(--text-secondary)"><span>${BANCOS[c.banco]?.nome || c.banco}</span><span>de ${formatarMoeda(c.limite)}</span></div></div>
          <div class="credit-card-bill"><div class="credit-card-bill-label">Fatura atual</div><div class="credit-card-bill-value">${formatarMoeda(c.usado)}</div></div>
          <div class="credit-card-dates"><span>Fechamento: dia ${c.diaFechamento}</span><span>Vencimento: dia ${c.diaVencimento}</span></div></div>`;
      }).join('')}</div>
  `;
}

// ===== PERFIL =====
function renderizarPerfil() {
  const contas = carregarDados('contas', []);
  $('#conteudoPrincipal').innerHTML = `
    <div style="max-width: 600px; margin: 0 auto"><h2 style="margin-bottom: var(--space-xl)">Perfil e Configurações</h2>
      <div class="profile-section"><h3 class="profile-section-title">Dados Pessoais</h3>
        <div class="profile-avatar-edit"><div class="profile-avatar-large">${obterIniciais(usuarioAtual.nome)}</div>
          <div style="flex: 1"><div class="form-group"><label class="form-label">Nome completo</label><input type="text" class="form-input" id="nomePerfil" value="${usuarioAtual.nome}"></div>
            <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">E-mail</label><input type="email" class="form-input" value="${usuarioAtual.email}" disabled style="opacity: 0.5"></div>
            <button class="btn btn-primary" style="margin-top: var(--space-md)" onclick="salvarPerfil()">Salvar alterações</button></div></div></div>
      <div class="profile-section"><h3 class="profile-section-title">Segurança</h3>
        <div class="form-group"><label class="form-label">Senha atual</label><input type="password" class="form-input" id="senhaAtual" placeholder="Digite sua senha atual"></div>
        <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Nova senha</label><input type="password" class="form-input" id="novaSenha" placeholder="Digite a nova senha"></div>
        <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Confirmar nova senha</label><input type="password" class="form-input" id="confirmarNovaSenha" placeholder="Confirme a nova senha"></div>
        <button class="btn btn-secondary" style="margin-top: var(--space-md)" onclick="atualizarSenha()">Atualizar senha</button></div>
      <div class="profile-section"><h3 class="profile-section-title">Contas Vinculadas</h3>
        <div class="profile-accounts">${contas.map(c => `<div class="profile-account-item"><div style="display: flex; align-items: center; gap: var(--space-md)">
          <div class="account-logo" style="background: ${BANCOS[c.banco]?.cor || '#666'}">${BANCOS[c.banco]?.logo || '?'}</div>
          <div><div style="font-weight: 500">${BANCOS[c.banco]?.nome || c.banco} - ${c.nome}</div><div class="text-secondary">${c.tipo}</div></div></div>
          <button class="btn btn-ghost btn-sm" onclick="removerConta('${c.id}')">Remover</button></div>`).join('')}</div>
        <button class="btn btn-secondary" style="margin-top: var(--space-md)" onclick="abrirModalAdicionarConta()">+ Vincular nova conta</button></div>
      <div class="danger-zone"><h3 class="danger-zone-title">Zona de Perigo</h3>
        <button class="btn btn-secondary" onclick="logout(); renderizarApp();">Sair da conta</button>
        <button class="btn btn-danger" style="margin-left: var(--space-sm)" onclick="confirmarExcluirConta()">Excluir minha conta</button></div>
    </div>
  `;
}

// ===== MODAL =====
function abrirModal(conteudo) {
  const overlay = $('#overlayModal'), modal = $('#conteudoModal');
  if (overlay && modal) { modal.innerHTML = conteudo; overlay.classList.add('active'); }
}

function fecharModal() { $('#overlayModal')?.classList.remove('active'); }

function abrirModalNovaTransacao() {
  const contas = carregarDados('contas', []);
  abrirModal(`<div class="modal-header"><h2 class="modal-title">Nova Transação</h2><button class="modal-close" onclick="fecharModal()">✕</button></div>
    <div class="modal-body"><div class="modal-banner">⚠️ Registre apenas transações manuais. Transações bancárias aparecem automaticamente.</div>
      <form id="formTransacao"><div class="form-group"><label class="form-label">Conta/Origem</label>
          <select class="form-select" name="contaId" required>${contas.map(c => `<option value="${c.id}">${BANCOS[c.banco]?.nome || c.banco} - ${c.nome}</option>`).join('')}</select></div>
        <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Valor</label><input type="number" class="form-input" name="valor" placeholder="0,00" step="0.01" required></div>
        <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Descrição</label><input type="text" class="form-input" name="descricao" placeholder="Descrição da transação" required></div>
        <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Categoria</label>
          <select class="form-select" name="categoria" required onchange="atualizarSubcategorias(this)"><option value="">Selecione uma categoria</option>
            ${Object.entries(CATEGORIAS).map(([chave, cat]) => `<option value="${chave}">${cat.emoji} ${cat.nome}</option>`).join('')}</select></div>
        <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Subcategoria</label>
          <select class="form-select" name="subcategoria" id="selectSubcategoria" required><option value="">Selecione uma categoria primeiro</option></select></div>
        <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Tipo de Fluxo</label>
          <div class="flow-type-group"><button type="button" class="flow-type-btn expense active" onclick="definirTipoFluxo(this, 'despesa')">💸 Débito / Saída</button>
            <button type="button" class="flow-type-btn income" onclick="definirTipoFluxo(this, 'receita')">💰 Crédito / Entrada</button></div>
          <input type="hidden" name="tipo" value="despesa"></div>
        <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Data</label>
          <input type="date" class="form-input" name="data" value="${new Date().toISOString().split('T')[0]}" required></div></form></div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="fecharModal()">Cancelar</button><button class="btn btn-primary" onclick="salvarTransacao()">Criar Transação</button></div>
  `);
}

function atualizarSubcategorias(select) {
  const subSelect = $('#selectSubcategoria');
  const cat = CATEGORIAS[select.value];
  if (!cat || !subSelect) return;
  subSelect.innerHTML = cat.subcategorias.map(sub => `<option value="${sub}">${sub}</option>`).join('');
}

function definirTipoFluxo(btn, tipo) {
  $$('.flow-type-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  $('input[name="tipo"]').value = tipo;
}

function salvarTransacao() {
  const form = $('#formTransacao');
  const formData = new FormData(form);
  const transacao = {
    id: gerarId(), contaId: formData.get('contaId'), valor: parseFloat(formData.get('valor')),
    descricao: formData.get('descricao'), categoria: formData.get('categoria'),
    subcategoria: formData.get('subcategoria'), tipo: formData.get('tipo'),
    data: new Date(formData.get('data')).toISOString()
  };
  const transacoes = carregarDados('transacoes', []);
  transacoes.push(transacao);
  salvarDados('transacoes', transacoes);
  fecharModal();
  mostrarToast('Transação adicionada!', 'sucesso');
  navegarPara('transacoes');
}

function abrirModalEditarTransacao(id) {
  const tx = carregarDados('transacoes', []).find(t => t.id === id);
  if (!tx) return;
  const contas = carregarDados('contas', []);
  abrirModal(`<div class="modal-header"><h2 class="modal-title">Editar Transação</h2><button class="modal-close" onclick="fecharModal()">✕</button></div>
    <div class="modal-body"><form id="formEditarTransacao">
      <div class="form-group"><label class="form-label">Conta/Origem</label>
        <select class="form-select" name="contaId" required>${contas.map(c => `<option value="${c.id}" ${c.id === tx.contaId ? 'selected' : ''}>${BANCOS[c.banco]?.nome || c.banco} - ${c.nome}</option>`).join('')}</select></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Valor</label><input type="number" class="form-input" name="valor" value="${tx.valor}" step="0.01" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Descrição</label><input type="text" class="form-input" name="descricao" value="${tx.descricao}" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Categoria</label>
        <select class="form-select" name="categoria" required onchange="atualizarSubcategorias(this)">${Object.entries(CATEGORIAS).map(([chave, cat]) => `<option value="${chave}" ${chave === tx.categoria ? 'selected' : ''}>${cat.emoji} ${cat.nome}</option>`).join('')}</select></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Subcategoria</label>
        <select class="form-select" name="subcategoria" id="selectSubcategoria" required>${(CATEGORIAS[tx.categoria]?.subcategorias || []).map(sub => `<option value="${sub}" ${sub === tx.subcategoria ? 'selected' : ''}>${sub}</option>`).join('')}</select></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Tipo de Fluxo</label>
        <div class="flow-type-group"><button type="button" class="flow-type-btn expense ${tx.tipo === 'despesa' ? 'active' : ''}" onclick="definirTipoFluxo(this, 'despesa')">💸 Débito / Saída</button>
          <button type="button" class="flow-type-btn income ${tx.tipo === 'receita' ? 'active' : ''}" onclick="definirTipoFluxo(this, 'receita')">💰 Crédito / Entrada</button></div>
        <input type="hidden" name="tipo" value="${tx.tipo}"></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Data</label><input type="date" class="form-input" name="data" value="${tx.data.split('T')[0]}" required></div></form></div>
    <div class="modal-footer"><button class="btn btn-danger" onclick="excluirTransacao('${id}')">Excluir</button><button class="btn btn-primary" onclick="atualizarTransacao('${id}')">Salvar</button></div>
  `);
}

function atualizarTransacao(id) {
  const form = $('#formEditarTransacao');
  const formData = new FormData(form);
  const transacoes = carregarDados('transacoes', []);
  const idx = transacoes.findIndex(t => t.id === id);
  if (idx !== -1) {
    transacoes[idx] = { ...transacoes[idx], contaId: formData.get('contaId'), valor: parseFloat(formData.get('valor')), descricao: formData.get('descricao'), categoria: formData.get('categoria'), subcategoria: formData.get('subcategoria'), tipo: formData.get('tipo'), data: new Date(formData.get('data')).toISOString() };
    salvarDados('transacoes', transacoes);
    fecharModal();
    mostrarToast('Transação atualizada!', 'sucesso');
    navegarPara('transacoes');
  }
}

function excluirTransacao(id) {
  salvarDados('transacoes', carregarDados('transacoes', []).filter(t => t.id !== id));
  fecharModal();
  mostrarToast('Transação excluída', 'sucesso');
  navegarPara('transacoes');
}

function abrirModalAdicionarConta() {
  abrirModal(`<div class="modal-header"><h2 class="modal-title">Adicionar Conta</h2><button class="modal-close" onclick="fecharModal()">✕</button></div>
    <div class="modal-body"><form id="formConta">
      <div class="form-group"><label class="form-label">Instituição</label>
        <select class="form-select" name="banco" required>${Object.entries(BANCOS).map(([chave, b]) => `<option value="${chave}">${b.nome}</option>`).join('')}</select></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Nome da conta</label><input type="text" class="form-input" name="nome" placeholder="Ex: Conta corrente" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Tipo</label>
        <select class="form-select" name="tipo" required><option value="Conta corrente">Conta corrente</option><option value="Poupança">Poupança</option><option value="Investimento">Investimento</option></select></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Saldo atual</label><input type="number" class="form-input" name="saldo" placeholder="0,00" step="0.01" value="0"></div></form></div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="fecharModal()">Cancelar</button><button class="btn btn-primary" onclick="salvarConta()">Adicionar</button></div>
  `);
}

function salvarConta() {
  const form = $('#formConta');
  const formData = new FormData(form);
  const conta = { id: gerarId(), banco: formData.get('banco'), nome: formData.get('nome'), tipo: formData.get('tipo'), saldo: parseFloat(formData.get('saldo')) || 0 };
  const contas = carregarDados('contas', []);
  contas.push(conta);
  salvarDados('contas', contas);
  fecharModal();
  mostrarToast('Conta adicionada!', 'sucesso');
  navegarPara(telaAtual);
}

function removerConta(id) {
  salvarDados('contas', carregarDados('contas', []).filter(c => c.id !== id));
  mostrarToast('Conta removida', 'sucesso');
  renderizarPerfil();
}

function abrirModalAdicionarCartao() {
  abrirModal(`<div class="modal-header"><h2 class="modal-title">Adicionar Cartão</h2><button class="modal-close" onclick="fecharModal()">✕</button></div>
    <div class="modal-body"><form id="formCartao">
      <div class="form-group"><label class="form-label">Nome do cartão</label><input type="text" class="form-input" name="nome" placeholder="Ex: Nubank Platinum" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Banco/Instituição</label>
        <select class="form-select" name="banco" required>${Object.entries(BANCOS).map(([chave, b]) => `<option value="${chave}">${b.nome}</option>`).join('')}</select></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Bandeira</label>
        <select class="form-select" name="bandeira" required>${Object.entries(BANDEIRAS).map(([chave, b]) => `<option value="${chave}">${b.nome}</option>`).join('')}</select></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Últimos 4 dígitos</label><input type="text" class="form-input" name="ultimosDigitos" placeholder="1234" maxlength="4" pattern="[0-9]{4}" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Limite total</label><input type="number" class="form-input" name="limite" placeholder="0,00" step="0.01" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Dia de vencimento</label><input type="number" class="form-input" name="diaVencimento" placeholder="Ex: 15" min="1" max="31" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Dia de fechamento</label><input type="number" class="form-input" name="diaFechamento" placeholder="Ex: 8" min="1" max="31" required></div></form></div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="fecharModal()">Cancelar</button><button class="btn btn-primary" onclick="salvarCartao()">Adicionar</button></div>
  `);
}

function salvarCartao() {
  const form = $('#formCartao');
  const formData = new FormData(form);
  const cartao = { id: gerarId(), nome: formData.get('nome'), banco: formData.get('banco'), bandeira: formData.get('bandeira'), ultimosDigitos: formData.get('ultimosDigitos'), limite: parseFloat(formData.get('limite')), usado: 0, diaVencimento: parseInt(formData.get('diaVencimento')), diaFechamento: parseInt(formData.get('diaFechamento')) };
  const cartoes = carregarDados('cartoes', []);
  cartoes.push(cartao);
  salvarDados('cartoes', cartoes);
  fecharModal();
  mostrarToast('Cartão adicionado!', 'sucesso');
  navegarPara('cartoes');
}

function abrirModalNovoParcelamento() {
  const contas = carregarDados('contas', []);
  abrirModal(`<div class="modal-header"><h2 class="modal-title">Adicionar Parcelamento</h2><button class="modal-close" onclick="fecharModal()">✕</button></div>
    <div class="modal-body"><form id="formParcelamento">
      <div class="form-group"><label class="form-label">Descrição</label><input type="text" class="form-input" name="descricao" placeholder="Ex: iPhone 15" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Valor total</label><input type="number" class="form-input" name="valorTotal" placeholder="0,00" step="0.01" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Número de parcelas</label><input type="number" class="form-input" name="totalParcelas" placeholder="Ex: 12" min="2" max="48" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Data da 1ª parcela</label><input type="date" class="form-input" name="primeiraData" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Conta/Cartão</label>
        <select class="form-select" name="contaId" required>${contas.map(c => `<option value="${c.id}">${BANCOS[c.banco]?.nome || c.banco} - ${c.nome}</option>`).join('')}</select></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Categoria</label>
        <select class="form-select" name="categoria" required>${Object.entries(CATEGORIAS).map(([chave, cat]) => `<option value="${chave}">${cat.emoji} ${cat.nome}</option>`).join('')}</select></div></form></div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="fecharModal()">Cancelar</button><button class="btn btn-primary" onclick="salvarParcelamento()">Adicionar</button></div>
  `);
}

function salvarParcelamento() {
  const form = $('#formParcelamento');
  const formData = new FormData(form);
  const valorTotal = parseFloat(formData.get('valorTotal'));
  const totalParcelas = parseInt(formData.get('totalParcelas'));
  const parcelamento = { id: gerarId(), descricao: formData.get('descricao'), valorTotal, valorParcela: valorTotal / totalParcelas, totalParcelas, parcelaAtual: 1, primeiraData: new Date(formData.get('primeiraData')).toISOString(), contaId: formData.get('contaId'), categoria: formData.get('categoria') };
  const parcelamentos = carregarDados('parcelamentos', []);
  parcelamentos.push(parcelamento);
  salvarDados('parcelamentos', parcelamentos);
  fecharModal();
  mostrarToast('Parcelamento adicionado!', 'sucesso');
  navegarPara('parcelamentos');
}

function abrirModalNovaAssinatura() {
  const contas = carregarDados('contas', []);
  abrirModal(`<div class="modal-header"><h2 class="modal-title">Adicionar Assinatura</h2><button class="modal-close" onclick="fecharModal()">✕</button></div>
    <div class="modal-body"><form id="formAssinatura">
      <div class="form-group"><label class="form-label">Nome do serviço</label><input type="text" class="form-input" name="nome" placeholder="Ex: Netflix" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Valor mensal</label><input type="number" class="form-input" name="valor" placeholder="0,00" step="0.01" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Dia de renovação</label><input type="number" class="form-input" name="diaRenovacao" placeholder="Ex: 15" min="1" max="31" required></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Conta vinculada</label>
        <select class="form-select" name="contaId" required>${contas.map(c => `<option value="${c.id}">${BANCOS[c.banco]?.nome || c.banco} - ${c.nome}</option>`).join('')}</select></div>
      <div class="form-group" style="margin-top: var(--space-md)"><label class="form-label">Categoria</label>
        <select class="form-select" name="categoria" required>${Object.entries(CATEGORIAS).map(([chave, cat]) => `<option value="${chave}">${cat.emoji} ${cat.nome}</option>`).join('')}</select></div></form></div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="fecharModal()">Cancelar</button><button class="btn btn-primary" onclick="salvarAssinatura()">Adicionar</button></div>
  `);
}

function salvarAssinatura() {
  const form = $('#formAssinatura');
  const formData = new FormData(form);
  const assinatura = { id: gerarId(), nome: formData.get('nome'), valor: parseFloat(formData.get('valor')), diaRenovacao: parseInt(formData.get('diaRenovacao')), contaId: formData.get('contaId'), categoria: formData.get('categoria'), pagamentos: 0 };
  const assinaturas = carregarDados('assinaturas', []);
  assinaturas.push(assinatura);
  salvarDados('assinaturas', assinaturas);
  fecharModal();
  mostrarToast('Assinatura adicionada!', 'sucesso');
  navegarPara('assinaturas');
}

function menuContexto(tipo, id) {
  const acao = prompt('Ação: editar, excluir, ou cancelar?');
  if (acao === 'excluir') {
    if (tipo === 'parcelamento') { salvarDados('parcelamentos', carregarDados('parcelamentos', []).filter(p => p.id !== id)); mostrarToast('Parcelamento excluído', 'sucesso'); navegarPara('parcelamentos'); }
    else if (tipo === 'assinatura') { salvarDados('assinaturas', carregarDados('assinaturas', []).filter(a => a.id !== id)); mostrarToast('Assinatura excluída', 'sucesso'); navegarPara('assinaturas'); }
    else if (tipo === 'cartao') { salvarDados('cartoes', carregarDados('cartoes', []).filter(c => c.id !== id)); mostrarToast('Cartão excluído', 'sucesso'); navegarPara('cartoes'); }
  }
}

function salvarPerfil() {
  const nomeInput = $('#nomePerfil');
  if (nomeInput) {
    usuarioAtual.nome = nomeInput.value;
    const usuarios = obterUsuarios();
    const idx = usuarios.findIndex(u => u.email === usuarioAtual.email);
    if (idx !== -1) { usuarios[idx].nome = usuarioAtual.nome; salvarUsuarios(usuarios); }
    localStorage.setItem(`${STORAGE_PREFIX}sessao`, JSON.stringify(usuarioAtual));
    mostrarToast('Perfil atualizado!', 'sucesso');
    renderizarApp();
  }
}

function atualizarSenha() {
  const atual = $('#senhaAtual')?.value, nova = $('#novaSenha')?.value, confirmar = $('#confirmarNovaSenha')?.value;
  if (!atual || !nova || !confirmar) { mostrarToast('Preencha todos os campos', 'erro'); return; }
  if (nova !== confirmar) { mostrarToast('As senhas não coincidem', 'erro'); return; }
  if (nova.length < 6) { mostrarToast('A senha deve ter pelo menos 6 caracteres', 'erro'); return; }
  const usuarios = obterUsuarios();
  const idx = usuarios.findIndex(u => u.email === usuarioAtual.email);
  if (idx === -1 || usuarios[idx].senha !== atual) { mostrarToast('Senha atual incorreta', 'erro'); return; }
  usuarios[idx].senha = nova;
  salvarUsuarios(usuarios);
  mostrarToast('Senha atualizada!', 'sucesso');
}

function confirmarExcluirConta() {
  if (confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
    salvarUsuarios(obterUsuarios().filter(u => u.email !== usuarioAtual.email));
    Object.keys(localStorage).filter(k => k.startsWith(obterChaveUsuario(''))).forEach(k => localStorage.removeItem(k));
    logout();
    mostrarToast('Conta excluída', 'sucesso');
    renderizarApp();
  }
}

// ===== TOAST =====
function mostrarToast(mensagem, tipo = 'info') {
  const container = $('#containerToast');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${tipo === 'sucesso' ? 'success' : tipo === 'erro' ? 'error' : ''}`;
  toast.textContent = mensagem;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ===== INICIALIZACAO =====
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar usuário demo automaticamente
  initDemoUser();

  if (verificarSessao()) renderizarApp();
  else renderizarTelaAuth();
});

// Expor funcoes globalmente
window.navegarPara = navegarPara;
window.abrirModalNovaTransacao = abrirModalNovaTransacao;
window.abrirModalEditarTransacao = abrirModalEditarTransacao;
window.abrirModalAdicionarConta = abrirModalAdicionarConta;
window.abrirModalAdicionarCartao = abrirModalAdicionarCartao;
window.abrirModalNovoParcelamento = abrirModalNovoParcelamento;
window.abrirModalNovaAssinatura = abrirModalNovaAssinatura;
window.fecharModal = fecharModal;
window.salvarTransacao = salvarTransacao;
window.atualizarTransacao = atualizarTransacao;
window.excluirTransacao = excluirTransacao;
window.salvarConta = salvarConta;
window.salvarCartao = salvarCartao;
window.salvarParcelamento = salvarParcelamento;
window.salvarAssinatura = salvarAssinatura;
window.atualizarSubcategorias = atualizarSubcategorias;
window.definirTipoFluxo = definirTipoFluxo;
window.menuContexto = menuContexto;
window.salvarPerfil = salvarPerfil;
window.atualizarSenha = atualizarSenha;
window.removerConta = removerConta;
window.confirmarExcluirConta = confirmarExcluirConta;
window.alternarCartaoCategoria = alternarCartaoCategoria;
window.toggleCategoria = toggleCategoria;
window.navegarMesCategorias = navegarMesCategorias;
window.abrirModalFiltros = abrirModalFiltros;
window.fecharModalFiltros = fecharModalFiltros;
window._fecharModalFiltros = _fecharModalFiltros;
window.aplicarFiltros = aplicarFiltros;
window.limparFiltrosPendentes = limparFiltrosPendentes;
window.selecionarPeriodoPendente = selecionarPeriodoPendente;
window.selecionarTipoPendente = selecionarTipoPendente;
window.selecionarContaPendente = selecionarContaPendente;
window.selecionarCategoriaPendente = selecionarCategoriaPendente;
window.toggleVerTodasCats = toggleVerTodasCats;
window.logout = logout;
window.loginDemo = loginDemo;
