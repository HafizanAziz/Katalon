<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Login - Make Appoinment - Verify History</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>0d226049-5442-4709-8f30-183186316f2f</testSuiteGuid>
   <testCaseLink>
      <guid>4cf58193-c4bc-4ee2-8cca-fdb769eec535</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/CURA Healthcare Service/TC001_Verify Successful Login</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>0b2d6011-58de-42c9-a580-3e4f92215039</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/CURA Healthcare Service/List of Name - Booking/List of Name</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>a6eb40d9-70f5-43b3-8cf7-ea2cd5b8bbee</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/CURA Healthcare Service/TC002_Make Appoitment</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>9e0ea022-0df4-42f3-a150-2a911344fba7</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/CURA Healthcare Service/List of Name - Booking/List of Name</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>9e0ea022-0df4-42f3-a150-2a911344fba7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Date</value>
         <variableId>ff9abcf9-1de6-4398-935a-6630dd8adfbc</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>9e0ea022-0df4-42f3-a150-2a911344fba7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Comment</value>
         <variableId>d8e6700a-049e-4f7a-89e6-29ef55c2a974</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>55feb959-43bf-4cf2-bf1f-0528c9a8cd4c</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/CURA Healthcare Service/TC003_Verify Created Appoitment</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>5bd8a1a1-3958-496e-ab74-3eeaff6a6983</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/CURA Healthcare Service/List of Name - Booking/List of Name</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>5bd8a1a1-3958-496e-ab74-3eeaff6a6983</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Date</value>
         <variableId>ff9abcf9-1de6-4398-935a-6630dd8adfbc</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>5bd8a1a1-3958-496e-ab74-3eeaff6a6983</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Comment</value>
         <variableId>d8e6700a-049e-4f7a-89e6-29ef55c2a974</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>32772e1c-5153-4ac4-a507-bbef56b9fedb</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>ff9abcf9-1de6-4398-935a-6630dd8adfbc</id>
         <masked>false</masked>
         <name>date</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/CURA Healthcare Service/TC004_Verify Created Appoitment at History Screen</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>ae2792df-2757-47ef-b362-86357ff53ded</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/CURA Healthcare Service/List of Name - Booking/List of Name</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>ae2792df-2757-47ef-b362-86357ff53ded</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Date</value>
         <variableId>ff9abcf9-1de6-4398-935a-6630dd8adfbc</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>ae2792df-2757-47ef-b362-86357ff53ded</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Comment</value>
         <variableId>d8e6700a-049e-4f7a-89e6-29ef55c2a974</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
