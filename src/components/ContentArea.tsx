import Card from "./Card";

function ContentArea() {
  const cards = [
    {
      name: "hello",
      language: "hello",
      job: "rust",
      id: 1,
    },
    {
      name: "hello",
      language: "hello",
      job: "rust",
      id: 2,
    },
    {
      name: "hello",
      language: "hello",
      job: "rust",
      id: 3,
    },
    {
      name: "hello",
      language: "hello",
      job: "rust",
      id: 4,
    },
  ];

  return (
    <>
      {cards.map((card, key) => (
        <Card cardContent={card.name} cardId={card.id} key={key} />
      ))}
    </>
  );
}

export default ContentArea;
