import React, { Fragment, useState } from "react";
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
import logosvg from "../../img/logo-navbar-01.png";
import Modal from "../component/modal.jsx";

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
		justifyContent: "center",
		color: "#5C74FF"
	},

	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),

		[theme.breakpoints.up("md")]: {}
	},
	sectionDesktop: {
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
		[theme.breakpoints.up("sm")]: {
			padding: "12px"
		}
	}
}));

const Navbar = () => {
	//Declaro todas las constantes
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [anchorEl2, setAnchorEl2] = React.useState(null);
	const [openModal, setOpenModal] = useState(false);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMenuLanguagesOpen = Boolean(anchorEl2);

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleLanguagesMenuOpen = event => {
		setAnchorEl2(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};
	const handleMenuClose2 = () => {
		setAnchorEl2(null);
		handleMobileMenuClose();
	};

	const menuId = "primary-search-account-menu";
	const menuId2 = "language-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
			<MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
		</Menu>
	);
	const renderMenu2 = (
		<Menu
			anchorEl={anchorEl2}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId2}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuLanguagesOpen}
			onClose={handleMenuClose2}>
			<MenuItem onClick={handleMenuClose2}>Español</MenuItem>
			<MenuItem onClick={handleMenuClose2}>English</MenuItem>
			<MenuItem onClick={handleMenuClose2}>Català</MenuItem>
		</Menu>
	);

	//Los div que devuelvo
	return (
		<div>
			<AppBar className="navBar" position="fixed" elevation={0}>
				<Toolbar>
					{/*Logo*/}
					<div className="d-flex flex-row">
						<img src={logosvg} className="okageLogo" />
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
							aria-controls={menuId2}>
							<LanguageIcon />
						</IconButton>
						{/*DMs icon */}
						<IconButton className={classes.mobileIcons} aria-label="show 19 new messages" color="inherit">
							<FavoriteIcon />
						</IconButton>
						{/*DMs icon */}
						<IconButton className={classes.mobileIcons} aria-label="show 19 new messages" color="inherit">
							<Badge badgeContent={17} color="secondary">
								<MessageIcon />
							</Badge>
						</IconButton>
						{/*ProfileBubble */}
						<IconButton
							edge="end"
							className={classes.mobileIcons}
							onClick={() => setOpenModal(true)}
							color="inherit">
							<AccountCircle />
						</IconButton>
					</div>
				</Toolbar>
				<Toolbar className={classes.searchBarMobileDiv}>
					<div className="w-100">
						<div className={classes.searchMobile}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
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
			{renderMenu}
			{renderMenu2}
		</div>
	);
};

export default Navbar;
