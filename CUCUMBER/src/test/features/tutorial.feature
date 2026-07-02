
Feature:logging in to the site

              Description: logging to the site

        Background:
            Given the user is on the url

        @smoke
        Scenario: valid login
              And user clicks on the myacc link
              And user clicks on the loginlink
              And user enters the valid email as "sriramjhfawave12345@gmail.com"
              And user enters password as "sriram123@"
             When user clicks on the login button
             Then user should be loggedin successfully
        @smoke
        Scenario: Invalid login
              And user clicks on the myacc link
              And user clicks on the loginlink
              And user enters the valid email as "sriramjhfawave12345@gmail.com"
              And user enters password as "1234567"
             When user clicks on the login button
             Then user should not be loggedin successfully