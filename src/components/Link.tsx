'use client'

import { ReactNode } from 'react'
import LinkComponent, { LinkProps as LinkComponentProps } from 'next/link'

import { usePathname } from 'next/navigation'

interface LinkProps extends LinkComponentProps {
  children: ReactNode
}

export function Link({ children, ...props }: LinkProps) {
  const path = usePathname()

  return (
    <LinkComponent
      {...props}
      data-active={path === props.href}
      className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-all data-[active=true]:border-cyan-400"
    >
      {children}
    </LinkComponent>
  )
}
