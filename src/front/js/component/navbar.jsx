import React, { Fragment } from "react";
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
import Image from "material-ui-image";

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
			display: "block"
		}
	},
	searchMobile: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		margin: "auto",
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25)
		},
		width: "100%",
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
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch"
		}
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
	}
}));

const Navbar = () => {
	//Declaro todas las constantes
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleLanguagesMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
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

	//Los div que devuelvo
	return (
		<div className={classes.grow}>
			<AppBar className="navBar" position="static" elevation={0}>
				<Toolbar>
					{/*Logo*/}
					<div className="">
						<Typography className={classes.title} variant="h6" noWrap>
							Okage
						</Typography>
						<Image src="../../img/logo-navbar-1-01.svg" alt="Okage" />
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
						<IconButton aria-label="show 4 new mails" color="inherit" aria-controls={menuId}>
							<LanguageIcon />
						</IconButton>
						{/*DMs icon */}
						<IconButton aria-label="show 19 new messages" color="inherit">
							<FavoriteIcon />
						</IconButton>
						{/*DMs icon */}
						<IconButton aria-label="show 19 new messages" color="inherit">
							<Badge badgeContent={17} color="secondary">
								<MessageIcon />
							</Badge>
						</IconButton>
						{/*ProfileBubble */}
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit">
							<AccountCircle />
						</IconButton>
					</div>
				</Toolbar>
				<Toolbar className={classes.searchBarMobileDiv}>
					<div>
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
			{renderMenu}
		</div>
	);
};

export default Navbar;
