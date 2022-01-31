# Stone & Cabinet Offcut Store

This is an online store for order materials from trade suppliers.
We came up with the idea from one of the group who work for the cabinetmaker and could see the real world application.

## User Stories
* As a user, I would like to see a homepage where I can log in to the site with my login details.
* As a user, I would like to READ and access a database of materials.
* As a user, I would like to confirm my item by adding them to a shopping crat
* As a user, I would like to receive an invoice to my email show purchase.

## Acceptance Criteria

* It's done when the `/` homepage route renders a login page.

* It's done when an existing user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when the `/user` route renders the logged-in user's saved passwords and a form to save a new password.

* It's done when the `/user/:id` route renders the login information saved for the specific user.

* It's done when only a logged in user can visit the `/products` route.

* It's done when a logged in user is redirected to `/products` when they try to visit `/` again.

* It's done when a logged in user can add viewed product to there shopping cart

* It's done when a logged in user can sumit there cart and receive an emailed invoice.

* It's done when a logged in user can select a "Logout" button to remove their session.

* It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates.

* It's done the online material store is able to send an emailed invoice


