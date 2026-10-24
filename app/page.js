export const dynamic = "force-dynamic"
export default function Page() {
  return <h1>next ssr rendered at {new Date().toISOString()}</h1>
}
