@web @categories
Feature: Search

    Scenario Outline: When selecting category then Category page is opened
        Given I am "any" user
        And I open "HomePage"
        When I select "<category>" category
        Then the "<page>" is opened and loaded correctly
        Examples:
            | category  | page          |
            | Inmuebles | InmueblesPage |






