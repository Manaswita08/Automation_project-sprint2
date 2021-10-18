Feature: Automation testing for Uniform Website

  Background: Login functionality
    Given Admin is on the login page
    And Admin enters "admin" and "admin@123"
    When Admin clicks on login button
    Then Admin is redirected to the dashboard of UniformStore page
    And Admin navigates to the Reports section
    Then Admin navigates to the Sales section

 
  Scenario Outline: Validate Sales orders start date and end date functionality
    Given Admin navigates to the orders page on clicking orders
    When Admin selects the calendar icon from date start field 
    Then Admin is able to select a startdate from the calendar
    When Admin selects the calendar icon from date end field
    Then Admin is able to select a enddate from the calendar
    When Admin enters "<startdate>","<enddate>" in the start date and end date fields
    And  Admin clicks the filter button
    Then  Admin varifies the result "<startdate>","<enddate>"

    Examples: 
      |  startdate |   enddate   |
      |     !%$#   |  2021-10-06 |
      |  acfdefrt  |  aaswered   |
      | 21-12-2021 |  20-12-2021 |
      | 2021-10-08 |  2021-06-18 |
      | 2021-04-23 |  2021-09-07 |
     
      
 
   
 Scenario Outline: Validate Group by and orders status functionality in orders page
   Given Admin navigates to the orders page on clicking orders
   When  Admin selects an "<option>" in Group by field 
   And  Admin selects an option "<option1>"in Orders status field
   And  Admin clicks the filter button 
   Examples:
     | option |   option1   |
     |  Weeks |   Pending   |
     |  Days  | All Statuses|
   
   
  Scenario Outline: Validate pagination for orders page 
      Given Admin navigates to the orders page on clicking orders
      When Admin enters "<stdate>","<endate>","<grpby>","<ordersts>"
      And  Admin clicks the filter button 
      And  Admin checks if pagination exists
      And  Admin checks for the total page count
      And  Admin checks the next button 
      Then Admin checks for previous button
    Examples:
        |   stdate   |   endate   |  grpby |  ordersts   |        
        | 2019-03-04 | 2021-10-12 |  Days  | All Statuses|    
            
  ############################################################################################################################
   
   Scenario Outline: Validate Sales Tax start date and end date functionality
    Given Admin navigates to the tax page on clicking tax
    When Admin selects the calendar icon from date start field 
    Then Admin is able to select a startdate from the calendar
    When Admin selects the calendar icon from date end field
    Then Admin is able to select a enddate from the calendar
    When Admin enters "<startdate>","<enddate>" in the start date and end date fields
    And  Admin clicks the filter button
    Then  Admin varifies the result "<startdate>","<enddate>"
    Examples: 
      |  startdate |   enddate   |
      |    %@!^&   |  2021-04-23 |
      |  acfdefrt  |  aaswered   |
      | 21-12-2021 |  20-12-2021 |
      | 2021-10-08 |  2021-06-18 |
      | 2021-04-23 |  2021-09-07 |         
     
   
    Scenario Outline: Validate Group by and order status functionality in Tax page
		  Given Admin navigates to the tax page on clicking tax
		   When Admin selects an "<option>" in Group by field 
       And  Admin selects an option "<option1>"in Orders status field
       And  Admin clicks the filter button 
		   Examples:
		     | option |   option1   |
		     |  Weeks |   Pending   |
		     |  Days  | All Statuses|
      
         
    Scenario Outline: Validate pagenation for Tax  page 
     Given Admin navigates to the tax page on clicking tax
      When Admin enters "<stdate>","<endate>","<grpby>","<ordersts>"
      And  Admin clicks the filter button 
      And  Admin checks if pagination exists
      And  Admin checks for the total page count
      And  Admin checks the next button 
      Then Admin checks for previous button
    Examples:
        |   stdate   |   endate   |  grpby |  ordersts |        
        | 2019-03-02 | 2021-10-10 |  Weeks  | Pending  |            
            
         
            
   #############################################################################################################################         
   
    Scenario Outline: Validate Sales Shipping start date and end date functionality
	   Given Admin navigates to the shipping page on clicking shipping
	    When Admin selects the calendar icon from date start field 
      Then Admin is able to select a startdate from the calendar
      When Admin selects the calendar icon from date end field
      Then Admin is able to select a enddate from the calendar
	    When Admin enters "<startdate>","<enddate>" in the start date and end date fields
      And  Admin clicks the filter button
      Then Admin varifies the result "<startdate>","<enddate>"
    Examples: 
      |  startdate |   enddate   |
      |   %@!^&    |  2021-04-23 |
      |  acfbhydt  |  something  |
      | 21-12-2021 |  20-12-2021 |
      | 2021-10-08 |  2021-06-18 |
      | 2021-04-23 |  2021-10-07 |
    
     
   Scenario Outline: Validate Group by and shipping status functionality in Shipping page
	  Given Admin navigates to the shipping page on clicking shipping
	   When Admin selects an "<option>" in Group by field 
     And  Admin selects an option "<option1>"in Orders status field
     And  Admin clicks the filter button 
   
   Examples:
     | option |   option1   |
     |  Weeks |   Pending   |
     |  Days  | All Statuses|          
            
       
    Scenario Outline: Validate pagination for Shipping page 
      Given Admin navigates to the shipping page on clicking shipping
      When Admin enters "<stdate>","<endate>","<grpby>","<ordersts>"
      And  Admin clicks the filter button 
      And  Admin checks if pagination exists
      And  Admin checks for the total page count
      And  Admin checks the next button 
      Then Admin checks for previous button
    Examples:
        |   stdate   |   endate   |  grpby |  ordersts   |        
        | 2019-03-04 | 2021-10-12 |  Weeks  | All Statuses|        
            
            
            
            
            