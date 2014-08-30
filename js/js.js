function fade(btnElement) {
            if (btnElement.value === "OFF") {
                document.getElementById("eyeRblur").className = "fade-out";
                document.getElementById("eyeLblur").className = "fade-out";
                document.getElementById("reactor1").className = "fade-out";
                document.getElementById("reactor2").className = "fade-out";
                btnElement.value = "ON";
            }
            else {
                document.getElementById("eyeRblur").className = "fade-in";
                document.getElementById("eyeLblur").className = "fade-in";
                document.getElementById("reactor1").className = "fade-in";
                document.getElementById("reactor2").className = "fade-in";
                btnElement.value = "OFF";
            }
        };
