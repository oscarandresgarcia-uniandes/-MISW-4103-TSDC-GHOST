Feature: Iniciar una conversación
 
@user1 @web  
Scenario: Asociar un tag a un post
  Given I navigate to page "http://localhost:2370/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I click tags 
  And I wait for 3 seconds 
  And I click new_tags 
  And I wait for 3 seconds 
  And I enter name_tag "Tag Test"
  And I wait for 2 seconds
  And I enter slug_tag "1234"
  And I wait for 2 seconds
  And I enter description_tag "Tag ok "
  And I wait for 2 seconds
  And I click save_tags 
  And I wait for 3 seconds 
  And I click return_tags 
  And I wait for 3 seconds
  And I click post
  And I wait for 3 seconds
  And I click new_post
  And I wait for 3 seconds
  And I enter title_post "Otra cancion"
  And I wait for 2 seconds
  And I click new_description_post
  And I wait for 3 seconds
  And I enter description_post "Maestria en ingenieria de software"
  And I wait for 2 seconds  
  And I click options_new_post
  And I wait for 2 seconds
  And I click set_tag
  And I wait for 2 seconds
  And I click select_tag
  And I wait for 2 seconds
  And I click save_new_post
  And I wait for 2 seconds
  And I click confirm_new_post 
  And I wait for 3 seconds 
  And I click reconfirm_new_post
  And I wait for 3 seconds
  And I click back_to_post
  And I wait for 3 seconds
  And I click return_new_post
  And I wait for 2 seconds
