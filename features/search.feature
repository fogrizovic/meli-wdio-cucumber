@web
Feature: Search

    @test
    Scenario Outline: When searching for product then listings page is opened
        Given I am "any" user
        And I open "HomePage"
        When I search for "<product>"
        Then I see that first item contains "<product>" in the title
        Examples:
            | product   |
            | Cafetera  |
            | Tostadora |






