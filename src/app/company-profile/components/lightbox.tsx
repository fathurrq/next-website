import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { Zoom } from "yet-another-react-lightbox/plugins";

export function StructureImageLightbox() {
  const [open, setOpen] = React.useState(false);
  const zoomRef = React.useRef(null);
  return (
    <>
      <Image
        src="/structure.png"
        alt="Structure"
        width={1200}
        height={600}
        className="w-[90%] mb-24 cursor-pointer"
        onClick={() => setOpen(true)}
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: "/structure.png", alt: "Structure" }]}
        plugins={[Zoom]}
        zoom={{ ref: zoomRef }}
      />
    </>
  );
}
