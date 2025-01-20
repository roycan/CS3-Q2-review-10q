document.addEventListener("DOMContentLoaded", function() {
    const nav = document.createElement("nav");
    nav.style.backgroundColor = "#333";
    nav.style.padding = "10px";
    nav.style.display = "flex";
    nav.style.justifyContent = "center";
    nav.style.flexWrap = "wrap";

    nav.innerHTML = `
        <a href="index.html">Home</a>
        <a href="q-silver_anniv.html">Silver Anniversary Lesson</a>
        <a href="q-counting_maybes.html">Counting Maybes Lesson</a>
        <a href="q-paragraph_text.html">Get Paragraph Content Lesson</a>
        <a href="q-object_properties.html">Object Properties Lesson</a>
        <a href="q-number_filter.html">Number Filter Lesson</a>
        <a href="q-final_grades.html">Final Grades Lesson</a>
        <a href="q-user_response.html">User Response Lesson</a>
        <a href="q-empty_input.html">Empty Input Lesson</a>
        <a href="q-key_in_obj.html">Key in Object Lesson</a>
        <a href="q-deleting_properties.html">Deleting Properties Lesson</a>
    `;

    const links = nav.querySelectorAll("a");
    links.forEach(link => {
        link.style.color = "white";
        link.style.margin = "5px";
        link.style.padding = "10px 15px";
        link.style.textDecoration = "none";
        link.style.borderRadius = "5px";
        link.style.transition = "background-color 0.3s";
    });

    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.backgroundColor = "#575757";
        });
        link.addEventListener("mouseout", function() {
            link.style.backgroundColor = "";
        });
    });

    document.body.insertBefore(nav, document.body.firstChild);

    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});