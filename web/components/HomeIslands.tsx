"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Testimonials from "./Testimonials";
import BookingFlow from "./Booking";

export default function HomeIslands() {
  const [nodes, setNodes] = useState<{ t: HTMLElement | null; b: HTMLElement | null }>({ t: null, b: null });

  useEffect(() => {
    setNodes({
      t: document.getElementById("testimonials-root"),
      b: document.getElementById("booking-root"),
    });
  }, []);

  return (
    <>
      {nodes.t && createPortal(<Testimonials />, nodes.t)}
      {nodes.b && createPortal(<BookingFlow />, nodes.b)}
    </>
  );
}
