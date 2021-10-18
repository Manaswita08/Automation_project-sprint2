package stepDefinition1;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hook.hooksClass;
//import cucumber.api.java.it.Date;
import junit.framework.Assert;

import java.lang.String;
import java.util.Date;
import java.util.List;
import java.util.Locale;


public class UniformDefinition {
    
	WebDriver driver;
	@Given("^Admin is on the login page$")
	public void admin_is_on_the_login_page(){
		
		 driver = hooksClass.driver; 
		driver.get("http://uniformm1.upskills.in/admin/index.php?route=common/login");
	}

	@Given("^Admin enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void admin_enters_and(String uname, String pass){
		try{
			driver.findElement(By.name("username")).sendKeys(uname);
		    driver.findElement(By.name("password")).sendKeys(pass);
		    System.out.println("1.Admin enters user name and password");
		}
		catch(Exception ex)
		{
			System.out.println("1.Some exception "+ex+" occurred");
			Assert.fail();
		}
	}

	@When("^Admin clicks on login button$")
	public void admin_clicks_on_login_button(){
		try{
			driver.findElement(By.xpath("//button[@type='submit']")).click();
			System.out.println("2.Admin able to click the login button");
		}
		 catch(Exception ex)
		{
			 System.out.println("2.Some exception "+ex+" occurred");
			 Assert.fail();
		}
	}

	@Then("^Admin is redirected to the dashboard of UniformStore page$")
	public void admin_is_redirected_to_the_dashboard_of_UniformStore_page(){
		try{
			String expectedTitle = "Dashboard";
			String actualTitle = driver.getTitle();
			Assert.assertEquals(expectedTitle, actualTitle);
			System.out.println("3.Admin is on "+actualTitle+" page");
			Thread.sleep(2000);
		}
		catch(Exception ex)
		{
			System.out.println("3.Some exception "+ex+" occurred");
			Assert.fail();
		}
	}

	@Then("^Admin navigates to the Reports section$")
	public void admin_navigates_to_the_Reports_section(){
		try{
			driver.findElement(By.xpath("//*[@id='reports']/a")).click();
			System.out.println("4.Reports");
			Thread.sleep(2000);
		}
		catch(Exception ex)
		{
			System.out.println("4.Some exception "+ex+" occurred");
			Assert.fail();
		}
	}

	@Then("^Admin navigates to the Sales section$")
	public void admin_navigates_to_the_Sales_section() throws Throwable {
		try{
			driver.findElement(By.xpath("//*[@id='reports']/ul/li[1]/a")).click();
			System.out.println("5.Sales");
			Thread.sleep(2000);
		}
		catch(Exception ex)
		{
			System.out.println("5.Some exception "+ex+" occurred");
			Assert.fail();
		}
	}
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	@Given("^Admin navigates to the orders page on clicking orders$")
	public void admin_navigates_to_the_orders_page_on_clicking_orders(){
		try{
			driver.findElement(By.xpath("//*[@id='reports']/ul/li[1]/ul/li[1]/a")).click();
			System.out.println("6.Orders");
			Thread.sleep(3000);
			
			String expectedTitle = "Sales Report";
			String actualTitle = driver.getTitle();
			Assert.assertEquals(expectedTitle, actualTitle);
			System.out.println("7.Admin is on Orders "+actualTitle+" page");
			Thread.sleep(2000);
		}
		catch(Exception ex)
		{
			System.out.println("6.Some exception "+ex+" occurred");
			Assert.fail();
		}
		
	}

	@When("^Admin selects the calendar icon from date start field$")
	public void admin_selects_the_calendar_icon_from_date_start_field(){
		 try{
			   driver.findElement(By.xpath("//input[@name='filter_date_start']/../span/button")).click();
			   Thread.sleep(2000);
			   System.out.println("8.Admin clicks the calendar icon");
			  
		   }
		   catch(Exception ex)
		   {
			   System.out.println("8.Some exception "+ex+" occurred");
			   Assert.fail();
		   }
	}

