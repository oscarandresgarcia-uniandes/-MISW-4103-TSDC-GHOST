Feature: Iniciar una conversación
 
@user1 @web  
Scenario: Eliminar pages 
  Given I navigate to page "http://localhost:2370/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next
  And I wait for 2 seconds
  And I click pages
  And I wait for 1 seconds
  And I click edite_pages
  And I wait for 2 seconds
  And I click options_new_pages
  And I wait for 2 seconds
  And I click delete_page
  And I wait for 2 seconds
  And I click confirm_delete_page
  And I wait for 5 seconds