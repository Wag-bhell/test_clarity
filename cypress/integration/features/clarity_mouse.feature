Feature: Mouse tests feature
  Scenario: Click on button until "Click Done" is displayed
    Given I visit the "ClarityTestPage/ClarityTestPage.html" page
    When I click on the button by id "buttonClick"
    Then The message "Click Done" should be displayed

  Scenario: Double click on button until "DblClick Done" is displayed
    Given I visit the "ClarityTestPage/ClarityTestPage.html" page
    When I double click on the button "buttonDblClick"
    Then The message "DblClick Done" should be displayed

  Scenario: Move the mouse to make the message "MouseOver Done" appear
    Given I visit the "ClarityTestPage/ClarityTestPage.html" page
    When I move the mouse to "buttonMouseOver"
    Then The message "MouseOver Done" should be displayed
  
  