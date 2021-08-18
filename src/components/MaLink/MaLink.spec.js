import { render } from '@margarita/margarita-test-utils'
import MaLink from './MaLink'

describe('Link', () => {
  test('renders an anchor element by default', () => {
    const { getByRole } = render(MaLink, {
      slots: { default: 'Hello World' },
      props: { href: 'http' },
    })

    expect(getByRole('link')).toHaveTextContent(/Hello World/i)
  })

  test('renders a white link if white category prop is passed', () => {
    const { getByRole } = render(MaLink, {
      props: { category: 'no-background', href: 'http' },
    })

    expect(getByRole('link')).toHaveClass('ma-link--no-background')
  })

  describe('rel="noopener noreferrer"', () => {
    test('adds security attributes when link is absolute and it opens in a new tab', () => {
      const { getByRole } = render(MaLink, {
        props: { href: 'http://holaluz.com', rel: 'whatever' },
        attrs: { target: '_blank' },
      })

      expect(getByRole('link')).toHaveAttribute(
        'rel',
        'whatever noopener noreferrer'
      )
    })

    test('does not add attributes when link is relative but opens on the same tab', () => {
      const { getByRole } = render(MaLink, {
        props: { href: '/some-relative/path' },
      })

      expect(getByRole('link')).not.toHaveAttribute('rel')
    })

    test('does not add attributes when link is relative and opens on another tab', () => {
      const { getByRole } = render(MaLink, {
        props: { href: '/some-relative/path' },
        attrs: { target: '_blank' },
      })

      expect(getByRole('link')).not.toHaveAttribute('rel')
    })

    test('does not add attributes when link is absolute but not opening on a new tab', () => {
      const { getByRole } = render(MaLink, {
        props: { href: 'http://holaluz.com' },
      })

      expect(getByRole('link')).not.toHaveAttribute('rel')
    })
  })
})
