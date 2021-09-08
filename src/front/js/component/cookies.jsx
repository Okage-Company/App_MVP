import React from "react";
import "../../styles/terms.scss";

const Cookies = () => {
	return (
		<div className="infoContainer">
			<span className="tittle">Cookies</span>
			<p>
				A cookie is a small text file that is stored in your browser when you visit almost any web page. Its
				usefulness is that the web is able to remember your visit when you return to browse that page. Cookies
				usually store technical information, personal preferences, content customization, usage statistics,
				links to social networks, access to user accounts, etc. The purpose of the cookie is to adapt the
				content of the web to your profile and needs, without cookies the services offered by any page would be
				significantly reduced. If you wish to consult more information about what cookies are, what they store,
				how to eliminate them, deactivate them, etc., please go to this link. Cookies used on this website.
				Following the guidelines of the Spanish Data Protection Agency, we proceed to detail the use of cookies
				made by this website in order to inform you as accurately as possible.
				<br /> This website uses the following cookies:
				<ul>
					<li>
						{" "}
						Session cookies, to ensure that users who write comments on the blog are human and not automated
						applications. In this way spam is fought.
					</li>
				</ul>
				This website uses the following third-party cookies: <br />
				<ul>
					<li>
						{" "}
						Google Analytics: Stores cookies to be able to compile statistics on the traffic and volume of
						visits to this website. By using this website you are consenting to the processing of
						information about you by Google. Therefore, the exercise of any right in this regard should be
						done by communicating directly with Google.
						<li>
							{" "}
							Social networks: Each social network uses its own cookies so that you can click on buttons
							such as Like or Share.
						</li>
					</li>
				</ul>
				Deactivation or elimination of cookies:{" "}
				<ul>
					<li>
						{" "}
						At any time you can exercise your right to deactivate or delete cookies from this website. These
						actions are performed differently depending on the browser you are using.{" "}
					</li>
					<li> Additional notes </li>
					<li>
						{" "}
						Neither this website nor its legal representatives are responsible for the content or the
						veracity of the privacy policies that the third parties mentioned in this cookie policy may
						have.
					</li>
					<li>
						{" "}
						Web browsers are the tools in charge of storing cookies and from this place you must exercise
						your right to eliminate or deactivate them. Neither this website nor its legal representatives
						can guarantee the correct or incorrect handling of cookies by the aforementioned browsers.
					</li>
					<li>
						{" "}
						In some cases it is necessary to install cookies so that the browser does not forget your
						decision not to accept them. In the case of Google Analytics cookies, this company stores
						cookies on servers located in the United States and undertakes not to share them with third
						parties, except in cases where it is necessary for the operation of the system or when the law
						requires them to have such an effect. According to Google, it does not save your IP address.
						Google Inc. is a company adhered to the Safe Harbor Agreement that guarantees that all
						transferred data will be treated with a level of protection in accordance with European
						regulations. You can consult detailed information in this regard at this link. If you want
						information about the use that Google gives to cookies, we attach this other link.
					</li>
				</ul>
				For any questions or queries about this cookie policy, do not hesitate to contact us through the contact
				section.
			</p>
		</div>
	);
};
export default Cookies;