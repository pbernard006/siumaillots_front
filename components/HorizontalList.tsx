import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
import { Card } from "./Card";
import usePreventBodyScroll from "./UsePreventBodyScroll";
import { Jersey } from "../models/Jersey";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function HorizontalList({title, jerseys}: { title: string; jerseys: Jersey[]}) {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
console.log(jerseys);
  return (
    <div className="my-20 mx-20 text-center">
        <h2 className="font-bold mb-3">{title}</h2>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
            <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
            >
            {jerseys.map((jersey, index) => (
                <Card
                  key={index}
                  id={jersey.id}
                  title={jersey.name}
                  srcImage={process.env.NEXT_PUBLIC_API_HOST + jersey.filePath}
                  price={jersey.price}
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