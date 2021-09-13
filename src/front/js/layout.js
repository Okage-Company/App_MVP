import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import Client_Profile from "./pages/client_profile.jsx";
import injectContext from "./store/appContext";

import Footer from "./component/footer.jsx";
import Navbar from "./component/navbar.jsx";
import Business_Profile from "./component/business_profile.jsx";
import Terms from "./pages/terms.jsx";
import Contact from "./pages/contact.jsx";

import DetailPage from "./pages/detailPage.jsx";
import Search from "./pages/search.jsx";
import Cookies from "./pages/cookies.jsx";
import Privacy_Policy from "./component/privacy_policy.jsx";
import AboutUs from "./pages/aboutUs.jsx";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import MyServices from "./pages/myServices.jsx";
import MyFavourites from "./pages/myFavourites.jsx";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#5C74FF"
		},
		action: {
			hover: "#FFDB7D",
			active: "#5C74FF"
		},
		text: {
			primary: "#0A0A0A"
		}
	}
	// typography: {
	// 	fontSize: "0.875rem"
	// }
});

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<ThemeProvider theme={theme}>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/buservices/:id">
								<DetailPage />
							</Route>
							<Route exact path="/search">
								<Search />
							</Route>
							<Route exact path="/about">
								<AboutUs />
							</Route>
							<Route exact path="/cookies">
								<Cookies />
							</Route>
							<Route exact path="/terms">
								<Terms />
							</Route>
							<Route exact path="/contact">
								<Contact />
							</Route>
							<Route exact path="/privacy">
								<Privacy_Policy />
							</Route>
							<Route exact path="/profile/:id">
								<Client_Profile />
							</Route>
							<Route exact path="/myServices/">
								<MyServices />
							</Route>
							<Route exact path="/myFavourites/">
								<MyFavourites />
							</Route>
							<Route exact path="/business/:id">
								<Business_Profile />
							</Route>
							<Route exact path="/single/:theid">
								<Single />
							</Route>
							----{" "}
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
};

export default injectContext(Layout);
