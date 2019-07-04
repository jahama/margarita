import { render } from '@testing-library/vue'
import MaGridRow from './MaGridRow'

describe('GridRow', () => {
  it('should render content from slot', () => {
    const { getByText } = render(MaGridRow, {
      slots: { default: 'Hello World' },
    })

    getByText(/Hello World/i)
  })

  it('should render the specified tag', () => {
    const { getByTestId } = render(MaGridRow, {
      slots: { default: 'asdasd' },
      props: { tag: 'span' },
    })

    expect(getByTestId('ma-grid-row').nodeName).toBe('SPAN')
  })

  it('should add a class based in a prop', async () => {
    const { getByTestId } = render(MaGridRow, {
      props: {
        noGutters: true,
        noMarginBottom: true,
        directionColumn: true,
        hasMarginTop: true,
      },
    })

    const gridRowClasses = getByTestId('ma-grid-row').classList

    expect(gridRowClasses.contains('ma-grid-row--no-gutters')).toBeTruthy()
    expect(gridRowClasses.contains('ma-grid-row--has-margin-top')).toBeTruthy()
    expect(
      gridRowClasses.contains('ma-grid-row--no-margin-bottom')
    ).toBeTruthy()
    expect(
      gridRowClasses.contains('ma-grid-row--direction-column')
    ).toBeTruthy()
  })
})
