// MBTI 16가지 유형
const MBTI_TYPES = [
  'ENFJ','ENFP','ENTJ','ENTP','ESFJ','ESFP','ESTJ','ESTP',
  'INFJ','INFP','INTJ','INTP','ISFJ','ISFP','ISTJ','ISTP',
];

const MBTI_STRENGTHS = {
  ENFJ: ['Empathetic', 'Charismatic', 'Altruistic'],
  // ... (생략, 실제 구현시 모든 유형 추가)
};
const MBTI_WEAKNESSES = {
  ENFJ: ['Overly idealistic', 'Sensitive to criticism'],
  // ... (생략, 실제 구현시 모든 유형 추가)
};

function getMbtiResult(answers) {
  // answers: ['E'|'I', 'N'|'S', 'F'|'T', 'J'|'P']
  if (!answers || answers.length !== 4) return null;
  return answers.join('');
}

function getMbtiStrengths(type) {
  return MBTI_STRENGTHS[type] || [];
}

function getMbtiWeaknesses(type) {
  return MBTI_WEAKNESSES[type] || [];
}

module.exports = { getMbtiResult, getMbtiStrengths, getMbtiWeaknesses }; 