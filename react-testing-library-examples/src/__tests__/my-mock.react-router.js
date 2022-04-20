import {render as rtlRender, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import * as React from 'react'
import { withRouter } from 'react-router';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from 'react-router-dom'

const About = () => <div>You are on the about page</div>
const Home = () => <div>You are home</div>
const NoMatch = () => <div>No match</div>

// pretend this is in another file, and we imported LocationDisplay from './location-display'
const LocationDisplay = withRouter(({location}) => (
  <div data-testid="location-display">{location.pathname}</div>
))

jest.mock('react-router', () => ({
  withRouter: Comp => (props) => <Comp {...props}/>
}))

test('display location', () => {
  const pathname = '/some-location'
  rtlRender(<LocationDisplay location={{pathname}}/>,)
  expect(screen.getByTestId('location-display')).toHaveTextContent(location.pathname)
})