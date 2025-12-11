import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-spf-green-900 text-muted grid h-screen w-full items-center">
        <div className="container mx-auto space-y-4 px-4 lg:px-0">
          <h1 className="text-6xl font-bold">Hello, gworld!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            deserunt dolores asperiores, laboriosam quos odio fugit temporibus
            quas fugiat odit itaque, suscipit nisi nam assumenda magnam ullam
            quia pariatur tempore?
          </p>
        </div>
      </div>

      <div className="bg-background h-[800px]"></div>
    </>
  );
}
