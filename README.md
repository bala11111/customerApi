<h1>Customer API</h1>

<h3>Purpose</h3>

<p>You will need to get the task done provided below with the required specifications to assess
your candidature further.</p>

<br><br>

<h3>TASK OVERVIEW</h3>

<ol>
  <li>
    Created APIs to store the customer details in the database with validations and
    conditions that meet the following requirements:
    
    <br><br>
    
    <ul>
       <li>
        Data's stored
        <ol>
           <li>First Name</li>
           <li>Pan Number</li>
           <li>Date of birth</li>
           <li>Gender</li>
           <li>Email</li>
           <li>Profile pic</li>
        </ol>
       </li>    
       <li>
        Validations:
        <ol>
           <li>All fields are mandatory.</li>
           <li> PAN Number validation.</li>
           <li>DOB in yy/mm/dd format</li>
           <li>Profile Image: Store hosted URL in the database.</li>
        </ol>
       </li>
    </ul>
    
  </li>
</ol>


<h3>Token Mechanism</h3>

<br><br>

<p>On a successful login API call, an encrypted token(like md5
encryption) should be generated for future API calls. This token is used in the next API
and needs to be decrypted.</p>

<ol>
<h3>The two routes used are:</h3>
<li>https://customer-api-test-2020.herokuapp.com/createCustomer</li>
<li>https://customer-api-test-2020.herokuapp.com/showCustomer/:panNumber</li>
</ol>
