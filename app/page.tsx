'use client'

import DarkModeToggle from "@/components/darkModeToggle";
import LoginCard from "@/components/loginCard";
import UserInfoCard from "@/components/userInfoCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <DarkModeToggle/>
      <LoginCard/>
      <UserInfoCard/>
    </main>
  )
}
