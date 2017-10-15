# Petite-ICICIAppathon
* Mobile application created with React Native for ICICI Appathon 2017.
* This repo contains only the frontend code.
* All the resources used in the project are included.

## App Walk through 
Petite is a Piggy bank App to teach banking and money management to kids.
Branding the bank to kids from early years through the app creates a bond of trust.

The main screen has kids login, parents login and merchants login
* When a Kid logs in with his passcode, 
	 * He is presented with four sections
		 * My Account - Account related details
		 * Payments - Transfers and payments
	 	 * History - Previous transactions
		 * Badges - Rewards and Badges

* In My Account section
	* you have the balance tab showing you the current balance in your piggy bank
	* Ask for Money tab to ask the parents for money
  * Lets try to ask the parents for 250 Rs
	* Enter the amount and just press the ask button
	* Confirm your amount 
	* A request will be sent to the parent, the parent can accept / reject the request

* Coming back to home page
	* In Payments Section
		* you have the scan tab, through which you can scan and pay the amount to any merchant
		* Lets pay 300 Rs to a merchant
		* Just enter the amount 
		* Scan the QR Code and Press Pay
		* Confirm your amount and Voila you are done.
		* Going back to payments page, we have the transfer tab to transfer to a friend
		* Lets say you want to transfer 200 to a friend
		* Enter your friends Name, the amount and any comments ("Borrowed money returned")
		* Press transfer button and confirm your amount and friends name

* Next we have the History Page
  * It has three tabs
    * The first is the balance tab showing the balance
		* The second tab shows the monthly allowance limit that the parents set for their kids
		* Last tab is the mini statement tab which will take you the last 10 recent transactions
* The Badges Page
  * contains the rewards the kid earned
	* These rewards are based how long the kid keeps the money without spending in his account
	* Based on the reward points the kids are given badges

* Going to the starting of the App again,
* For a Parent or Merchant the login in based on ICICI authentication,
  * If a parent logs in, 
    * he will be shown the accounts page, 
      * with a balance tab showing balance in his account, 
      * Set Allowance tab to set monthly allowance to kids
      * Request tab to handle request send by their kids
	* If a Merchant logs in,
		* he will be shown with transaction page showing his recent transactions.
