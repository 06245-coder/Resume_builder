const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumePage = document.getElementById("resumePage") as HTMLElement;
const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;
const resumename = document.getElementById("resumename") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
const resumeExperience = document.getElementById("resumeExperience") as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;
const resumeActivities = document.getElementById("resumeActivities") as HTMLParagraphElement;
const backToForm = document.getElementById("backToForm") as HTMLButtonElement;
const shareLinkButton = document.getElementById("shareLinkButton") as HTMLButtonElement;

form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

   
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workexperience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const activities = (document.getElementById("activities") as HTMLTextAreaElement).value;
    const photoInput = document.getElementById("photo") as HTMLInputElement;

    const photoFile = photoInput.files ? photoInput.files[0] : null;
    let photoBase64 = "";
    if (photoFile) {
        photoBase64 = await fileToBase64(photoFile);
        resumePhoto.src = photoBase64;
    }

    
    document.getElementById("container")?.classList.add("hidden");
    resumePage.classList.remove("hidden");

    resumename.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `Phone: ${phone}`;
    resumeEducation.textContent = `Degree: ${degree} from ${education}`;
    resumeExperience.textContent = workExperience;
    resumeSkills.textContent = skills;
    resumeActivities.textContent = activities;
});

backToForm.addEventListener("click", () => {
    document.getElementById("container")?.classList.remove("hidden");
    resumePage.classList.add("hidden");
});


shareLinkButton.addEventListener("click", () => {
    const resumeContent = document.getElementById("resumeContent")?.innerHTML;
    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            text: 'Check out my resume!',
            url: window.location.href,
        }).catch(console.error);
    } else {
        alert("Share feature is not supported in this browser.");
    }
});


function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

