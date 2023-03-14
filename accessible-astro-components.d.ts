/* eslint-disable @typescript-eslint/no-explicit-any */
// Astro Props.children and Astro components both return any

// pagination helper types
type NumericalString = `${number}`
type RouteString = string | null

declare module 'accessible-astro-components' {
  type AccordionItemProps = { header: string }

  export function AccordionItem(_props: AccordionItemProps): any

  type ChildProps = { children: any }

  export function Accordion(_props: ChildProps): any

  type BreadcrumbsItemProps = {
    href?: string
    label: string
    currentPage?: boolean
  }

  export function BreadcrumbsItem(_props: BreadcrumbsItemProps): any

  export function Breadcrumbs(_props: ChildProps): any

  type CardProps = {
    url?: string
    img?: string
    title?: string
    footer: string
  }
  // Card component is missing alt string

  export function Card(_props: CardProps): any

  export function DarkMode(_props: Record<string, never>): any

  type MediaProps = {
    class: string
    src: string
    alt?: string
  }

  export function Media(_props: MediaProps): any

  type ModalProps = {
    triggerId: string
    title: string
    closeText?: string
  }

  export function Modal(_props: ModalProps): any

  type NotificationProps = {
    type?: string
    role?: 'status' | string
    ariaLive?: 'off' | 'polite' | 'assertive' | 'rude'
  }
  export function Notification(_props: NotificationProps): any

  type PaginationProps = {
    firstPage?: RouteString
    previousPage?: RouteString
    nextPage?: RouteString
    lastPage?: RouteString
    currentPage?: string | number
    totalPages?: NumericalString | number
  }

  export function Pagination(_props: PaginationProps): any

  export function SkipLinks(_props: Record<string, never>): any
}
