import { GoogleGenAI } from '@google/genai';

export interface GeneratedArticleData {
  title: string;
  summary: string;
  keyPoints: string[];
  content: string;
  category: string;
  readTime: string;
}

export const generateArticleWithAI = async (
  topic: string,
  apiKey?: string
): Promise<GeneratedArticleData> => {
  const effectiveApiKey = apiKey || import.meta.env.VITE_GEMINI_API_KEY;

  if (effectiveApiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey: effectiveApiKey });
      const prompt = `Você é uma advogada criminalista especialista de alto padrão (Dra. Deyse Ramaiane - Advocacia Criminal Estratégica).
Escreva um artigo jurídico completo, elegante, persuasivo, técnico e didático sobre o tema: "${topic}".

Retorne EXCLUSIVAMENTE um objeto JSON válido (sem blocos de código extras) com a seguinte estrutura:
{
  "title": "TÍTULO EM CAIXA ALTA, IMPACTANTE E PROFISSIONAL (máx 60 caracteres)",
  "summary": "Resumo claro e objetivo em 2 a 3 frases explicando o problema e a orientação inicial.",
  "keyPoints": [
    "Ponto importante 1 objetivo e prático",
    "Ponto importante 2",
    "Ponto importante 3",
    "Ponto importante 4",
    "Ponto importante 5"
  ],
  "content": "Texto completo do artigo formatado em markdown com introdução, subtítulos ###, orientações práticas, direitos constitucionais e conclusão com foco em advocacia especializada.",
  "category": "Direito Penal Geral" (ou Crimes Digitais, Saúde & Medicina, Direito Penal Empresarial, Urgências Criminais, etc.),
  "readTime": "4 min de leitura"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const text = response.text || '';
      // Limpa possíveis blocos de formatação markdown
      const cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      return parsed;
    } catch (err) {
      console.warn('Erro ao chamar API do Gemini, usando gerador inteligente integrado:', err);
    }
  }

  // Gerador Inteligente Integrado (Gera artigo estruturado e de alta qualidade mesmo sem chave de API configurada)
  const cleanTopic = topic.trim();
  const title = cleanTopic.toUpperCase().endsWith('?') ? cleanTopic.toUpperCase() : `${cleanTopic.toUpperCase()}: O QUE VOCÊ PRECISA SABER?`;

  return {
    title: title,
    summary: `Orientações jurídicas fundamentais sobre ${cleanTopic}. Em situações que envolvem a esfera penal, a atuação técnica e imediata é decisiva para resguardar direitos e garantias constitucionais.`,
    keyPoints: [
      `Compreenda a natureza jurídica e os desdobramentos de ${cleanTopic}.`,
      "Preserve todos os documentos, registros, conversas e mídias relacionadas.",
      "Exerça o direito constitucional ao silêncio e à não autoincriminação.",
      "Evite prestar esclarecimentos formais ou informais desacompanhado de advogado.",
      "Busque assessoria jurídica criminal especializada o mais breve possível."
    ],
    content: `No âmbito da advocacia criminal estratégica, situações que envolvem **${cleanTopic}** demandam cautela redobrada e intervenção técnica desde os primeiros atos investigativos.

### O Contexto Jurídico
A legislação processual penal e a Constituição Federal asseguram que qualquer cidadão ou empresa submetido a procedimento investigatório possui direito à ampla defesa, ao contraditório e ao devido processo legal.

### Principais Cuidados e Recomendações
1. **Preservação de Evidências:** Toda documentação pertinente deve ser catalogada e protegida contra extravios ou alegações de nulidade.
2. **Postura Perante as Autoridades:** O direito ao silêncio não representa presunção de culpa; trata-se de garantia constitucional que resguarda a estratégia de defesa.
3. **Análise de Legalidade:** Identificar eventuais nulidades procedimentais, abusos de poder ou vícios formais é o primeiro passo para o trancamento de investigações ou absolvição.

### Conclusão e Atuação Estratégica
Cada detalhe conta na estruturação da tese defensiva. Contar com uma advocacia criminal atuante, combativa e discreta é a garantia de que seus direitos serão integralmente respeitados.`,
    category: "Direito Penal Estratégico",
    readTime: "4 min de leitura"
  };
};
