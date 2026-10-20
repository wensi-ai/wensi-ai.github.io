import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
export default function NotFoundPage() {
    return <Layout><div className="page-heading"><p className="eyebrow">404 / Page not found</p><h1>A wrong turn</h1><p>This page doesn’t exist. <Link className="text-link" to="/">Back to home ↗</Link></p></div></Layout>
}
export const Head = () => <title>Page not found — Wensi Ai</title>
