import Image from "next/image";

export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <Image
      src="/images/logo/41-repasse-logo.webp"
      alt="Logo 41 Repasse"
      height={size}
      width={size * 4}
      style={{ height: size, width: "auto", objectFit: "contain" }}
      priority
    />
  );
}
