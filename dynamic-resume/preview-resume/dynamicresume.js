"use strict";
window.addEventListener('load', () => {
    const Name = localStorage.getItem('form_Name');
    const jobTitle = localStorage.getItem('form_jobTitle');
    const phone = localStorage.getItem('form_phone');
    const email = localStorage.getItem('form_email');
    const address = localStorage.getItem('form_address');
    const facebookadd = localStorage.getItem('form_facebookadd');
    const instaadd = localStorage.getItem('form_instaadd');
    const linkadd = localStorage.getItem('form_linkadd');
    const gitadd = localStorage.getItem('form_gitadd');
    const about = localStorage.getItem('form_about');
    const matric = localStorage.getItem('form_matric');
    const intermediate = localStorage.getItem('form_intermediate');
    const graduation = localStorage.getItem('form_graduation');
    const masters = localStorage.getItem('form_master');
    const PhD = localStorage.getItem('form_PhD');
    const jobTitleExp = localStorage.getItem('form_jobTitleExp');
    const company = localStorage.getItem('form_company');
    const startyear = localStorage.getItem('form_startyear');
    const endyear = localStorage.getItem('form_endyear');
    const skill1 = localStorage.getItem('form_skill1');
    const skill2 = localStorage.getItem('form_skill2');
    const skill3 = localStorage.getItem('form_skill3');
    const skill4 = localStorage.getItem('form_skill4');
    const skill5 = localStorage.getItem('form_skill5');
    const skill6 = localStorage.getItem('form_skill6');
    const profilePic = localStorage.getItem('form_profilePic');
    document.getElementById('Name').textContent = Name;
    document.getElementById('jobTitle').textContent = jobTitle;
    document.getElementById('phone').textContent = phone;
    document.getElementById('email').textContent = email;
    document.getElementById('address').textContent = address;
    document.getElementById('facebookadd').textContent = facebookadd;
    document.getElementById('instaadd').textContent = instaadd;
    document.getElementById('linkadd').textContent = linkadd;
    document.getElementById('gitadd').textContent = gitadd;
    document.getElementById('about').textContent = about;
    document.getElementById('matric').textContent = matric;
    document.getElementById('intermediate').textContent = intermediate;
    document.getElementById('graduation').textContent = graduation;
    document.getElementById('master').textContent = masters;
    document.getElementById('PhD').textContent = PhD;
    document.getElementById('jobTitleExp').textContent = jobTitleExp;
    document.getElementById('company').textContent = company;
    document.getElementById('startyear').textContent = startyear;
    document.getElementById('endyear').textContent = endyear;
    document.getElementById('skill1').textContent = skill1;
    document.getElementById('skill2').textContent = skill2;
    document.getElementById('skill3').textContent = skill3;
    document.getElementById('skill4').textContent = skill4;
    document.getElementById('skill5').textContent = skill5;
    document.getElementById('skill6').textContent = skill6;
    // document.getElementById('profilePic')!.src = profilePic;
    if (profilePic) {
        document.getElementById('profilePic').src = "profilePic.jpeg";
    }
    const username = Name ? Name.toLowerCase().replace(/\s+/g, '-') : 'user'; // Generate username from the name
    const baseUrl = 'http://127.0.0.1:5501/Dynamic_Resume/Preview_Resume/DynamicResume.html'; // Your Vercel deployment URL
    const uniqueResumeUrl = `${baseUrl}?/${username}`; // Create unique URL
    // Set the resume link in the DOM
    const resumeLink = document.getElementById('resumeLink');
    resumeLink.setAttribute('href', uniqueResumeUrl);
    resumeLink.textContent = uniqueResumeUrl;
    // Copy link to clipboard functionality
    document.getElementById('copyLinkBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
            alert('Resume link copied to clipboard!');
        });
    });
});
document.getElementById('editBtn').addEventListener('click', () => {
    window.history.back();
});
document.getElementById('printBtn').addEventListener('click', () => {
    window.print(); // Simply trigger the print action
});
