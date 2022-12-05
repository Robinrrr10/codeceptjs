Feature: other functionality
    This has all functionality
    I should use other functionality as expected

    Background: login with valid credential
    Given valid credential
        When try to login
        Then I should see "Dashboard"

    Scenario: Go to PIM and validate employee id
        Given to navigate PIM
        Then I should see employee id 0038 value
        And I should able to see sentence "OrangeHRM OS 5.2"
    
    @MyTableSce
    Scenario: Go to PIM and validate all employee id
        Given to navigate PIM
        Then I should able to see employee details
            |id   | name    | job               |
            |0038 | Aaliyah | QA Lead           |
            |0204 | Cecil   | Software Engineer |
            |0212 | Charlie | QA Engineer       |
    
    @MyTabVal
    Scenario Outline: Go to pim and verify employee details one by one
    Given to navigate PIM
    Then I should able to see detail "<name>"
    Examples:
        |id   | name    | job               |
        |0038 | Aaliyah | QA Lead           |
        |0204 | Cecil   | Software Engineer |
        |0212 | Charlie | QA Engineer       |