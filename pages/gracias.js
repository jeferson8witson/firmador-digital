import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Gracias por contactarnos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={'px-5'}><h1 className="text-6xl font-bold">
            Gracias por{' '}
            <a href="/">
                contactarnos.
            </a>
        </h1>
            <p className="mt-3 text-2xl">
                Nos pondremos en contacto{' '}
                <code className="p-3 text-lg bg-gray-100 rounded-md">
                    en unos minutos hábiles.
                </code>
            </p></div>
    </div>
  )
}
