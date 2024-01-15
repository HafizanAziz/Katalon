import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://katalon-demo-cura.herokuapp.com/')

WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service_Login/a_Make Appointment'))

WebUI.setText(findTestObject('Object Repository/Page_CURA Healthcare Service_Login/input_username'), 'John Doe')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_CURA Healthcare Service_Login/input_password'), 'g3/DOGG74jC3Flrr3yH+3D/yKbOqqUNM')

WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service_Login/button_Login'))

WebUI.click(findTestObject('Object Repository/Make Appoitment/Page_CURA Healthcare Service/a_Make Appointment'))

WebUI.click(findTestObject('Make Appoitment/Page_CURA Healthcare Service/input_visit_date'))

WebUI.setText(findTestObject('Make Appoitment/Page_CURA Healthcare Service/input_visit_date'), date)

WebUI.click(findTestObject('Object Repository/Make Appoitment/Page_CURA Healthcare Service/input_comment'))

WebUI.setText(findTestObject('Make Appoitment/Page_CURA Healthcare Service/input_comment'), comment)

WebUI.click(findTestObject('Object Repository/Make Appoitment/Page_CURA Healthcare Service/button_Book Appointment'))

WebUI.verifyElementText(findTestObject('Make Appoitment/Page_CURA Healthcare Service/Verify - Visit Date'), date)

WebUI.verifyElementText(findTestObject('Make Appoitment/Page_CURA Healthcare Service/Verify - Comment'), comment)

WebUI.click(findTestObject('History/Menu'))

WebUI.click(findTestObject('History/Menu - History'))

WebUI.verifyTextPresent(date, true, FailureHandling.STOP_ON_FAILURE)

WebUI.verifyTextPresent(comment, true, FailureHandling.STOP_ON_FAILURE)

