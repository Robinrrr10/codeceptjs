Feature: login
    login related features
    I should use the login functionality as expected

    Scenario: login with valid credential and verify
        Given valid credential
        When try to login
        Then I should see "Dashboard"
        And I should see "Admin"