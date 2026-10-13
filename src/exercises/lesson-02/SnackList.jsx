export default function SnackList() {
  const snackRankings = [
    { name: 'Juice', rank: 5 },
    { name: 'Cookies', rank: 4 },
    { name: 'Ice Cream', rank: 3 },
    { name: 'Pretzels', rank: 2 },
    { name: 'Twizzlers', rank: 1 },
  ];

  const rankedSnacks = snackRankings.toSorted(
    (firstSnack, secondSnack) => firstSnack.rank - secondSnack.rank
  );

  return (
    <ol>
      {rankedSnacks.map((snack) => (
        <li key={snack.name}>{snack.name}</li>
      ))}
    </ol>
  );
}
