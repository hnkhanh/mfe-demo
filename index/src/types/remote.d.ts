declare module "remoteApp/App" {
  export interface Props {
    title?: string;
  }
  function App({ title }: Props): JSX.Element;
  export default App;
}
