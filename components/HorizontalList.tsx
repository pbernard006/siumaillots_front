import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
import { Card } from "./Card";
import usePreventBodyScroll from "./UsePreventBodyScroll";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "Maillot";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));


function HorizontalList({title}: { title: string}) {
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <div className="my-20 mx-20 text-center">
        <h2 className="font-bold mb-3">{title}</h2>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
            <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
            >
            {items.map(({ id }) => (
                <Card
                  id={id}
                  title={id}
                  srcImage="/images/maillots/maillot.png"
                  price='30€'
                />
            ))}
            </ScrollMenu>
        </div>
    </div>
  );
}
export default HorizontalList;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}