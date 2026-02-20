export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAFA] text-[#1A1A1A]">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black">👨🏻‍💻 Just start coding</h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 ">A convenient starter for testing your Saas ideas</p>
          <p className="max-w-md text-lg leading-8 text-black ">
            See <b>page.tsx</b> file
          </p>
        </div>
      </main>
    </div>
  )
}
