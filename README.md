# Theatre Tracker

# Heroku link: https://theatre-tracker.herokuapp.com/

# Wireframe: https://awwapp.com/b/uezjbrfpdcqph/

# Trello: https://trello.com/b/V3O58iqz/theatre-tracker

# Purpose: 
Users can add reviews for theatre shows they've seen and track information tailored to the avid theatregoer.

# Future goals
* Full CRUD for reviews
* Adding authentication so add/edit/delete functionality is restricted by user 
* Adding website and opening/closing show dates (where applicable) to musicals model
* Adding seat location/theater section to reviews model
* Update understudies array to include roles they cover
* Mobile friendly styling
* Render cast lists in form based on date of show to reflect any replacements in/departures from the show at that date
* Add feedback form where users can request any changes/corrections/additions to available shows
* Add ALL the shows!

# Technologies used: 
Ruby, Ruby on Rails, React, React Router, Moment, HTML/CSS, Heroku for hosting.

# Approach taken: 
* Set up API with Ruby on Rails, creating a musicals model, and reviews that belong to musicals.
* Created front end with React. Set up index to map through musicals to display their playbills which link to reviews, as well as an add button to add a review.
* Added Create functionality to Reviews model using Form component with checkboxes, radio buttons and dropdowns passing information to state.
* Added backgrounds/images that render dynamically based on the musical selected

# User stories:
* User can view existing musicals and their reviews
* User can add a new review for a show they've seen
* User can click playbill to see all reviews for that musical
* User can click the add review button to add a review for that musical
* When a review is added, the reviews page for that musical renders