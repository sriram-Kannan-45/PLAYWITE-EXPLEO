Feature: register

    Background: 

        Given user navigate to the tutorialsninja website
        And user click the register link

    
    Scenario: validRegister
        When user enter the first name as "Sriram"
        And user enter the last name as "Wave"
        And user enter the register email as "srsraksaayfyg35@gmail.com"
        And user enter the telephone as "9876543210"
        And user enter the register password as "sriram123@"
        And user enter the confirm password as "sriram123@"
        And user select the privacy policy checkbox
        And user click the continue button
        Then user should see the register success message "Your Account Has Been Created!"