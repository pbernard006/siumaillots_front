import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { User } from '../models/User'

export default function HeaderProfile() {
  const { user, setUser } = useContext(UserContext)
  return (
    <div className="text-center mt-5">
      <i className="fas fa-user-circle text-5xl"></i>
      <div className="m-3 font-bold">
        <label className="mr-3">{user.firstName}</label>
        <label className="uppercase">{user.lastName}</label>
      </div>
    </div>
  )
}
