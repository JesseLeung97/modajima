import { ThemeManager } from "./components/ThemeManager";
import { LanguageManager } from "./components/LanguageManager";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

export function App() {
	return (
		<>
			<LanguageManager>
				<ThemeManager>
					<Header />
					<Body />
				</ThemeManager>
			</LanguageManager>
		</>
	)
}
