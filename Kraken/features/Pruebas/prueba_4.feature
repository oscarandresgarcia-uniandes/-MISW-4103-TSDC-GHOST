Feature: Iniciar una conversación
 
@user1 @web  
Scenario: borrar miembro en ghost
Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I click members
  And I wait for 3 seconds
  And I click edit_members
  And I wait for 5 seconds 
  And I click delete_members
  And I wait for 5 seconds 
  And I click confirm_delete_members
  And I wait for 5 seconds 
  And I click reconfirm_delete_members
  And I wait for 5 seconds 