	@Then("^Admin is able to select a startdate from the calendar$")
	public void admin_is_able_to_select_a_startdate_from_the_calendar(){
		 try{
			 driver.findElement(By.xpath("/html/body/div[2]/div/div[1]/table/tbody/tr[1]/td[7]")).click();
			 Thread.sleep(2000);
		   }
		   catch(Exception ex)
		   {
			   System.out.println("9.Some exception "+ex+" occurred");
		   }
	}

	@When("^Admin selects the calendar icon from date end field$")
	public void admin_selects_the_calendar_icon_from_date_end_field(){
		 try{
			 driver.findElement(By.xpath("//div[@class='col-sm-6']//descendant::button[2]")).click();
			 Thread.sleep(1000);
		   }
		   catch(Exception ex)
		   {
			   System.out.println("10.Some exception "+ex+" occurred");
			   Assert.fail();
		   }
	}

	@Then("^Admin is able to select a enddate from the calendar$")
	public void admin_is_able_to_select_a_enddate_from_the_calendar(){
		 try{
			 driver.findElement(By.xpath("//body/div[3]/div/div[1]/table/tbody/tr[3]/td[4]")).click();
			 Thread.sleep(1000);
		   }
		   catch(Exception ex)
		   {
			   System.out.println("11.Some exception "+ex+" occurred");
		   }
	}

	@When("^Admin enters \"([^\"]*)\",\"([^\"]*)\" in the start date and end date fields$")
	public void admin_enters_in_the_start_date_and_end_date_fields(String sdate, String edate) throws ParseException{
		try{
			driver.findElement(By.name("filter_date_start")).clear();
			 driver.findElement(By.name("filter_date_end")).clear();
			 
			    String date1= driver.findElement(By.name("filter_date_start")).getText();
		    	driver.findElement(By.name("filter_date_start")).sendKeys(sdate);
		    	String date2= driver.findElement(By.name("filter_date_end")).getText();
				driver.findElement(By.name("filter_date_end")).sendKeys(edate);
				String regex = "[!@#^$%&*()_+=|<>?{}\\[\\]~-]";
			    
				if((sdate.matches("[" + regex + "]+"))||(edate.matches("[" + regex + "]+")))
		        {
		            System.out.println("Invalid:Special characters not allowed");
		            Assert.fail();
		        }
				else if((edate == null || !edate.matches("\\d{4}-[01]\\d-[0-3]\\d")) && (sdate == null || !sdate.matches("\\d{4}-[01]\\d-[0-3]\\d")))
		        {
		        	System.out.println("Wrong format");
		        	Assert.fail(); 
		        }
		        else
		        {
		        	SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
				    df.setLenient(false);
				    
			        df.parse(edate);
			        df.parse(sdate);
			        System.out.println("Correct format");       	
		        }
		       
		       SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		          
		       Date dt1 = sdf.parse(sdate);
		       Date dt2 = sdf.parse(edate);
		       if(dt1.compareTo(dt2) < 0)
		       {
		         System.out.println("Date1 is less than Date2");
		       }
		       else if(dt1.compareTo(dt2) > 0)
		       {
		          System.out.println("Date1 is greater than Date2");
		          Assert.fail(); 
		       }
		       else if(dt1.compareTo(dt2)==0)
		       {
		         System.out.println("Both dates are same");
		       }
		       else
		       {
		    	   System.out.println("Something went wrong");
		       }
		}
		catch(Exception ex)
		{
			System.out.println("Some exception "+ex+" occurred");
		}
		    
	}

