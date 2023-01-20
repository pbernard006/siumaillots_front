import Image from 'next/image'
import Link from "next/link";

export function League({src, link, league}: { src: string; link: string; league: string}) {
  return (
    <Link href={link} className="flex items-center justify-center">
      <Image
          alt="Ligue 1"
          src={src}
          width={300}
          height={300}
          className="w-auto h-3/4"
      />
    </Link>
  );
}