import Header from '../components/Header'
import HeaderProfile from '../components/HeaderProfile'
import ElementsProfile from '../components/ElementsProfile'
import InfoProfile from '../components/InfoProfile'
import { Josefin_Sans } from '@next/font/google'
import Head from 'next/head'
import { UserContext } from '../contexts/UserContext'
import { useState, useContext, useEffect } from 'react'
import Address from '../components/Address'
import Order from '../components/Orders'
import { User } from '../models/User'
import Cookies from 'js-cookie'
import { AddressModel } from '../models/AddressModel'
import Router from 'next/router'
import { Command } from '../models/Command'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300'],
  display: 'swap',
})

export default function MyAccount() {
  const [isLoading, setIsLoading] = useState(true)
  const [isCommandsLoading, setIsCommandsLoading] = useState(true)
  const [subMenu, setSubMenu] = useState('informations')
  const [isInformationsSelected, setIsInformationsSelected] = useState(true)
  const [isAddressSelected, setIsAddressSelected] = useState(false)
  const [isOrdersSelected, setIsOrdersSelected] = useState(false)
  const [commands, setCommands] = useState<Command[]>([])
  const {
    user,
    setUser,
    userEdit,
    setUserEdit,
    address,
    setAddress,
    addressEdit,
    setAddressEdit,
  } = useContext(UserContext)
  const token = Cookies.get('token')

  const isLoggedIn = () => {
    if (!token) {
      Router.push('/connexion')
    }
  }

  const getUserInformations = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_HOST + `/users/current`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    const dt = await response.json()

    let newUser: User = new User()
    newUser.email = dt.email
    newUser.firstName = dt.firstName
    newUser.lastName = dt.lastName
    newUser.orders = []
    newUser.roles = []
    newUser.id = dt.id

    if (dt.addresses && dt.addresses.length > 0) {
      let addressesTab: AddressModel[] = []
      addressesTab[0] = new AddressModel()
      addressesTab[0].city = dt.addresses[0].city
      addressesTab[0].id = dt.addresses[0].id
      addressesTab[0].number = dt.addresses[0].number
      addressesTab[0].name = dt.addresses[0].name
      addressesTab[0].zipCode = dt.addresses[0].zipCode
      addressesTab[0].country = dt.addresses[0].country
      addressesTab[0].complement = dt.addresses[0].complement
      addressesTab[0].isFavorite = dt.addresses[0].isFavorite
      addressesTab[0].user = dt.addresses[0].user

      newUser.addresses = addressesTab
    }

    setUser(newUser)
    setIsLoading(false)
  }

  const getCommandHistory = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_HOST + `/command/history`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    const dt = await response.json()
    if (dt.length > 0) {
      setCommands(dt)
      setIsCommandsLoading(false)
    }
  }

  useEffect(() => {
    isLoggedIn()
    getUserInformations()
    getCommandHistory()
  }, [isLoading])

  function displaySubMenu(subMenu: string) {
    setSubMenu(subMenu)
    switch (subMenu) {
      case 'informations': {
        setIsInformationsSelected(true)
        setIsAddressSelected(false)
        setIsOrdersSelected(false)
        break
      }
      case 'address': {
        setIsInformationsSelected(false)
        setIsAddressSelected(true)
        setIsOrdersSelected(false)
        break
      }
      case 'orders': {
        setIsInformationsSelected(false)
        setIsAddressSelected(false)
        setIsOrdersSelected(true)
        break
      }
    }

    return undefined
  }

  function logout() {
    Cookies.remove('token')
    Router.push('/connexion')
  }

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
        {!isLoading && (
          <div className="container mx-auto flex">
            <div className="w-3/12 ml-4">
              <HeaderProfile />
              <div onClick={() => displaySubMenu('informations')}>
                <ElementsProfile
                  name="Mes informations"
                  selected={isInformationsSelected}
                />
              </div>
              <div onClick={() => displaySubMenu('address')}>
                <ElementsProfile
                  name="Mon adresse"
                  selected={isAddressSelected}
                />
              </div>
              <div onClick={() => displaySubMenu('orders')}>
                <ElementsProfile
                  name="Mes commandes"
                  selected={isOrdersSelected}
                />
              </div>
              <div onClick={logout}>
                <ElementsProfile name="Déconnexion" selected={false} />
              </div>
            </div>
            <div className="w-9/12">
              {subMenu == 'informations' && (
                <InfoProfile
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              )}
              {subMenu == 'address' && (
                <Address isLoading={isLoading} setIsLoading={setIsLoading} />
              )}
              {subMenu == 'orders' &&
                !isCommandsLoading &&
                commands &&
                commands.map((command, index) => (
                  <Order
                    key={index}
                    numero={command.number}
                    status={command.status}
                    price={command.totalPrice}
                    date={command.date}
                  />
                ))}
              {subMenu == 'orders' && isCommandsLoading && (
                <div className="mt-20">
                  <div className="mx-auto w-1/2 my-10 text-center">
                    <h5>Vous n'avez pas encore effectué de commandes.</h5>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  )
}
