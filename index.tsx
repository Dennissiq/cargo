import * as React from 'react'
import { render } from 'react-dom'
import designTokens from "./src/config/designTokens";
// import GlobalStyles from '../cargo/src/components/GlobalStyles/GlobalStyles'
// import { GlobalStyles } from './src/components/GlobalStyles/GlobalStyles'
import Background from './src/components/Background/Background'

const App = () => <h1>Parcel Bundler with React</h1>

const Inner = ({ height = 200 }: { height?: number }) => (
  <div style={{ height }} />
);

render(
  <>
    {/* <Background color={designTokens.colors.purple600} children={<Inner />} /> */}
    <App />
    {/* <GlobalStyles/>  */}
  </>,
  document.getElementById("root")
);