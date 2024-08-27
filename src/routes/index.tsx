import { createFileRoute } from '@tanstack/react-router'
import Layout from '../components/layout'
import Home from '../pages/home'
import Sidebar from '../components/sidebar/sidebar'

export const Route = createFileRoute('/')({
  component: () => <Layout>
    <Sidebar/><Home/></Layout>
})