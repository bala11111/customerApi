<h1>Customer API</h1>

<h3>Purpose</h3>

<p>You will need to get the task done provided below with the required specifications to assess
your candidature further.</p>

<h3>TASK OVERVIEW</h3>

<ol>
    <li>
    Created APIs to store the customer details in the database with validations and
    conditions that meet the following requirements:<br>
        <ul><br>
           <li>
              Data's stored:
              <ol>
                 <li>First Name</li>
                 <li>Pan Number</li>
                 <li>Date of birth</li>
                 <li>Gender</li>
                 <li>Email</li>
                 <li>Profile pic</li>
              </ol>
           </li>  <br>  
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
   </li><br>
   <li>
         Created an API to get the customer details stored in the earlier API. The token generated in
         the earlier API has to be used for authentication and needs to be decrypted.
   </li>
</ol>


<h3>Token Mechanism</h3>

<p>On a successful login API call, an encrypted token(like md5
encryption) should be generated for future API calls. This token is used in the next API
and needs to be decrypted.</p>

<ol>
<h3>The two routes used are:</h3>
<li>https://customer-api-test-2020.herokuapp.com/api/createCustomer</li>
<li>https://customer-api-test-2020.herokuapp.com/api/showCustomer/:panNumber</li>
</ol>
