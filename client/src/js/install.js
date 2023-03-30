const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle("hidden", false);


});


butInstall.addEventListener('click', async () => {
    const promtEvent = window.deferredprompt;

    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
   // const result = await promptEvent.userChoice;
   // if (result.outcome === "accepted") {
    //    console.log("User accepted the installation");
   // } else {
    //    console.log("User dismissed the installation");
   // }
    window.deferredPrompt = null;
    butInstall.classList.toggle("hidden", true);
});


window.addEventListener("appinstalled", (event) => {
   // console.log("App was successfully installed");   
    window.deferredprompt =null;
   // butInstall.classList.toggle("hidden", true);
});
