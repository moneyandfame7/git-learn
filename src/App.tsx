import Layout from "./containers/Layout";
import { useOutlet } from "react-router-dom";
const App = () => {
	const currentOutlet = useOutlet();
	console.log(currentOutlet);
	return <Layout>{currentOutlet}</Layout>;
};

export default App;
