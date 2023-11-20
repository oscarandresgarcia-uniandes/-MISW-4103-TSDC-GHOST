Feature: Iniciar una conversación
 
@user1 @web  
Scenario: Crear nuevo tag 
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