export default function SearchFilter(response) {
  let scoreArray = [];
  response.forEach(response => {
    const { score } = response;
    if (score !== null) scoreArray.push(score);
  });
  const totalScore = scoreArray.reduce(
    (accomodate, current) => accomodate + current,
    0,
  );
  const averageScore = totalScore / scoreArray.length;
  const filteredResponse = response.filter(
    response => response.score > averageScore,
  );
  return filteredResponse;
}
