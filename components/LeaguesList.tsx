import { LeagueCard } from "./League"
import { League } from "../models/League";
import { useEffect, useState } from "react";

export default function LeaguesList() {
    const [leaguesList,setLeaguesList] = useState<League[]>([]);
    const [isLoading,setIsLoading] = useState(true);

    const getAllLeagues = async () => {
        const response = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/competitions", {
          method: "GET",
        });
        const dt = await response.json();

        let leagues = [];
        for(let i=0; i<dt["hydra:member"].length; i++){
            let league = {
                id: dt["hydra:member"][i].id,
                name: dt["hydra:member"][i].name,
                logo: dt["hydra:member"][i].logo
            }
            leagues.push(league);      
        }
        setLeaguesList(leagues);  
        setIsLoading(false);
    };
    
    useEffect(() => {
        getAllLeagues();
    }, []);

  return (
    <>
        <div className="vertical-center bg-stadium h-screen">
            <div className="w-screen  h-screen bg-gray-50 bg-opacity-40 ">
                <div className="text-center mt-20">
                    <div className="text-white text-3xl font-bold text-center">
                        <h1>Dans quel championnat joue ton équipe ?</h1>
                    </div>
                    {!isLoading && (
                        <div className="grid grid-cols-5 gap-4 mt-20">
                            {leaguesList.map((league, index) => (
                                <LeagueCard
                                key={index}
                                src={process.env.NEXT_PUBLIC_API_HOST + league.logo}
                                link={"/maillots?id=" + league.id + "&championnat=" + (league.name).replace(' ','-')}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
  );
}
