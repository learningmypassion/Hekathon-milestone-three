"use strict";
const NameInput = document.getElementById('Name');
const jobTitleInput = document.getElementById('jobTitle');
const phoneInput = document.getElementById('phone');
const emailinput = document.getElementById('email');
const addressInput = document.getElementById('address');
const facebookaddinput = document.getElementById('facebookadd');
const instaaddinput = document.getElementById('instaadd');
const linkaddinput = document.getElementById('linkadd');
const gitaddinput = document.getElementById('gitadd');
const aboutInput = document.getElementById('about');
const matricInput = document.getElementById('matric');
const intermediateInput = document.getElementById('intermediate');
const graduationinput = document.getElementById('graduation');
const mastersinput = document.getElementById('masters');
const phdinput = document.getElementById('phd');
const jobTitleExpinput = document.getElementById('jobTitleExp');
const companyinput = document.getElementById('company');
const startyearinput = document.getElementById('startyear');
const endyearinput = document.getElementById('endyear');
const skill1Input = document.getElementById('skill1');
const skill2Input = document.getElementById('skill2');
const skill3Input = document.getElementById('skill3');
const skill4Input = document.getElementById('skill4');
const skill5Input = document.getElementById('skill5');
const skill6Input = document.getElementById('skill6');
const profilePicInput = document.getElementById('profilePic');
const form = document.getElementById('resumeForm');
const generateResumebtn = document.getElementById('generateResumebtn');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // window.open('../preview-resume/dynamicresume.html' );
    localStorage.setItem('form_Name', NameInput.value);
    console.log(localStorage.getItem("form_Name"));
    localStorage.setItem('form_jobTitle', jobTitleInput.value);
    console.log(localStorage.getItem("form_jobTitle"));
    localStorage.setItem('form_phone', phoneInput.value);
    console.log(localStorage.getItem("form_phone"));
    localStorage.setItem('form_email', emailinput.value);
    console.log(localStorage.getItem("form_email"));
    localStorage.setItem('form_address', addressInput.value);
    console.log(localStorage.getItem("form_address"));
    localStorage.setItem('form_facebookadd', facebookaddinput.value);
    console.log(localStorage.getItem("form_facebookadd"));
    localStorage.setItem('form_instaadd', instaaddinput.value);
    console.log(localStorage.getItem("form_instaadd"));
    localStorage.setItem('form_linkadd', linkaddinput.value);
    console.log(localStorage.getItem("form_linkadd"));
    localStorage.setItem('form_gitadd', gitaddinput.value);
    console.log(localStorage.getItem("form_gitadd"));
    localStorage.setItem('form_about', aboutInput.value);
    console.log(localStorage.getItem("form_about"));
    localStorage.setItem('form_matric', matricInput.value);
    console.log(localStorage.getItem("form_matric"));
    localStorage.setItem('form_intermediate', intermediateInput.value);
    console.log(localStorage.getItem("form_intermediate"));
    localStorage.setItem('form_graduation', graduationinput.value);
    console.log(localStorage.getItem("form_graduation"));
    localStorage.setItem('form_master', mastersinput.value);
    console.log(localStorage.getItem("form_master"));
    localStorage.setItem('form_PhD', phdinput.value);
    console.log(localStorage.getItem("form_PhD"));
    localStorage.setItem('form_jobTitleExp', jobTitleExpinput.value);
    console.log(localStorage.getItem("form_jobTitleExp"));
    localStorage.setItem('form_company', companyinput.value);
    console.log(localStorage.getItem("form_company"));
    localStorage.setItem('form_startyear', startyearinput.value);
    console.log(localStorage.getItem("form_startyear"));
    localStorage.setItem('form_endyear', endyearinput.value);
    console.log(localStorage.getItem("form_endyear"));
    localStorage.setItem('form_skill1', skill1Input.value);
    console.log(localStorage.getItem("form_skill1"));
    localStorage.setItem('form_skill2', skill2Input.value);
    console.log(localStorage.getItem("form_skill2"));
    localStorage.setItem('form_skill3', skill3Input.value);
    console.log(localStorage.getItem("form_skill3"));
    localStorage.setItem('form_skill4', skill4Input.value);
    console.log(localStorage.getItem("form_skill4"));
    localStorage.setItem('form_skill5', skill5Input.value);
    console.log(localStorage.getItem("form_skill5"));
    localStorage.setItem('form_skill6', skill6Input.value);
    console.log(localStorage.getItem("form_skill6"));
    /*if (profilePic.files && profilePic.files[0]) {
         const reader = new FileReader();
         reader.onload = function () {
           const base64Image = reader.result as string;
           localStorage.setItem('form_profilePic', base64Image);
           console.log(localStorage.getItem('form_profilePic'));
         window.location.href = "../simple_layout/simpleLayout.html";
         };
         reader.readAsDataURL(profilePic.files[0]);
       } else {
         window.location.href = "../simple_layout/simpleLayout.html";
       }
 localStorage.setItem('form_profilePic', profilePicInput.value);
     console.log(localStorage.getItem("form_profilePic"))*/
    const profilePicInput = document.getElementById('profilePic');
    if (profilePicInput && profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function () {
            const base64Image = reader.result;
            localStorage.setItem('form_profilePic', base64Image);
            console.log(localStorage.getItem('form_profilePic'));
            window.location.href = "../preview-resume/dynamicresume.html";
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    else {
        window.location.href = "../preview-resume/dynamicresume.html";
    }
});
