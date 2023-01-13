import Image from "next/image"

export default function LeaguesList(){
    return (
        <>
            <div className=" h-screen vertical-center bg-stadium">
                <div className="container text-center">
                    <div className="text-white text-3xl font-bold text-center">
                        <h1>Dans quel championnat joue ton équipe ?</h1>
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-20">
                        <div className="flex items-center justify-center">
                            <Image
                                alt="Ligue 1"
                                src="/images/logos/seriea.png"
                                width={300}
                                height={300}
                                className="w-auto h-3/4"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                alt="Ligue 1"
                                src="/images/logos/liga.png"
                                width={300}
                                height={300}
                                className="w-auto h-3/4"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                alt="Ligue 1"
                                src="/images/logos/bundesliga.png"
                                width={300}
                                height={300}
                                className="w-auto h-3/4"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                alt="Ligue 1"
                                src="/images/logos/ligue1.png"
                                width={300}
                                height={300}
                                className="w-auto h-3/4"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                alt="Ligue 1"
                                src="/images/logos/premierleague.png"
                                width={300}
                                height={300}
                                className="w-auto h-3/4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}