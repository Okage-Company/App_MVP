import React from "react";

export const Profile = () => {
	return (
		<div className="container">
			<div>Photo</div>
			<div>
				<h3>Your profile</h3>
				<form className="myForm">
					<label htmlFor="customer_name">Name </label>
					<input type="text" name="customer_name" id="customer_name" required />
					<label htmlFor="customer_lastName">Last Name </label>
					<input type="text" name="customer_lastName" id="customer_lastName" required />
					<label htmlFor="email_address">Email </label>
					<input type="email" name="email_address" id="email_address" required />
					<label htmlFor="address">Address </label>
					<input type="text" name="address" id="address" required />
					<label htmlFor="postal_code">Postal Code </label>
					<input type="text" name="postal_code" id="postal_code" />
					<label htmlFor="province">Province</label>
					<input type="text" name="province" id="province" />
					<label htmlFor="phone_number">Phone Number </label>
					<input type="text" name="phone_number" id="phone_number" />

					<label htmlFor="comments">Comments</label>
					<textarea name="comments" id="comments" maxLength="500" />
					<button className="send">Submit</button>
				</form>
				<h5>Update your password</h5>
				<form className="myForm">
					<label htmlFor="current_password">Current Password </label>
					<input type="text" name="current_password" id="current_password" />
					<label htmlFor="new_password">New Password </label>
					<input type="text" name="new_password" id="new_password" />
					<label htmlFor="confirm_new_password">Confirm New Password </label>
					<input type="text" name="confirm_new_password" id="confirm_new_password" />
					<button>Submit</button>
				</form>
			</div>
		</div>
	);
};
