import { League } from "./League"

export default function LeaguesList() {
  return (
    <>
        <div className="vertical-center bg-stadium h-screen">
            <div className="w-screen  h-screen bg-gray-50 bg-opacity-40 ">
                <div className="text-center mt-20">
                    <div className="text-white text-3xl font-bold text-center">
                        <h1>Dans quel championnat joue ton équipe ?</h1>
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-20">
                        <League
                            src="/images/logos/premierleague.png"
                            link="/maillots?championnat=premierLeague"
                            league ="premierLeague"
                        />
                        <League
                            src="/images/logos/ligue1.png"
                            link="/maillots?championnat=ligue1"
                            league ="ligue1"
                        />
                        <League
                            src="/images/logos/liga.png"
                            link="/maillots?championnat=ligaSantander"
                            league ="ligaSantander"
                        />
                        <League
                            src="/images/logos/seriea.png"
                            link="/maillots?championnat=serieA"
                            league ="serieA"
                        />
                        <League
                            src="/images/logos/bundesliga.png"
                            link="/maillots?championnat=bundesliga"
                            league ="bundesliga"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
