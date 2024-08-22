import { NextApiRequest, NextApiResponse } from "next";

// Mapeamento de traduções para saudações
const translations = {
  pt: {
    en: {
      "olá": "hello",
      "bom dia": "good morning",
      "boa tarde": "good afternoon",
      "boa noite": "good night",
    },
    ki: {
      "eu": "eme",
      "tu": "eye",
      "ela/ele": "etu",
      "professor": "messene",
      "presente": "polondo",
      "olá/oi": "eyo",
      "bom dia": "wazekele",
      "boa tarde": "wanangue",
      "boa noite": "walembelessa",
      "como estas": "wazekele kyebi",
      "como estás": "wazekele kyebi",
      "estou bem": "kgazekele kyambote",
      "não estou bem": "kingazekele kyambote",
      "escola": "xicola",
      "oração": "mussambu",
      "Deus": "Ngana Nzambi",
      "paz": "wembu",
      "amor": "kuzola",
      "rezar": "kubeza",
      "dinheiro": "kitadi",
      "1": "moxi",
      "um": "moxi",
      "2": "yadi",
      "dois": "yadi",
      "3": "tatu",
      "três": "tatu",
      "4": "wana",
      "quatro": "wana",
      "5": "tanu",
      "cinco": "tanu",
      "6": "samanu",
      "seis": "samanu",
      "7": "sambwadi",
      "sete": "sambwadi",
      "8": "dinaki",
      "oito": "dinaki",
      "9": "divwa",
      "nove": "divwa",
      "10": "dikwinyi",
      "dez": "dikwinyi",
      "20": "Makwinyi a yadi",
      "vinte": "Makwinyi a yadi",
      "30": "Makwinyi a tatu",
      "trinta": "Makwinyi a tatu",
      "40": "Makwinyi a uana",
      "quarenta": "Makwinyi a uana",
      "50": "Makwinyi a tanu",
      "cinquenta": "Makwinyi a tanu",
    },
    um: {
      "olá": "ngway",
      "bom dia": "mosa nyiha",
      "boa tarde": "mosa epuwo",
      "boa noite": "mbote nyuwe",
    },
  },
  en: {
    pt: {
      "hello": "olá",
      "good morning": "bom dia",
      "good afternoon": "boa tarde",
      "good night": "boa noite",
    },
    ki: {
      "love": "kuzola",
      "god": "Ngana Nzambi",
      "hello": "eyo",
"hi": "eyo",
"good morning": "wazekele",
"good afternoon": "wanangue",
"good evening": "walembelessa",
"how are you": "wazekele kyebi",
"I'm fine": "kgazekele kyambote",
"I'm not fine": "kingazekele kyambote",
"1": "moxi",
"one": "moxi",
"2": "yadi",
"two": "yadi",
"3": "tatu",
"three": "tatu",
"4": "wana",
"four": "wana",
"5": "tanu",
"five": "tanu",
"6": "samanu",
"six": "samanu",
"7": "sambwadi",
"seven": "sambwadi",
"8": "dinaki",
"eight": "dinaki",
"9": "divwa",
"nine": "divwa",
"10": "dikwinyi",
"ten": "dikwinyi",
"20": "Makwinyi a yadi",
"twenty": "Makwinyi a yadi",
"30": "Makwinyi a tatu",
"thirty": "Makwinyi a tatu",
"40": "Makwinyi a uana",
"forty": "Makwinyi a uana",
"50": "Makwinyi a tanu",
"fifty": "Makwinyi a tanu",
    },
    um: {
      "hello": "ngway",
      "good morning": "omele yiwa",
      "good afternoon": "utanya uwa",
      "good night": "uteke uwa",
      "good evening": "uteke uwa",
      "welcome": "okuiya kuwa",
      "see you later": "ndopo tulisanga",
      "see you tomorrow": "hela tulisanga",
      "how are you": "okasi ndati",
      "i'm okay": "ngasi ciwa",
      "i'm fine": "ngasi ciwa",
      "i am fine": "ngasi ciwa",
      "i am ok": "ngasi ciwa",
    },
  },
  ki: {
    pt: {
      "eme": "eu",
    "eye": "tu",
    "etu": "ela/ele",
    "messene": "professor",
    "polondo": "presente",
    "eyo": "olá/oi",
    "wazekele": "bom dia",
    "wanangue": "boa tarde",
    "walembelessa": "boa noite",
    "wazekele kyebi": "como estas",
    "kgazekele kyambote": "estou bem",
    "kingazekele kyambote": "não estou bem",
    "xicola": "escola",
    "mussambu": "oração",
    "Ngana Nzambi": "Deus",
    "wembu": "paz",
    "kuzola": "amor",
    "kubeza": "rezar",
    "kitadi": "dinheiro",
    "moxi": "um",
    "yadi": "dois",
    "tatu": "três",
    "wana": "4",
    "tanu": "5",
    "samanu": "6",
    "sambwadi": "sete",
    "dinaki": "oito",
    "divwa": "nove",
    "dikwinyi": "dez",
    "Makwinyi a yadi": "vinte",
    "Makwinyi a tatu": "trinta",
    "Makwinyi a uana": "quarenta",
    "Makwinyi a tanu": "cinquenta"
      
    },
    en: {
      "kuzola": "love",
"ngana nzambi": "god",
"eyo": "hello/hi",
"wazekele": "good morning",
"wanangue": "good afternoon",
"walembelessa": "good evening",
"wazekele kyebi": "how are you",
"kgazekele kyambote": "I'm fine",
"kingazekele kyambote": "I'm not fine",
"moxi": "one",
"yadi": "two",
"tatu": "three",
"wana": "four",
"tanu": "five",
"samanu": "six",
"sambwadi": "seven",
"dinaki": "eight",
"divwa": "nine",
"dikwinyi": "ten",
"Makwinyi a yadi": "twenty",
"Makwinyi a tatu": "thirty",
"Makwinyi a uana": "forty",
"Makwinyi a tanu": "fifty",
    },
    um: {
      "mbote": "ngway",
      "ngolo ki": "mosa nyiha",
      "ngolo kizinga": "mosa epuwo",
      "mbote ki nyuwe": "mbote nyuwe",
    },
  },
  um: {
    pt: {
      "ngway": "olá",
      "mosa nyiha": "bom dia",
      "mosa epuwo": "boa tarde",
      "mbote nyuwe": "boa noite",
    },
    en: {
      "ngway": "hello",
      "mosa nyiha": "good morning",
      "mosa epuwo": "good afternoon",
      "mbote nyuwe": "good night",
    },
    ki: {
      "ngway": "mbote",
      "mosa nyiha": "ngolo ki",
      "mosa epuwo": "ngolo kizinga",
      "mbote nyuwe": "mbote ki nyuwe",
    },
  },
};

async function translateRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(404).end();
  }

  const { sl, tl, q } = JSON.parse(req.body);

  // Adicionar logs para verificar os valores recebidos
  console.log("Idioma de origem:", sl);
  console.log("Idioma de destino:", tl);
  console.log("Texto a ser traduzido:", q);

  // Verificar se os idiomas de origem e destino são suportados
  if (!translations[sl] || !translations[sl][tl]) {
    console.log("Idiomas não suportados.");
    return res.status(400).send({ message: "Idiomas não suportados." });
  }

  // Obter a tradução
  const translatedText = translations[sl][tl][q.toLowerCase()];

  if (!translatedText) {
    console.log("Tradução não encontrada.");
    return res.status(404).send({ message: "Tradução não encontrada." });
  }

  console.log("Tradução encontrada:", translatedText);
  return res.status(200).send({ sentences: [{ trans: translatedText }] });
}

export default translateRoute;
