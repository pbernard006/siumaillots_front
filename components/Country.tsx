import Link from 'next/link'

export function Country({
  name,
  src,
  link,
}: {
  name: string
  src: string
  link: string
}) {
  return (
    <Link href={link} className="flex items-center justify-center">
      <img
        alt={name}
        src={src}
        width={300}
        height={300}
        className="w-auto h-3/4"
      />
    </Link>
  )
}
