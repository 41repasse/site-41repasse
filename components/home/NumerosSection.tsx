"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  desc: string;
}

function Counter({ target, prefix = "", suffix = "", label, desc }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 2000;
    const step = 16;
    const increment = target / (duration / step);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      <div className="font-sora font-semibold text-[#06709C] leading-none" style={{ fontSize: "clamp(42px,5vw,64px)" }}>
        {prefix}
        {count.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <p className="font-sora font-semibold text-[#194D67] text-base">{label}</p>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

export default function NumerosSection() {
  return (
    <section id="numeros" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-sora font-semibold text-3xl md:text-4xl text-[#194D67] text-center mb-14">
          Números que comprovam nossa experiência
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Counter target={10} prefix="+ " suffix=" anos" label="de experiência" desc="Presença sólida no mercado de Curitiba" />
          <Counter target={500} prefix="+ " suffix=" carros" label="vendidos" desc="Clientes satisfeitos em toda Curitiba" />
          <Counter target={98} prefix="+ " suffix="%" label="de aprovação" desc="Taxa de satisfação dos clientes" />
        </div>
      </div>
    </section>
  );
}
