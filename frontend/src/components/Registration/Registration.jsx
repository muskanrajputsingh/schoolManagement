import React,{useState} from 'react';
import './Registration.css';
// import {useHistory } from 'react-router-dom';


const Registration = () => {
// const history = useHistory();
const[user,setUser]=useState({
name:"",fname:"",mname:"",birth_day:"",birth_month:"",birth_year:"",email:"",phone:"",gender:"",image:"",address:"",pin:"",state:"",city:"",pschool:"",previousclass:"",percent:"",yrofpass:"",course:""
});
   
 let name,value;

  const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
    console.log({...user,[name]:value});
  }

  const postData=async(e)=>{
    e.preventDefault();
    const {name,fname,mname,birth_day,birth_month,birth_year,email,phone,gender,image,address,pin,state,city,pschool,previousclass,percent,yrofpass,course} = user;

    const res = await fetch("/register",{
     method:"POST",
     headers:{
       "Content-Type" : "application/json"
     },
     body:JSON.stringify({
       name,fname,mname,birth_day,birth_month,birth_year,email,phone,gender,image,address,pin,state,city,pschool,previousclass,percent,yrofpass,course
     })
    });
    const data = await res.json();
    if(data.status === 422 || !data){
     window.alert("invalid registration");
     console.log("invalid registration");
    }else{
     window.alert(" registration successfull");
     console.log(" registration successfull");
      // history.push("/application")
     }
    }
  
