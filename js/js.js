function fade(btnElement) {
            if (btnElement.value === "OFF") {
                document.getElementById("eyeRblur").className = "fade-out";
                document.getElementById("eyeLblur").className = "fade-out";
                btnElement.value = "ON";
            }
            else {
                document.getElementById("eyeRblur").className = "fade-in";
                document.getElementById("eyeLblur").className = "fade-in";
                btnElement.value = "OFF";
            }
        };
