Feature: Iniciar una conversación
 
@user1 @web  
Scenario: Editar post 
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I click post
  And I wait for 3 seconds
  And I click edite_post
  And I wait for 3 seconds
  And I enter title_post "Edicion de titulo exitosa "
  And I wait for 2 seconds
  And I click new_description_post
  And I wait for 3 seconds
  And I enter description_post "Contenido nuevo de prueba"
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