import React, { Fragment, useEffect, useState } from "react";
import { alpha, makeStyles, Grid } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MessageIcon from "@material-ui/icons/Message";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LanguageIcon from "@material-ui/icons/Language";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "../../styles/navbar.scss";
import logo from "../../img/logopng.png";
import Logo from "../component/logo.jsx";
import Modal from "../component/modal.jsx";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25)
		},
		display: "none",

		[theme.breakpoints.up("sm")]: {
			display: "block",
			width: "350px",
			marginLeft: "6px"
		}
	},
	searchMobile: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25)
		},
		[theme.breakpoints.up("sm")]: {}
	},

	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},

	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),

		[theme.breakpoints.up("md")]: {}
	},
	sectionDesktop: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},

	sectionMobile: {
		display: "flex",
		flex: "no-wrap",
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	searchBarMobileDiv: {
		justifyContent: "center",
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
	},
	title: {
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	mobileIcons: {
		padding: "5px",
		color: "#5C74FF",
		[theme.breakpoints.up("sm")]: {
			padding: "12px"
		}
	},
	mobileProfileIcons: {
		padding: "5px",
		color: "#FFDB7D",
		[theme.breakpoints.up("sm")]: {
			padding: "12px"
		}
	}
}));

const Navbar = () => {
	//Declaro todas las constantes
	const linkProfile = "/profile/".concat(localStorage.getItem("tokenID"));
	const linkFavourites = "/myFavourites/".concat(localStorage.getItem("tokenID"));
	const classes = useStyles();
	const [profileMenu, setProfileMenu] = useState(null);
	const [languagesMenu, setLanguagesMenu] = useState(null);
	const [openModal, setOpenModal] = useState(false);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const userLogedOrNot =
		localStorage.getItem("tokenID") != null ? (
			<>
				<Link to={linkFavourites}>
					<IconButton className={classes.mobileIcons} aria-label="show 19 new messages" color="inherit">
						<FavoriteIcon />
					</IconButton>
				</Link>
				<Link to={linkProfile}>
					<IconButton edge="end" className={classes.mobileProfileIcons} color="secondary">
						<AccountCircle />
					</IconButton>
				</Link>
			</>
		) : (
			<IconButton edge="end" className={classes.mobileIcons} onClick={() => setOpenModal(true)} color="default">
				<AccountCircle />
			</IconButton>
		);

	const isMenuOpen = Boolean(profileMenu);
	const isMenuLanguagesOpen = Boolean(languagesMenu);

	// const handleProfileMenuOpen = event => {
	// 	setProfileMenu(event.currentTarget);
	// };

	const handleLanguagesMenuOpen = event => {
		setLanguagesMenu(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	// const handleMenuClose = () => {
	// 	setProfileMenu(null);
	// 	handleMobileMenuClose();
	// };
	const handleMenuLanguagesClose = () => {
		setLanguagesMenu(null);
		handleMobileMenuClose();
	};

	const menuId = "primary-search-account-menu";
	const menuLanguagesId = "language-search-account-menu";
	// const renderMenu = (
	// 	<Menu
	// 		profileMenu={profileMenu}
	// 		anchorOrigin={{ vertical: "top", horizontal: "right" }}
	// 		id={menuId}
	// 		keepMounted
	// 		transformOrigin={{ vertical: "top", horizontal: "right" }}
	// 		open={isMenuOpen}
	// 		onClose={handleMenuClose}>
	// 		<MenuItem onClick={handleMenuLanguagesClose}>Profile</MenuItem>
	// 		<MenuItem onClick={handleMenuLanguagesClose}>My account</MenuItem>
	// 		<MenuItem onClick={handleMenuLanguagesClose}>Log Out</MenuItem>
	// 	</Menu>
	// );
	const renderMenu2 = (
		<Menu
			id={menuLanguagesId}
			keepMounted
			open={isMenuLanguagesOpen}
			getContentAnchorEl={null}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			transformOrigin={{ vertical: "top", horizontal: "center" }}
			onClose={handleMenuLanguagesClose}>
			<MenuItem onClick={handleMenuLanguagesClose}>Español</MenuItem>
			<MenuItem onClick={handleMenuLanguagesClose}>English</MenuItem>
			<MenuItem onClick={handleMenuLanguagesClose}>Català</MenuItem>
		</Menu>
	);

	//Los div que devuelvo
	return (
		<div>
			<AppBar className="navBar" position="fixed" elevation={0}>
				<Toolbar>
					{/*Logo*/}
					<div className="d-flex flex-row">
						<Link to="/">
							<img src={logo} className="okageLogo" />
						</Link>

						<Typography className={classes.title} variant="h6" noWrap>
							Okage
						</Typography>
					</div>

					<div className={classes.grow} />
					{/*Searchbar*/}
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							onKeyPress={e => {
								if (e.key === "Enter") {
									e.preventDefault();
									console.log("hihihihihi");
									location.replace("/search");
								}
							}}
							placeholder="Where are you?"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						{/*Language icon*/}
						<IconButton
							className={classes.mobileIcons}
							color="inherit"
							onClick={handleLanguagesMenuOpen}
							aria-controls={menuLanguagesId}>
							<LanguageIcon />
						</IconButton>

						{/*FAVs icon */}
						{/* Account Icon */}
						{userLogedOrNot}
					</div>
				</Toolbar>
				<Toolbar className={classes.searchBarMobileDiv}>
					<div className="w-100">
						<div className={classes.searchMobile}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								onKeyPress={e => {
									if (e.key === "Enter") {
										e.preventDefault();
										console.log("hihihihihi");
										location.replace("/search");
									}
								}}
								placeholder="Where are you?"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
								inputProps={{ "aria-label": "search" }}
							/>
						</div>
					</div>
				</Toolbar>
			</AppBar>
			{openModal && <Modal closeModal={setOpenModal} />}
			{/* {renderMenu} */}
			{renderMenu2}
		</div>
	);
};
export default Navbar;
