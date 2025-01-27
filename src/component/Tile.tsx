import classnames from 'classnames'
import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName } from './classNames'
import {
  HelpersProps,
  MainColorsProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'

export interface TileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
  is7?: boolean
  is8?: boolean
  is9?: boolean
  is10?: boolean
  is11?: boolean
  is12?: boolean
  isParent?: boolean
  isVertical?: boolean
}

export interface TileAncestorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface TileChildProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface TileChildBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface TileChildNotificationProps
  extends React.HTMLAttributes<HTMLElement>,
    ErrorBoundaryProps,
    HelpersProps,
    MainColorsProps {}

class TileAncestor extends React.Component<TileAncestorProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const [
      modifiersProps,
      { children, className, fallbackUI, ...props },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    return (
      <div
        className={classnames(
          bulmaClassName.tile,
          'is-ancestor',
          className,
          modifierPropsToClassnamesObject(modifiersProps)
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
}

class TileChildBox extends React.Component<TileChildBoxProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const [
      modifiersProps,
      { children, className, fallbackUI, ...props },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    return (
      <div
        className={classnames(
          bulmaClassName.tile,
          'is-child',
          bulmaClassName.box,
          className,
          modifierPropsToClassnamesObject(modifiersProps)
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
}

class TileChildNotification extends React.Component<
  TileChildNotificationProps
> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const [
      modifiersProps,
      { className, children, fallbackUI, ...props },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    return (
      <article
        className={classnames(
          bulmaClassName.tile,
          'is-child',
          bulmaClassName.notification,
          className,
          modifierPropsToClassnamesObject(modifiersProps)
        )}
        {...props}
      >
        {children}
      </article>
    )
  }
}

class TileChild extends React.Component<TileChildProps> {
  static Box = TileChildBox
  static Notification = TileChildNotification

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const [
      modifiersProps,
      { children, className, fallbackUI, ...props },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    return (
      <div
        className={classnames(
          bulmaClassName.tile,
          'is-child',
          className,
          modifierPropsToClassnamesObject(modifiersProps)
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
}

export class Tile extends React.Component<TileProps> {
  static Ancestor = TileAncestor
  static Child = TileChild

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const [
      modifiersProps,
      {
        children,
        className,
        fallbackUI,
        is1,
        is2,
        is3,
        is4,
        is5,
        is6,
        is7,
        is8,
        is9,
        is10,
        is11,
        is12,
        isParent,
        isVertical,
        ...props
      },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    return (
      <div
        {...props}
        className={classnames(
          bulmaClassName.tile,
          className,
          {
            'is-1': is1,
            'is-2': is2,
            'is-3': is3,
            'is-4': is4,
            'is-5': is5,
            'is-6': is6,
            'is-7': is7,
            'is-8': is8,
            'is-9': is9,
            'is-10': is10,
            'is-11': is11,
            'is-12': is12,
            'is-parent': isParent,
            'is-vertical': isVertical,
          },
          modifierPropsToClassnamesObject(modifiersProps)
        )}
      >
        {children}
      </div>
    )
  }
}
