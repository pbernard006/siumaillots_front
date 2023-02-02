import Head from 'next/head'
import React from 'react'
import { Josefin_Sans } from '@next/font/google'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { Team } from '../models/Team'
import { Country } from '../components/Country'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300'],
  display: 'swap',
})

export default function EquipesNationales() {
  const [teamsList, setTeamsList] = useState<Team[]>([])
  const [isTeamsLoading, setIsTeamsLoading] = useState(true)

  const getTeams = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_HOST + '/nations',
      {
        method: 'POST',
      },
    )
    const dt = await response.json()
    setTeamsList(dt)
    setIsTeamsLoading(false)
  }

  useEffect(() => {
    getTeams()
  }, [])

  return (
    <>
      <Head>
        <title>SIUMAIILOTS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={josefinSans.className}>
        <Header />
        {!isTeamsLoading && (
          <div className="grid grid-cols-5 gap-y-5 mt-20 justify-around text-center">
            {teamsList.map((country, index) => (
              <Country
                key={index}
                name={country.name}
                src={process.env.NEXT_PUBLIC_API_HOST + country.logo}
                link={
                  '/maillots?id=' +
                  country.id +
                  '&pays=' +
                  country.name.replace(' ', '-')
                }
              />
            ))}
          </div>
        )}
      </main>
    </>
  )
}
