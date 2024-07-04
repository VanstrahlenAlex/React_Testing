import React from 'react'

export default function Application() {
  return (
	<div>
		<h1>Job Application Form</h1>
		<h2>Section 1</h2>
		<p>All Fields are mandatory</p>
		<span title='close'>X</span>
		<img src="https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/64e79ca5aff2fb7295bfddf9_github-que-es.jpg" alt="Image Github" />
		<div data-testid="custom-element">Custom HTML element</div>
		<form action="">
			<div>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" placeholder="Fullname" 
					value={"Vishwas"}
					onChange={() => {}}
				/>
			</div>
			<div>
				<label htmlFor="job-location">Job Location</label>
				<select name="" id="job-location">
					<option value="">Select a Country</option>
					<option value="US">United States</option>
					<option value="GB">United Kingdom</option>
					<option value="CA">Canada</option>
					<option value="IN">India</option>
					<option value="AU">Australia</option>
				</select>
			</div>
			<div>
				<label htmlFor="terms">
					<input type="checkbox" value="terms" /> I agree to the terms and conditions
				</label>
			</div>
			<div>
				<input type="submit" value="Submit" />
			</div>
		</form>
	</div>
  )
}
