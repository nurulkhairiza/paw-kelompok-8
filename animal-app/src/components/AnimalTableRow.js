
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class AnimalTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteAnimal = this.deleteAnimal.bind(this);
    }

    deleteAnimal() {
        axios.delete('http://localhost:8080/animals/delete-animal/' + this.props.obj._id)
            .then((res) => {
                console.log('Animal successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    ageCalculator() {  
        var dob = this.props.obj.age;  
          

        //extract the year, month, and date from user date input  
        var dobYear = dob.getYear();  
        var dobMonth = dob.getMonth();  
        var dobDate = dob.getDate();  
          
        //get the current date from the system  
        var now = new Date();  
        //extract the year, month, and date from current date  
        var currentYear = now.getYear();  
        var currentMonth = now.getMonth();  
        var currentDate = now.getDate();  
          
        //declare a variable to collect the age in year, month, and days  
        var age = {};  
        var ageString = "";  
        
        //get years  
        var yearAge = currentYear - dobYear;  
        var monthAge = '';
        var dateAge = '';
          
        //get months  
        if (currentMonth >= dobMonth)  
          //get months when current month is greater  
          monthAge = currentMonth - dobMonth;  
        else {  
          yearAge--;  
          monthAge = 12 + currentMonth - dobMonth;  
        }  
      
        //get days  
        if (currentDate >= dobDate)  
          //get days when the current date is greater  
          dateAge = currentDate - dobDate;  
        else {  
          monthAge--;  
          dateAge = 31 + currentDate - dobDate;  
      
          if (monthAge < 0) {  
            monthAge = 11;  
            yearAge--;  
          }  
        }  
        //group the age in a single variable  
        age = {  
        years: yearAge,  
        months: monthAge,  
        days: dateAge  
        };  
            
            
        if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )  
           ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old.";  
        else if ( (age.years === 0) && (age.months === 0) && (age.days > 0) )  
           ageString = "Only " + age.days + " days old!";  
        //when current month and date is same as birth date and month  
        else if ( (age.years > 0) && (age.months === 0) && (age.days === 0) )  
           ageString = age.years +  " years old. Happy Birthday!!";  
        else if ( (age.years > 0) && (age.months > 0) && (age.days === 0) )  
           ageString = age.years + " years and " + age.months + " months old.";  
        else if ( (age.years === 0) && (age.months > 0) && (age.days > 0) )  
           ageString = age.months + " months and " + age.days + " days old.";  
        else if ( (age.years > 0) && (age.months === 0) && (age.days > 0) )  
           ageString = age.years + " years, and" + age.days + " days old.";  
        else if ( (age.years === 0) && (age.months > 0) && (age.days === 0) )  
           ageString = age.months + " months old.";  
        //when current date is same as dob(date of birth)  
        else ageString = "Welcome to Earth! <br> It's first day on Earth!";   
      
        //display the calculated age  
        return ageString;   
                   
      
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.species}</td>
                <td>{this.ageCalculator}</td>
                <td>{this.props.obj.adopted}</td>
                <td>
                    <Link className="edit-link" to={"/edit-animal/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteAnimal} size="sm" variant="danger" href={"/animal-list"}>Delete</Button>
                </td>
            </tr>
        );
    }
}