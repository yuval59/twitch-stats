import { UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <div>
      Yep
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Home
