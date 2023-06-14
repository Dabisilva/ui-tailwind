import { Link } from './Link'
import { Logo } from './icons/Logo'

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 bottom-0 top-0 p-6">
      <Logo className="text-white h-4 w-auto" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">Guides</strong>

          <div className="flex flex-col pl-2 text-sm">
            <Link href="/test/a">Introduction</Link>
            <Link href="/test/b">Quickstart</Link>
            <Link href="/test/c">SDKs</Link>
            <Link href="/test/d">Authentication</Link>
            <Link href="/test/e">Pagination</Link>
            <Link href="/test/f">Errors</Link>
            <Link href="/test/g">Webhooks</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Resources
          </strong>

          <div className="flex flex-col pl-2 text-sm">
            <Link href="/test/h">Contacts</Link>
            <Link href="/test/i">Conversations</Link>
            <Link href="/test/j">Messages</Link>
            <Link href="/test/k">Groups</Link>
            <Link href="/test/l">Attachments</Link>
          </div>
        </div>
      </nav>
    </aside>
  )
}
