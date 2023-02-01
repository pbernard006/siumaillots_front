import Image from 'next/image'
import Link from "next/link";

export function LeagueCard({src, link}: { src: string; link: string}) {
  return (
    <Link href={link} className="flex items-center justify-center">
      <img
          alt="Ligue 1"
          src={src}
          width={300}
          height={300}
          className="w-auto h-3/4"
      />
    </Link>
  );
}