	@When("^Admin clicks the filter button$")
	public void admin_clicks_the_filter_button(){
		 try{
			 driver.findElement(By.xpath("//button[@id='button-filter']")).click();
			 System.out.println("Admin is able to filter the data");
		   }
		   catch(Exception ex)
		   {
			   System.out.println("13.Filter button not working"); 
		   }
	}
	@Then("^Admin varifies the result \"([^\"]*)\",\"([^\"]*)\"$")
	public void admin_varifies_the_result(String sdate, String edate){
		 try {
             SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
             sdf.setLenient(false);

             Date d1 = sdf.parse(sdate);
             Date d2 = sdf.parse(edate);
             
             String date_start_res = driver.findElement(By.xpath("//div[@class='table-responsive']/descendant::tbody/tr[1]/td[1]")).getText();
 			 System.out.println(date_start_res);
 			 
 			 String date_end_res = driver.findElement(By.xpath("//div[@class='table-responsive']/descendant::tbody/tr[1]/td[2]")).getText();
 			 System.out.println(date_end_res);
 			
 			   DateFormat originalFormat1 = new SimpleDateFormat("dd/MM/yyyy", Locale.ENGLISH);
		       DateFormat targetFormat1 = new SimpleDateFormat("yyyy-MM-dd");
		       Date date = originalFormat1.parse(date_start_res);
		       String formattedDate1 = targetFormat1.format(date);
		       
		       System.out.println("Date start in result: "+formattedDate1);
		       
		       DateFormat originalFormat2 = new SimpleDateFormat("dd/MM/yyyy", Locale.ENGLISH);
		       DateFormat targetFormat2 = new SimpleDateFormat("yyyy-MM-dd");
		       Date date2 = originalFormat2.parse(date_end_res);
		       String formattedDate2 = targetFormat2.format(date2);
		       
		       System.out.println("Date end in result: "+formattedDate2); 
		       
		       
               Date d3 = sdf.parse(formattedDate1);
               Date d4 = sdf.parse(formattedDate2);

             if ((d3.compareTo(d1) >= 0)&&(d4.compareTo(d1) >= 0)) {
                   if ((d3.compareTo(d2) <0)&&(d4.compareTo(d2) <0)) {
                          System.out.println("Result is correct");
                   } 
                   else 
                   {
                          System.out.println("Result is NOT correct");
                          Assert.fail();
                   }
             }
             else {
                   System.out.println("Result is NOT correct");
             }

         } 
	     catch (ParseException pe) 
		  {
             pe.printStackTrace();
          }

	}
	
	
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	@When("^Admin selects an \"([^\"]*)\" in Group by field$")
	public void admin_selects_an_in_Group_by_field(String arg1){
		 try{
			 Select grpBy = new Select(driver.findElement(By.id("input-group")));
		      grpBy.selectByVisibleText(arg1);
		      Thread.sleep(1000);
		   }
		   catch(Exception ex)
		   {
			   System.out.println("15.Admin unable to select a time period from dropdown"+ex); 
		   }
	}

	@When("^Admin selects an option \"([^\"]*)\"in Orders status field$")
	public void admin_selects_an_option_in_Orders_status_field(String arg1){
		try{
			Select orsts = new Select(driver.findElement(By.name("filter_order_status_id")));
			 orsts.selectByVisibleText(arg1);
			 Thread.sleep(2000);
		   }
		   catch(Exception ex)
		   {
			   System.out.println("16.Admin unable to select status from the dropdown"+ex);
		   }
	}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	@When("^Admin enters \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void admin_enters(String startdt, String enddt, String groupby, String orstatus){
		try{
			driver.findElement(By.name("filter_date_start")).clear();
			 driver.findElement(By.name("filter_date_end")).clear();
			
			driver.findElement(By.name("filter_date_start")).sendKeys(startdt);
			driver.findElement(By.name("filter_date_end")).sendKeys(enddt);
			Select grpBy = new Select(driver.findElement(By.id("input-group")));
		    grpBy.selectByVisibleText(groupby);
		    Select orsts = new Select(driver.findElement(By.name("filter_order_status_id")));
		    orsts.selectByVisibleText(orstatus);
		    Thread.sleep(2000);
		}
		catch(Exception ex)
		{
			System.out.println("17.Some exception found: "+ex);
		}	
	}

