
import GlobalConfigProvider from "@/components/globalConfigContext";
import DarkModeToggle from "@/components/darkModeToggle";

export default function Home() {
  return (
  <GlobalConfigProvider>
    <main className="flex flex-col">
      <DarkModeToggle/>
    </main>
  </GlobalConfigProvider>
)
}
