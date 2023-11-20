Feature: Iniciar una conversación
 
@user1 @web  
Scenario: editar miembro en ghost
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
  And I enter name_member "Jose Jose"  
  And I wait for 3 seconds
  And I enter email_member "Jose@Hotmail.es"  
  And I wait for 3 seconds
  And I enter note_member "El cantante"  
  And I wait for 3 seconds
  And I click save_member
  And I wait for 7 seconds
  And I click members 
  And I wait for 6 seconds