import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-us/introduction')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Intro Page</div>
}