	@When("^Admin checks if pagination exists$")
	public void admin_checks_if_pagination_exists(){
		try{
			List<WebElement> pagination =driver.findElements(By.xpath("//ul[@class='pagination']//a")); 
			if(pagination .size()>0)
			{ 
				System.out.println("18.pagination exists"); 
				//System.out.println(pagination.size());
			}
		}
		catch(Exception ex)
		{
			System.out.println("18.Some exception found: "+ex);
		}
	}

	@When("^Admin checks for the total page count$")
	public void admin_checks_for_the_total_page_count(){
		try{
			String str= driver.findElement(By.xpath("//div[@class='col-sm-6 text-right']")).getText();
			//System.out.println(str);
			int total_pages= Integer.valueOf(str.substring(str.indexOf("(")+1,str.indexOf("Pages")-1));
			System.out.println("total pages: "+total_pages);
		}
		catch(Exception ex)
		{
			System.out.println("19.Some exception found: "+ex);
		}
	}

	@When("^Admin checks the next button$")
	public void admin_checks_the_next_button(){
		try{
			String str= driver.findElement(By.xpath("//div[@class='col-sm-6 text-right']")).getText();   //Showing 1 to 20 of 84 (5 Pages)
			int total_pages= Integer.valueOf(str.substring(str.indexOf("(")+1,str.indexOf("Pages")-1)); //total pages
			
			
			for(int i=1;i<total_pages;i++)
			 {
				 WebElement active_page= driver.findElement(By.xpath("//ul[@class='pagination']//li//span"));//active page
				 System.out.println("Active page: "+active_page.getText());
				 active_page.click();//clicking the default page
				 
				 String pageno = Integer.toString(i+1);//i+1 is the next page
				 WebElement NextButton= driver.findElement(By.xpath("//ul[@class='pagination']/li/a[text()='"+pageno+"']"));
				 NextButton.click();				  
			 }
		}
		catch(Exception ex)
		{
			System.out.println("21.Some exception found: "+ex);
		}
	}

	@Then("^Admin checks for previous button$")
	public void admin_checks_for_previous_button(){
		try{
			String str= driver.findElement(By.xpath("//div[@class='col-sm-6 text-right']")).getText();   //Showing 1 to 20 of 84 (5 Pages)
			int total_pages= Integer.valueOf(str.substring(str.indexOf("(")+1,str.indexOf("Pages")-1));
			for(int i=1;i<total_pages;i++)
			{
				driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[2]/div[3]/div[1]/ul/li[2]/a")).click();
			}
			
		}
		catch(Exception ex)
		{
			System.out.println("22.Some exception found: "+ex);
		}
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	@Given("^Admin navigates to the tax page on clicking tax$")
	public void admin_navigates_to_the_tax_page_on_clicking_tax(){
		try{
			driver.findElement(By.xpath("//*[@id='reports']/ul/li[1]/ul/li[2]/a")).click();
			System.out.println("23.Tax");
			Thread.sleep(2000);
			
			String expectedTitle = "Tax Report";
			String actualTitle = driver.getTitle();
			Assert.assertEquals(expectedTitle, actualTitle);
			System.out.println("Admin is on Sales "+actualTitle+" page");
			Thread.sleep(2000);
		}
		catch(Exception ex)
		{
			System.out.println("23.Some exception "+ex+" occurred");
			Assert.fail();
		}
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////
	@Given("^Admin navigates to the shipping page on clicking shipping$")
	public void admin_navigates_to_the_shipping_page_on_clicking_shipping(){
		try{
			driver.findElement(By.xpath("//*[@id='reports']/ul/li[1]/ul/li[3]/a")).click();
			System.out.println("24.Shipping");
			Thread.sleep(2000);
			
			String expectedTitle = "Shipping Report";
			String actualTitle = driver.getTitle();
			Assert.assertEquals(expectedTitle, actualTitle);
			System.out.println("Admin is on Sales "+actualTitle+" page");
			Thread.sleep(2000);
		}
		catch(Exception ex)
		{
			System.out.println("23.Some exception "+ex+" occurred");
			Assert.fail();
		}
	}
	
}



