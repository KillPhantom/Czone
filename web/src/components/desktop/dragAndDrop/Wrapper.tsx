import update from "immutability-helper";
import { useCallback, useEffect, useState } from "react";

import { Card } from "@desktop/dragAndDrop/Card";
export interface Item {
  id: number;
  content: React.ReactElement | null;
}

type PropsType = {
  items: Item[];
};
const Wrapper = ({ items }: PropsType) => {
  const [cards, setCards] = useState(items);
  useEffect(() => {
    setCards(items);
  }, [items]);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards: Item[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as Item],
        ],
      })
    );
  }, []);

  const renderCard = useCallback(
    (
      card: { id: number; content: React.ReactElement | null } | null,
      index: number
    ) => {
      return card ? (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          content={card.content}
          moveCard={moveCard}
        />
      ) : null;
    },
    []
  );

  return (
    <>
      <div>
        {cards?.map((card, i) => {
          return renderCard(card, i);
        })}
      </div>
    </>
  );
};

export default Wrapper;
