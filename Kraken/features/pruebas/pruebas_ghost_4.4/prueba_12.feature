Feature: Iniciar una conversación
 
@user1 @web  
Scenario: Crear nueva pages publicada calendario 
Given I navigate to page "http://localhost:2370/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I click pages
  And I wait for 3 seconds 
  And I click new_pages
  And I wait for 3 seconds 
  And I enter title_pages "Pagina de prueba 121212"
  And I wait for 2 seconds
  And I click new_description_pages
  And I wait for 3 seconds 
  And I enter description_pages "Uniandes pruebas kraken "
  And I wait for 2 seconds
  And I click options_new_pages
  And I wait for 2 seconds
  And I click options_schedule_new_pages
  And I wait for 2 seconds
  And I enter schedule_new_pages "2023-11-01"
  And I wait for 3 seconds
  And I click save_new_pages
  And I wait for 6 seconds
  And I click confirm_new_pages
  And I wait for 6 seconds
  And I click reconfirm_new_pages
  And I wait for 6 seconds
  And I click back_to_pages
  And I wait for 5 seconds
  And I click return_new_pages
  And I wait for 3 seconds