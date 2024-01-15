<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Login - Make Appointment</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>a41f8587-6bbe-4829-99f2-330bbb063e87</testSuiteGuid>
   <testCaseLink>
      <guid>8a14fede-f625-4f4d-9d3e-c29097996102</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CURA Healthcare Service/TC001_Verify Successful Login</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>b80c4b03-81f4-4823-a0fb-b231c72e46fb</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CURA Healthcare Service/TC002_Make Appoitment</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>a1d70e9f-e2ca-43d2-91f3-64e1119cac12</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/CURA Healthcare Service/List of Name - Booking/List of Name</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>a1d70e9f-e2ca-43d2-91f3-64e1119cac12</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Date</value>
         <variableId>ff9abcf9-1de6-4398-935a-6630dd8adfbc</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>a1d70e9f-e2ca-43d2-91f3-64e1119cac12</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Comment</value>
         <variableId>d8e6700a-049e-4f7a-89e6-29ef55c2a974</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
