import Image from "next/image"

export default function LeaguesList(){
    return (
        <>
            <div className="w-screen h-screen vertical-center bg-stadium">
                <div className="w-screen py-4">
                <div className="container mx-auto text-center">
                    <div className="text-white text-5xl font-bold text-left">
                        <h1 className="mb-8">Dans quel championnat joue ton équipe ?</h1>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        <div>
                            <Image
                                alt="Ligue 1"
                                src="/images/logos/premierleague.png"
                                width={300}
                                height={300}/>
                        </div>
                        <div>
                        <Image
                                alt="Ligue 1"
                                src="/images/logos/liga.png"
                                width={300}
                                height={300}/>
                        </div>
                        <div>
                        <Image
                                alt="Ligue 1"
                                src="/images/logos/bundesliga.png"
                                width={300}
                                height={300}/>
                        </div>
                        <div>
                        <Image
                                alt="Ligue 1"
                                src="/images/logos/ligue1.png"
                                width={300}
                                height={300}/>
                        </div>
                        <div>
                        <Image
                                alt="Ligue 1"
                                src="/images/logos/seriea.png"
                                width={300}
                                height={300}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}