return (
<div className="form-page">
    <h1>Application Form</h1>
<form method='POST'>
<table align="center" cellpadding="10">
 
 {/* <!----- First Name------------------------------------------------------------------------------------------------------------> */}
<tr>
<td>STUDENT NAME</td>
<td><input type="text" name="name" value={user.name} onChange={handleInputs}  maxlength="30"/>
(max 30 characters a-z and A-Z)
</td>
</tr>
 
{/* <!----- father Name ----------------------------------------------------------> */}
<tr>
<td>FATHER NAME</td>
<td><input type="text" name="fname" value={user.fname} onChange={handleInputs} maxlength="30"/>
(max 30 characters a-z and A-Z)
</td>
</tr>
{/* <!----- mother Name ----------------------------------------------------------> */}
<tr>
<td>Mother NAME</td>
<td><input type="text" name="mname" value={user.mname} onChange={handleInputs} maxlength="30"/>
(max 30 characters a-z and A-Z)
</td>
</tr>
 
{/* <!----- Date Of Birth --------------------------------------------------------> */}
<tr>
<td>DATE OF BIRTH</td>
 <td>
<select name="birth_day"  value={user.birth_day} onChange={handleInputs} id="Birthday_Day">
<option value="-1">Day:</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
 
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
 
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
 
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
 
<option value="31">31</option>
</select>
 
<select id="Birth_Month" name="birth_month" value={user.birth_month} onChange={handleInputs}>
<option value="-1">Month:</option>
<option value="January">Jan</option>
<option value="February">Feb</option>
<option value="March">Mar</option>
<option value="April">Apr</option>
<option value="May">May</option>
<option value="June">Jun</option>
<option value="July">Jul</option>
<option value="August">Aug</option>
<option value="September">Sep</option>
<option value="October">Oct</option>
<option value="November">Nov</option>
<option value="December">Dec</option>
</select>
 
<select name="birth_year" id="Birth_Year" value={user.birth_year} onChange={handleInputs}>
 
<option value="-1">Year:</option>
<option value="2012">2012</option>
<option value="2011">2011</option>
<option value="2010">2010</option>
<option value="2009">2009</option>
<option value="2008">2008</option>
<option value="2007">2007</option>
<option value="2006">2006</option>
<option value="2005">2005</option>
<option value="2004">2004</option>
<option value="2003">2003</option>
<option value="2002">2002</option>
<option value="2001">2001</option>
<option value="2000">2000</option>
 
<option value="1999">1999</option>
<option value="1998">1998</option>
<option value="1997">1997</option>
<option value="1996">1996</option>
<option value="1995">1995</option>
<option value="1994">1994</option>
<option value="1993">1993</option>
<option value="1992">1992</option>
<option value="1991">1991</option>
<option value="1990">1990</option>
 
<option value="1989">1989</option>
<option value="1988">1988</option>
<option value="1987">1987</option>
<option value="1986">1986</option>
<option value="1985">1985</option>
<option value="1984">1984</option>
<option value="1983">1983</option>
<option value="1982">1982</option>
<option value="1981">1981</option>
<option value="1980">1980</option>
</select>
</td>
</tr>
 
{/* <!----- Email Id ----------------------------------------------------------> */}
<tr>
<td>EMAIL ID</td>
<td><input type="text" name="email" value={user.email} maxlength="100" onChange={handleInputs} /></td>
</tr>
 
{/* <!----- Mobile Number ----------------------------------------------------------> */}
<tr>
<td>MOBILE NUMBER</td>
<td>
<input type="text" name="phone" value={user.phone} onChange={handleInputs} maxlength="10" />
(10 digit number)
</td>
</tr>
 
{/* <!----- Gender -----------------------------------------------------------> */}
<tr>
<td>GENDER</td>
<td>
Male <input type="radio" name="gender"  value="male"  onChange={handleInputs} />
Female <input type="radio" name="gender" value="female"  onChange={handleInputs}/>
</td>
</tr>

<tr>
<td>STUDENT PHOTO</td>
<td>
 <input type='file' name='image' value={user.image} onChange={handleInputs} />
</td>
</tr>
 
{/* <!----- Address ----------------------------------------------------------> */}
<tr>
<td>ADDRESS <br /><br /><br /></td>
<td><textarea name="address" value={user.address} onChange={handleInputs} rows="4" cols="30"></textarea></td>
</tr>
 
{/* <!----- City ----------------------------------------------------------> */}
<tr>
<td>CITY</td>
<td><input type="text" name="city" value={user.city} onChange={handleInputs} maxlength="30" />
(max 30 characters a-z and A-Z)
</td>
</tr>
 
{/* <!----- Pin Code ----------------------------------------------------------> */}
<tr>
<td>PIN CODE</td>
<td><input type="text" name="pin" value={user.pin} onChange={handleInputs} maxlength="6" />
(6 digit number)
</td>
</tr>
 
{/* <!----- State ----------------------------------------------------------> */}
<tr>
<td>STATE</td>
<td><input type="text" name="state" value={user.state} onChange={handleInputs} maxlength="30" />
(max 30 characters a-z and A-Z)
</td>
</tr>
 
{/* <!----- Country ----------------------------------------------------------> */}
<tr>
<td>COUNTRY</td>
<td><input type="text" name="country" value="India" readonly="readonly" /></td>
</tr>
 
{/* <!----- Hobbies ----------------------------------------------------------> */}
 
<tr>
<td>HOBBIES <br /><br /><br /></td>
 
<td>
Drawing
<input type="checkbox" name="Hobby_Drawing" value="Drawing" />
Singing
<input type="checkbox" name="Hobby_Singing" value="Singing" />
Dancing
<input type="checkbox" name="Hobby_Dancing" value="Dancing" />
Sketching
<input type="checkbox" name="Hobby_Cooking" value="Cooking" />
<br />
Others
<input type="checkbox" name="Hobby_Other" value="Other" />
<input type="text" name="Other_Hobby" maxlength="30" />
</td>
</tr>
 
{/* <!----- Qualification----------------------------------------------------------> */}
<tr>
<td>QUALIFICATION <br /><br /><br /><br /><br /><br /><br /></td>
 <td>
<table>
 <tr className='sec'>
<td align="center"><b>School Name</b></td>
<td align="center"><b>Class</b></td>
<td align="center"><b>Percentage</b></td>
<td align="center"><b>Year of Passing</b></td>
</tr>
 
<tr className='sec'>
<td><input type="text" name="pschool" value={user.pschool} onChange={handleInputs}  maxlength="50" /></td>
<td><input type="text" name="previousclass" value={user.previousclass} onChange={handleInputs} maxlength="10" /></td>
<td><input type="text" name="percent" value={user.percent} onChange={handleInputs} maxlength="30" /></td>
<td><input type="text" name="yrofpass" value={user.yrofpass} onChange={handleInputs} maxlength="30" /></td>
</tr>
 
{/* <tr>
<td>2</td>
<td>Class XII</td>
<td><input type="text" name="ClassXII_Board" maxlength="30" /></td>
<td><input type="text" name="ClassXII_Percentage" maxlength="30" /></td>
<td><input type="text" name="ClassXII_YrOfPassing" maxlength="30" /></td>
</tr>
 
<tr>
<td>3</td>
<td>Graduation</td>
<td><input type="text" name="Graduation_Board" maxlength="30" /></td>
<td><input type="text" name="Graduation_Percentage" maxlength="30" /></td>
<td><input type="text" name="Graduation_YrOfPassing" maxlength="30" /></td>
</tr>
 
<tr>
<td>4</td>
<td>Masters</td>
<td><input type="text" name="Masters_Board" maxlength="30" /></td>
<td><input type="text" name="Masters_Percentage" maxlength="30" /></td>
<td><input type="text" name="Masters_YrOfPassing" maxlength="30" /></td>
</tr> */}
 
<tr>
<td align="center">(previous school)</td>
<td></td>
<td ></td>
<td></td>
</tr>
</table>
</td>
</tr>
 
{/* <!----- Course ----------------------------------------------------------> */}
<tr>
<td>COURSES<br />APPLIED FOR</td>
<td>
<select id="course" name="course"  onChange={handleInputs}>
<option value="-1">Class:</option>
<option value="nursery">Nursery</option>
<option value="kg1">Kg1</option>
<option value="kg2">Kg2</option>
<option value="class1">Class1</option>
<option value="class2">Class2</option>
<option value="class3">Class3</option>
<option value="class4">Class4</option>
<option value="class5">Class5</option>
<option value="class6">Class6</option>
<option value="class7">Class7</option>
<option value="class8">Class8</option>
<option value="class9">Class9</option>
<option value="class10">Class10</option>
<option value="class11">Class11</option>
<option value="class12">Class12</option>
</select>
</td>
</tr>
 
{/* <!----- Submit and Reset -------------------------------------------------> */}
<tr>
<td colspan="2" align="center">
<input className='input-btn' type="submit" value="Submit" onClick={postData} />
<input className='input-btn' type="reset" value="Reset" />
</td>
</tr>
</table>
</form>
</div>
  )
}
export default Registration