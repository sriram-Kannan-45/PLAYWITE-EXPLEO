Feature: Login to Automation Exercise
    Description: Verify that a user can log in with valid credentials 

    Background:
        Given the user is on the automation exercise home page
        And user clicks on the Signup or Login link

    @smoke
    Scenario: Valid login
        When user enters the email as "srirammm123@gmail.com"
        And user enters the password as "sriram123@"
        And user clicks on the login button
        Then user should be logged in successfully

    @smoke
    Scenario: Invalid login
        When user enters the email as "sriramjhfawave12345@gmail.com"
        And user enters the password as "1234567"
        And user clicks on the login button
        Then user should see an invalid login error