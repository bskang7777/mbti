// MBTI 도메인 로직 테스트 (Jest)
const { getMbtiResult, getMbtiStrengths, getMbtiWeaknesses } = require('./mbti');

describe('MBTI 도메인 로직', () => {
  test('16가지 MBTI 유형 중 하나를 정확히 반환한다', () => {
    const answers = ['E', 'N', 'F', 'J']; // 예시 답변
    const result = getMbtiResult(answers);
    expect([
      'ENFJ','ENFP','ENTJ','ENTP','ESFJ','ESFP','ESTJ','ESTP',
      'INFJ','INFP','INTJ','INTP','ISFJ','ISFP','ISTJ','ISTP',
    ]).toContain(result);
  });

  test('MBTI 유형별 장점을 반환한다', () => {
    const strengths = getMbtiStrengths('ENFJ');
    expect(strengths).toContain('Empathetic');
  });

  test('MBTI 유형별 단점을 반환한다', () => {
    const weaknesses = getMbtiWeaknesses('ENFJ');
    expect(weaknesses).toContain('Overly idealistic');
  });
}); 