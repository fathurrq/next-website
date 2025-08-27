import React from "react";
export default function FancyTitle(props: { title: string, firstPartClassname?: string, restClassName?: string }) {
  const titlePart = props.title.split(" ");
  const firstPart = titlePart.length > 0 ? titlePart[0] : "";
  const restOfTitle = titlePart.length > 1 ? titlePart.slice(1).join(" ") : "";
  return (
    <React.Fragment>
      <span className={`${props.firstPartClassname} inline-block`}>{firstPart}</span>&nbsp;
      <span className={`${props.restClassName} font-medium inline-block`}>{restOfTitle}</span>
    </React.Fragment>
  );
}
