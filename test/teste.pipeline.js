const axios = require('axios');

async function consultaCep(cep) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.data.erro) {
      console.error("CEP não encontrado!");
    } else {
      console.log("Dados do CEP:", response.data);
    }
  } catch (error) {
    console.error("Erro ao buscar o CEP:", error.message);
  }
}

consultaCep("08575270");
