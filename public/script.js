document.addEventListener("DOMContentLoaded", function() {
    const nav = document.createElement("nav");
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
    document.body.insertBefore(nav, document.body.firstChild);
});