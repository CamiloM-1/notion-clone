import Footer from "./_components/Footer"
import Heading from "./_components/Heading"
import Heros from "./_components/Heros"

function MarketingPage() {
  return (
    <div className="min-h-full dark:bg-[#1f1f1f] flex flex-col">
      <div className="flex flex-col items-center md:justify-start justify-center text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading/>
        <Heros />
      </div>
      <Footer/>
    </div>
  )
}

export default MarketingPage