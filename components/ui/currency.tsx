"use client";
import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});

interface CurrensyProps {
  value?: string | number;
}

function Currensy({ value }: CurrensyProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}

export default Currensy;
