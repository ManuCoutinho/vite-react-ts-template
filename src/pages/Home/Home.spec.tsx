import { screen, render } from '@testing-library/react'
import { Home } from '.'

describe('<Home/>', () => {
  it('should render Home page correctly', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /Awesome Vitejs & React Template/i })
    ).toBeInTheDocument()
  })
})
