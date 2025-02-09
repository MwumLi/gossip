import Back2Top from '../back2top'
import Footer from '../footer'

import Header from '../header'

import type { ReactNode } from 'react'

const Layout: React.FC<{ middle: ReactNode }>
= ({ middle }) => (

  <div className="flex flex-col h-screen container w-full md:w-3/4 lg:w-3/5">
    <Header />

    <main className="grow">
      {middle}
    </main>

    <Footer />
    <Back2Top />
  </div>

)

export default Layout
