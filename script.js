"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.getElementById("resumeForm");
const resumePage = document.getElementById("resumePage");
const resumePhoto = document.getElementById("resumePhoto");
const resumename = document.getElementById("resumename");
const resumeEmail = document.getElementById("resumeEmail");
const resumePhone = document.getElementById("resumePhone");
const resumeEducation = document.getElementById("resumeEducation");
const resumeExperience = document.getElementById("resumeExperience");
const resumeSkills = document.getElementById("resumeSkills");
const resumeActivities = document.getElementById("resumeActivities");
const backToForm = document.getElementById("backToForm");
const shareLinkButton = document.getElementById("shareLinkButton");
form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const degree = document.getElementById("degree").value;
    const workExperience = document.getElementById("workexperience").value;
    const skills = document.getElementById("skills").value;
    const activities = document.getElementById("activities").value;
    const photoInput = document.getElementById("photo");
    const photoFile = photoInput.files ? photoInput.files[0] : null;
    let photoBase64 = "";
    if (photoFile) {
        photoBase64 = yield fileToBase64(photoFile);
        resumePhoto.src = photoBase64;
    }
    (_a = document.getElementById("container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    resumePage.classList.remove("hidden");
    resumename.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `Phone: ${phone}`;
    resumeEducation.textContent = `Degree: ${degree} from ${education}`;
    resumeExperience.textContent = workExperience;
    resumeSkills.textContent = skills;
    resumeActivities.textContent = activities;
}));
backToForm.addEventListener("click", () => {
    var _a;
    (_a = document.getElementById("container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
shareLinkButton.addEventListener("click", () => {
    var _a;
    const resumeContent = (_a = document.getElementById("resumeContent")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            text: 'Check out my resume!',
            url: window.location.href,
        }).catch(console.error);
    }
    else {
        alert("Share feature is not supported in this browser.");
    }
});
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
