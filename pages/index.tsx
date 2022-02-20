import dynamic from 'next/dynamic'

const AppLayout = dynamic(() => import('../components/templates/layout'), {
  ssr: false,
})

export default function Home() {
  return <AppLayout>Content</AppLayout>
}
