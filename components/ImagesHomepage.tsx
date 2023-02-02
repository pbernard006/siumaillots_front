import Image from 'next/image'
import imgHomepage1 from '../public/images/homepage/imgHomepage1.jpg'
import imgHomepage2 from '../public/images/homepage/imgHomepage2.jpg'
import imgHomepage3 from '../public/images/homepage/imgHomepage3.jpg'

export default function ImagesHomepage() {
  return (
    <div className="flex">
      <div className="w-3/5 m-4">
        <Image src={imgHomepage1} alt="Img carousel" className="rounded-lg" />
      </div>
      <div className="m-4 w-1/3">
        <Image
          src={imgHomepage2}
          alt="Img carousel"
          className="rounded-lg mb-4"
        />
        <Image src={imgHomepage3} alt="Img carousel" className="rounded-lg" />
      </div>
    </div>
  )
}
