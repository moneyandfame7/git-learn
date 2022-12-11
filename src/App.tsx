import Layout from "./containers/Layout";
import { useOutlet } from "react-router-dom";
const App = () => {
	const currentOutlet = useOutlet();

	return <Layout>{currentOutlet}</Layout>;
};

export default App;
