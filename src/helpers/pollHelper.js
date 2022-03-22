// calculate the vote results based on answers and votes, return 
// most votes at first
export const calculteAnswers = (answers, votes) => {
  if (!answers || !votes) return [];
  const results = answers.map((answer) => {
    return { ...answer, vote: 0 };
  });
  votes.forEach((vote) => {
    results.forEach((result) => {
      if (vote.answer_id === result.id) {
        result.vote++;
      }
    });
  });
  return results.sort((a, b) => b.vote - a.vote);
};
